<template>
    <transition name="el-zoom-in-center" :appear=true>
        <div id="map" ref="map" class="map-box component-border" :style="setHeight()"></div>
    </transition>
</template>

<script>
import carOnline from "@/assets/svg/car-online.svg"
import production from "@/assets/svg/production.svg"
import carOffline from "@/assets/svg/car-offline.svg"
import station from "@/assets/svg/station.svg"
import carrier from "@/assets/svg/carrier.svg"
import start from "@/assets/svg/start.svg"
import end from "@/assets/svg/end.svg"
import {mapActions, mapState} from "vuex";
import {wsOfflineCarList, wsOnlineCarList, getCarrierAddress, wsCarrierAddress} from "@/api/consumer-ws";
import {JSONData} from "@/api/websocket-util";
import {getHydrogenStationAddress, getProductionStationAddress} from "@/api/consumer-http";

export default {
    name: "TencentMap",
    props: {
        height: {
            type: Number,
            default: 720
        },
        type: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            onloadMap: true,
            onlineCarListWs: null,
            offlineCarListWs: null,
            carrierListWs: null
        }
    },
    created() {
        this.initData();
        this.productionSvg();
    },
    mounted() {
        this.initMap();
    },
    computed: {
        ...mapState(["stateMapData"]),
        mapDataFormat() {
            let result = [];
            switch (this.type) {
                case this.$util.DATA_STATION_TYPE.factory:
                    this.stateMapData.factory.forEach(factory => {
                        result.push({
                            id: factory.id,
                            position: new TMap.LatLng(factory.latitude, factory.longitude),
                            properties: {
                                name: factory.name,
                                type: this.$util.DATA_STATION_TYPE.factory
                            }
                        });
                    })
                    break;
                case this.$util.DATA_STATION_TYPE.carrier:
                    this.stateMapData.carrier.forEach(carrier => {
                        result.push({
                            id: carrier.id,
                            position: new TMap.LatLng(carrier.latitude, carrier.longitude),
                            properties: {
                                name: carrier.name,
                                type: this.$util.DATA_STATION_TYPE.carrier
                            }
                        });
                    })
                    break;
                case this.$util.DATA_STATION_TYPE.station:
                    this.stateMapData.station.forEach(station => {
                        result.push({
                            id: station.id,
                            position: new TMap.LatLng(station.latitude, station.longitude),
                            properties: {
                                name: station.name,
                                type: this.$util.DATA_STATION_TYPE.station
                            }
                        });
                    })
                    break;
                case this.$util.DATA_STATION_TYPE.vehicle:
                    let onlineLength = this.stateMapData.vehicle.online.length;
                    let offlineLength = this.stateMapData.vehicle.offline.length;
                    let onlineSize = onlineLength / 2;
                    let offlineSize = offlineLength / 2;
                    new Promise(()=>{
                        this.stateMapData.vehicle.online.slice(0,onlineSize).forEach(online => {
                            result.push({
                                id: online.id,
                                position: new TMap.LatLng(online.latitude, online.longitude),
                                properties: {
                                    name: online.name,
                                    type: this.$util.DATA_STATION_TYPE.onlineVehicle
                                }
                            });
                        })
                    })
                    new Promise(()=>{
                        this.stateMapData.vehicle.online.slice(onlineSize).forEach(online => {
                            result.push({
                                id: online.id,
                                position: new TMap.LatLng(online.latitude, online.longitude),
                                properties: {
                                    name: online.name,
                                    type: this.$util.DATA_STATION_TYPE.onlineVehicle
                                }
                            });
                        })
                    })
                    new Promise(()=>{
                        this.stateMapData.vehicle.offline.slice(0,offlineSize).forEach(offline => {
                            result.push({
                                id: offline.id,
                                position: new TMap.LatLng(offline.latitude, offline.longitude),
                                properties: {
                                    name: offline.name,
                                    type: this.$util.DATA_STATION_TYPE.offlineVehicle
                                }
                            });
                        })
                    })
                    new Promise(()=>{
                        this.stateMapData.vehicle.offline.slice(offlineSize).forEach(offline => {
                            result.push({
                                id: offline.id,
                                position: new TMap.LatLng(offline.latitude, offline.longitude),
                                properties: {
                                    name: offline.name,
                                    type: this.$util.DATA_STATION_TYPE.offlineVehicle
                                }
                            });
                        })
                    })
                    break;
                case this.$util.DATA_STATION_TYPE.all:
                    this.stateMapData.factory.forEach(factory => {
                        result.push({
                            id: factory.id,
                            position: new TMap.LatLng(factory.latitude, factory.longitude),
                            properties: {
                                name: factory.name,
                                type: this.$util.DATA_STATION_TYPE.factory
                            }
                        });
                    })
                    this.stateMapData.station.forEach(station => {
                        result.push({
                            id: station.id,
                            position: new TMap.LatLng(station.latitude, station.longitude),
                            properties: {
                                name: station.name,
                                type: this.$util.DATA_STATION_TYPE.station
                            }
                        });
                    })
                    break;
                default:
                    break;
            }
            return result;
        },
    },
    methods: {
        ...mapActions(["actionMapDataOnline", "actionMapDataOffline", "actionMapDataFactory", "actionMapDataStation", "actionMapDataCarrier"]),
        receiveWsData() {
            const that = this;

            new Promise(() => {
                that.onlineCarListWs.onmessage = (data) => {
                    let result = JSONData(data).data;
                    this.actionMapDataOnline(result)
                }
            })
            new Promise(() => {
                that.offlineCarListWs.onmessage = (data) => {
                    let result = JSONData(data).data;
                    this.actionMapDataOffline(result)
                }
            })

        },
        async initData() {
            let factory;
            let station;
            switch (this.type) {
                case this.$util.DATA_STATION_TYPE.factory:
                    factory = await getProductionStationAddress();
                    this.actionMapDataFactory(factory.data);
                    break;
                case this.$util.DATA_STATION_TYPE.carrier:
                    this.carrierListWs = this.$ws(wsCarrierAddress())
                    this.carrierListWs.onmessage = (data) => {
                        let that = this;
                        try {
                            let newData = data.data.replace(/(^\"*)|(\"*$)/g, "");
                            let result = JSON.parse(newData).data;
                            that.actionMapDataCarrier(result)
                        } catch (e) {
                            let result = JSONData(data);
                            that.actionMapDataCarrier(result)
                        }

                    }
                    break;
                case this.$util.DATA_STATION_TYPE.station:
                    station = await getHydrogenStationAddress();
                    this.actionMapDataStation(station.data);
                    break;
                case this.$util.DATA_STATION_TYPE.vehicle:
                    this.onlineCarListWs = this.$ws(wsOnlineCarList())
                    this.offlineCarListWs = this.$ws(wsOfflineCarList())
                    this.receiveWsData();
                    break;
                case this.$util.DATA_STATION_TYPE.all:
                    factory = await getProductionStationAddress();
                    station = await getHydrogenStationAddress();
                    this.actionMapDataFactory(factory.data);
                    this.actionMapDataStation(station.data);
                    break;
                default:
                    break;
            }
        },
        setHeight() {
            return `height: ${this.height}px`;
        },
        productionSvg() {

            function Production(options) {
                TMap.DOMOverlay.call(this, options);
            }

            Production.prototype = new TMap.DOMOverlay();

            Production.prototype.onInit = function (options) {
                this.type = options.type;
                this.position = options.position;
                this.id = options.id;
                this.name = options.name;
            };

            Production.prototype.onDestroy = function () {
                if (this.onClick) {
                    this.dom.removeEventListener(this.onClick);
                }
            };

            Production.prototype.createDOM = function () {
                let dom;
                let img;
                let p;

                new Promise(() => {
                    dom = document.createElement('div');
                })
                new Promise(() => {
                    img = document.createElement("img");
                })
                new Promise(() => {
                    p = document.createElement("p");
                })

                switch (this.type) {
                    case 10001:
                        img.width = 40;
                        img.height = 40;
                        img.src = production;
                        p.innerText = this.name;
                        dom.style.cssText = 'position:absolute;top:25px;left:-5px;text-align:center;';
                        dom.appendChild(p);
                        break;
                    case 10002:
                        img.width = 40;
                        img.height = 40;
                        img.src = station;
                        p.innerText = this.name;
                        dom.style.cssText = 'position:absolute;top:25px;left:-5px;text-align:center;';
                        dom.appendChild(p);
                        break;
                    case 200:
                        img.src = carOnline;
                        img.width = 50;
                        img.height = 40;
                        dom.style.cssText = 'position:absolute;top:0px;left:20px;';
                        break;
                    case 404:
                        img.width = 50;
                        img.height = 40;
                        img.src = carOffline;
                        dom.style.cssText = 'position:absolute;top:0px;left:20px;';
                        break;
                    case 10004:
                        img.width = 50;
                        img.height = 40;
                        img.src = carrier;
                        dom.style.cssText = 'position:absolute;top:0px;left:10px;';
                        break;
                    case 1:
                        img.width = 50;
                        img.height = 40;
                        img.src = start;
                        dom.style.cssText = 'position:absolute;top:-10px;left:0px;';
                        break;
                    case 2:
                        img.width = 50;
                        img.height = 40;
                        img.src = end;
                        dom.style.cssText = 'position:absolute;top:-10px;left:0px;';
                        break;
                    default:
                        break;
                }
                dom.appendChild(img);
                this.onClick = () => {
                    this.emit('click');
                };
                dom.addEventListener('click', this.onClick);
                return dom;
            };

            Production.prototype.updateDOM = function () {
                if (!this.map) {
                    return;
                }
                let pixel = this.map.projectToContainer(this.position);
                if (this.map.getZoom() < 7) {
                    this.dom.style.visibility = "hidden";
                } else {
                    this.dom.style.visibility = "visible";
                }
                let left = pixel.getX() - this.dom.clientWidth / 2 + 'px';
                let top = pixel.getY() - this.dom.clientHeight / 2 + 'px';
                this.dom.style.transform = `translate(${left}, ${top})`;
            };

            window.Production = Production;
        },
        initMap() {
            const center = new TMap.LatLng(39.984120, 116.307484);
            const map = new TMap.Map("map", {
                center: center,
                zoom: 9,
                pitch: 43.5,
                rotation: 45,
                mapStyleId: 'style 1 nevt'
            });

            map.on("tilesloaded", onloadMapCluster);

            const that = this;

            function onloadMapCluster() {
                if (that.$route.path === "/vehicle/first" || that.$route.path === "/index") {
                    if (that.onloadMap) {
                        setTimeout(() => {
                            that.mapCluster(map);
                            that.onloadMap = false;
                        }, 1000)
                    }
                } else {
                    if (that.onloadMap) {
                        setTimeout(() => {
                            that.mapCluster(map);
                            that.onloadMap = false;
                        }, 100)
                    }
                }
            }

            if (that.$route.path === "/transport/first") {
                const path = [
                    new TMap.LatLng(39.98481500648338, 116.30571126937866),
                    new TMap.LatLng(39.982266575222155, 116.30596876144409),
                    new TMap.LatLng(39.982348784165886, 116.3111400604248),
                    new TMap.LatLng(39.978813710266024, 116.3111400604248),
                    new TMap.LatLng(39.978813710266024, 116.31699800491333)
                ];
                this.pathReplay(map, path)
            }

        },
        mapCluster(map) {
            const markerCluster = new TMap.MarkerCluster({
                id: 'cluster',
                map: map,
                enableDefaultStyle: true,
                minimumClusterSize: 2,
                geometries: this.mapDataFormat,
                zoomOnClick: true,
                gridSize: 60,
                averageCenter: false,
                maxZoom: 16
            });

            for (let i = 0; i < markerCluster.geometries.length; i++) {
                let production = new Production({
                    map,
                    type: markerCluster.geometries[i].properties.type,
                    id: markerCluster.geometries[i].id,
                    name: markerCluster.geometries[i].properties.name,
                    position: markerCluster.geometries[i].position,
                })
                markerCluster.geometries[i] = production;
                production.on('click', () => {
                    let type = production.type
                    let id = production.id;
                    let name = production.name;
                    switch (type) {
                        case 200:
                        case 404:
                            this.$router.push({
                                name: "vehicle second",
                                params: {
                                    name: name,
                                    id: id
                                }
                            });
                            break;
                        case 10001:
                            if (id === 2000005) {
                                this.$router.push({
                                    name: "production second device",
                                    params: {
                                        name: name,
                                        id: id
                                    }
                                });
                                break;
                            } else {
                                this.$router.push({
                                    name: "production second",
                                    params: {
                                        name: name,
                                        id: id
                                    }
                                });
                                break;
                            }
                        case 10002:
                            this.$router.push({
                                name: "fill second",
                                params: {
                                    name: name,
                                    id: id
                                }
                            });
                            break;
                        case 10004:
                            this.$router.push({
                                name: "transport second",
                                params: {
                                    id: id,
                                    plate: name
                                }
                            });
                            break;
                        default:
                            break;
                    }
                })
            }

        },
        pathReplay(map, path) {
            const polylineLayer = new TMap.MultiPolyline({
                map,
                styles: {
                    'style_blue': new TMap.PolylineStyle({
                        'color': '#3777FF', //线填充色
                        'width': 4, //折线宽度
                        'borderWidth': 2, //边线宽度
                        'borderColor': '#FFF', //边线颜色
                        'lineCap': 'round' //线端头方式
                    })
                },
                geometries: [{
                    styleId: 'style_blue',
                    paths: path
                }],
            });

            const marker = new TMap.MultiMarker({
                map,
                styles: {
                    'car-down': new TMap.MarkerStyle({
                        'width': 40,
                        'height': 40,
                        'anchor': {
                            x: 20,
                            y: 20,
                        },
                        'faceTo': 'map',
                        'rotate': 180,
                        'src': 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
                    }),
                    "start": new TMap.MarkerStyle({
                        "width": 25,
                        "height": 35,
                        "anchor": {x: 16, y: 32},
                        "src": 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png'
                    }),
                    "end": new TMap.MarkerStyle({
                        "width": 25,
                        "height": 35,
                        "anchor": {x: 16, y: 32},
                        "src": 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png'
                    })
                },
                geometries: [{
                    id: 'car',
                    styleId: 'car-down',
                    position: new TMap.LatLng(39.98481500648338, 116.30571126937866),
                }, {
                    id: 'start',
                    styleId: 'start',
                    position: new TMap.LatLng(39.98481500648338, 116.30571126937866)
                }, {
                    id: 'end',
                    styleId: 'end',
                    position: new TMap.LatLng(39.978813710266024, 116.31699800491333)
                }]
            });
            let start = new Production({
                map,
                type: 1,
                id: "customStart",
                position: marker.geometries[1].position,
            });
            let end = new Production({
                map,
                type: 2,
                id: "customEnd",
                position: marker.geometries[2].position,
            });
            marker.geometries[1] = start;
            this.initInfoWindows(map, start);
            marker.moveAlong({
                'car': {
                    path,
                    speed: 60
                }
            }, {
                autoRotation: true
            })
        },
        initInfoWindows(map, customMarker) {
            const infoWindow = new TMap.InfoWindow({
                map: map,
                position: new TMap.LatLng(39.984104, 116.307503),
                offset: {x: 0, y: -32}
            });
            infoWindow.close();
            customMarker.on("click", () => {
                infoWindow.open();
                infoWindow.setPosition(customMarker.position);
                infoWindow.setContent(`<div><p style="color: black">经纬度信息</p><p style="color: black">${customMarker.position.toString()}</p></div>`);
            })
        },
    }
}
</script>
<style scoped>
.map-box {
    border-radius: 10px;
    overflow: hidden;
}
</style>

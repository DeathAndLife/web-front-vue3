import * as echarts from 'echarts'
import ecStat from 'echarts-stat'

export const bar = (el, x, data, color, title, unit) => {
    const option = {
        backgroundColor: '',
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: title,
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                fontFamily: 'Microsoft YaHei'
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "25",
            name: unit[0]
        },

        yAxis: {
            type: 'value',
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            nameGap: "10",
            name: unit[1],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
        },
        dataZoom: [
            {
                show: false,
                realtime: true,
                start: 0,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            },
            {
                type: 'inside',
                realtime: true,
                start: 50,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: title[0],
                type: 'bar',
                barWidth: '20%',
                itemStyle: {
                    borderRadius: 3,
                },
                data: data[0]
            },
        ]
    };
    el.setOption(option, true);
};

export const barAndLine = (el, x, data, color, title, unit) => {
    const option = {
        backgroundColor: '',
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '16%',
            top: '20%',
            containLabel: true
        },
        legend: {
            data: title,
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff",
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                fontFamily: 'Microsoft YaHei'
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unit[0]
        },

        yAxis: [{
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unit[1],
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }, {
            type: 'value',
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unit[2],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }],
        dataZoom: [
            {
                show: false,
                realtime: true,
                start: 0,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            },
            {
                type: 'inside',
                realtime: true,
                start: 50,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: title[0],
                type: 'line',
                symbolSize: 5,
                color: color[0],
                data: data[0],
                smooth: false,
                itemStyle: {
                    color: color[0],
                    borderColor: color[0],
                },
            },
            {
                name: title[1],
                type: 'bar',
                symbol: 'circle',
                symbolSize: 5,
                color: color[1],
                itemStyle: {
                    color: color[1],
                    borderColor: color[1],
                },
                yAxisIndex: 1,
                data: data[1]
            },
            {
                name: title[2],
                type: 'bar',
                symbol: 'circle',
                symbolSize: 5,
                color: color[2],
                itemStyle: {
                    color: color[2],
                    borderColor: color[2],
                },
                data: data[2]
            }

        ]
    };
    el.setOption(option, true);
};

export const pie = function (el, data, color, name, unit) {
    const option = {
        color: color,
        backgroundColor: '',
        title: {
            text: '',
            left: 'center',
            top: '50%',
            textStyle: {
                fontSize: 22,
                color: '#fff',
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                return params.value + unit
            }
        },
        legend: {
            right: 'auto',
            top: 10,
            textStyle: {
                fontSize: '14px',
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            roseType: 'radius',
            radius: ['30%', '60%'],
            data: [
                {
                    value: data[0],
                    name: name[0]
                }, {
                    value: data[1],
                    name: name[1]
                },
                {
                    value: data[2],
                    name: name[2]
                }
            ],
            label: {
                formatter: '{c}',
                color: '#fff'
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            }
        }]
    };
    el.setOption(option, true);
};

export const line = (el, x, data, color, title, unit) => {
    const option = {
        backgroundColor: '',
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: title,
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                fontFamily: 'Microsoft YaHei'
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unit[0]
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            name: unit[1],
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        dataZoom: [
            {
                show: false,
                realtime: true,
                start: 0,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            },
            {
                type: 'inside',
                realtime: true,
                start: 0,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: title[0],
                type: 'line',
                symbolSize: 5,
                color: color[0],
                data: data[0],
                smooth: false,
                itemStyle: {
                    color: color[0],
                    borderColor: color[0],
                },
            },
            {
                name: title[1],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[1],
                itemStyle: {
                    color: color[1],
                    borderColor: color[1],
                },
                data: data[1]
            },
            {
                name: title[2],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[2],
                itemStyle: {
                    color: color[2],
                    borderColor: color[2],
                },
                data: data[2]
            }
            ,
            {
                name: title[3],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[3],
                itemStyle: {
                    color: color[3],
                    borderColor: color[3],
                },
                data: data[3]
            }
        ]
    };
    el.setOption(option, true);
};

export const lineDoubleCoordinate = (el, x, data, color, title, unit) => {
    const option = {
        backgroundColor: '',
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: title,
            top: 2,
            textStyle: {
                color: "#fff",
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        xAxis: [
            {
                type: 'category',
                data: x[0],
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel: {
                    fontFamily: 'Microsoft YaHei'
                },
                nameLocation: "center",
                nameTextStyle: {
                    color: "white",
                    fontSize: "14",
                },
                nameGap: "30",
                name: unit[0]
            },
            {
                type: 'category',
                data: x[1],
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel: {
                    fontFamily: 'Microsoft YaHei'
                },
                nameLocation: "center",
                nameTextStyle: {
                    color: "white",
                    fontSize: "14",
                },
                nameGap: "30",
            }
        ],

        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    }
                },
                nameLocation: "end",
                nameTextStyle: {
                    color: "white",
                    fontSize: "12",
                    padding: [0, 0, 20, 0]
                },
                nameGap: 10,
                name: unit[1],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.3)'
                    }
                },
                axisLabel: {}
            },
            {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.3)'
                    }
                },
                axisLabel: {}
            }
        ],
        dataZoom: [
            {
                show: false,
                realtime: true,
                start: 0,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            },
            {
                type: 'inside',
                realtime: true,
                start: 50,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: title[0],
                type: 'line',
                symbolSize: 5,
                color: color[0],
                data: data[0],
                smooth: false,
                itemStyle: {
                    color: color[0],
                    borderColor: color[0],
                },
            },
            {
                name: title[1],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[1],
                itemStyle: {
                    color: color[1],
                    borderColor: color[1],
                },
                yAxisIndex: 1,
                data: data[1]
            },
            {
                name: title[2],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[2],
                itemStyle: {
                    color: color[2],
                    borderColor: color[2],
                },
                data: data[2]
            }

        ]
    };
    el.setOption(option, true);
};
export const rank = (el, data, color, unit) => {
    function compare(property) {
        return function (a, b) {
            const c = a[property];
            const d = b[property];
            return d - c;
        }
    }

    data.sort(compare("value"));

    let lineY = []
    for (let i = 0; i < data.length; i++) {
        let x = i;
        if (x > color.length - 1) {
            x = color.length - 1
        }
        const y = {
            name: data[i].name,
            color: color[x] + ')',
            value: data[i].value,
            itemStyle: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[x] + ', 0.5)'
                }, {
                    offset: 1,
                    color: color[x] + ', 1)'
                }], false),
                borderRadius: 10,
            },
        };
        lineY.push(y)
    }

    const option = {
        backgroundColor: '',
        title: {
            show: false
        },
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                return params.value + unit
            }
        },
        grid: {
            borderWidth: 0,
            top: '10%',
            left: '5%',
            right: '15%',
            bottom: '3%'
        },
        color: color,
        yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false
            },
            animationDuration: 300,
            animationDurationUpdate: 300,
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false,
                color: '#b3ccf8',
                fontSize: '14',
                formatter: function (val) {
                    return `${val}`
                }
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
        }],
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        series: [{
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: lineY,
            animationDuration: 1500,
            label: {
                color: 'white',
                show: true,
                position: [0, '-24px'],
                fontSize: 16,
                formatter: function (a) {
                    return a.name
                },
            }
        }],
        animationEasing: 'cubicOut'
    };
    el.setOption(option, true);
};

export const carDistribution = (el, data, color, name, unit) => {
    const option = {
        color: color,
        backgroundColor: '',
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                return params.value + unit
            }
        },
        legend: {
            right: 'auto',
            top: 0,
            textStyle: {
                fontSize: '14px',
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            roseType: 'radius',
            radius: ['30%', '60%'],
            data: [
                {
                    value: data[0],
                    name: name[0]
                }, {
                    value: data[1],
                    name: name[1]
                },
                {
                    value: data[2],
                    name: name[2]
                }
            ],
            label: {
                formatter: '{c}',
                color: '#fff',
                fontSize: '14px'
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            },
            labelLine: {
                length: 10,
                length2: 2
            },
        }]
    };
    el.setOption(option, true);
};
export const lineDouble = (el, x, data, title, color, unit) => {
    const option = {
        backgroundColor: '',
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: title,
            top: 2,
            textStyle: {
                color: "#fff",
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                fontFamily: 'Microsoft YaHei'
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unit[0]
        },

        yAxis: [{
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unit[1],
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }, {
            type: 'value',
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "12",
            },
            ameGap: "10",
            name: unit[2],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        }],
        dataZoom: [{
            show: false,
            realtime: true,
            start: 0,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        },
            {
                type: 'inside',
                realtime: true,
                start: 50,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: title[0],
                type: 'line',
                symbolSize: 5,
                color: color[0],
                data: data[0],
                smooth: false,
                itemStyle: {
                    color: color[0],
                    borderColor: color[0],
                },
            },
            {
                name: title[1],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[1],
                itemStyle: {
                    color: color[1],
                    borderColor: color[1],
                },
                yAxisIndex: 1,
                data: data[1]
            },
            {
                name: title[2],
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                color: color[2],
                itemStyle: {
                    color: color[2],
                    borderColor: color[2],
                },
                data: data[2]
            }

        ]
    };
    el.setOption(option, true);
};

export const lifePredict = (el, data) => {

    const myRegression = ecStat.regression('linear', data['data']);

    myRegression.points.sort((a, b) => {
        return a[0] - b[0];
    });

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#000'
                }
            },
            textStyle: {
                color: '#000'
            }
        },
        xAxis: {
            type: 'value',
            splitLine: {show: false},
            min: data['x_min'],
            max: data['x_max'],
            name: 'Battery running time',
            nameTextStyle: {
                color: 'white'
            },
            nameGap: 30,
            nameLocation: 'center',
            axisLabel: {
                color: '#fff',
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width: '2'
                }
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {show: false},
            min: data['y_min'],
            max: data['y_max'],
            name: 'Voltage (v)',
            nameTextStyle: {
                color: 'white',
            },
            nameGap: 20,
            nameLocation: 'end',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width: '2'
                }
            },
            axisLabel: {
                color: '#fff'
            }
        },
        legend: {
            itemWidth: 40,
            itemHeight: 20,
            textStyle: {
                fontSize: 15,
                color: '#fff'
            }
        },
        series: [{
            name: 'scatter',
            type: 'scatter',
            symbolSize: 5,
            color: 'yellow',
            emphasis: {
                label: {
                    show: true,
                    position: 'left',
                    color: 'red',
                    fontSize: 16
                }
            },
            data: data['data']
        }, {
            name: 'line',
            type: 'line',
            color: 'red',
            showSymbol: false,
            data: myRegression.points,
            itemStyle: {
                color: 'red',
            },
            markPoint: {
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: myRegression.expression,
                    color: 'white',
                    fontSize: 14
                },
                data: [{
                    coord: myRegression.points[myRegression.points.length - 1]
                }]
            }
        }]
    };

    el.setOption(option, true);
}

export const byType = (el, x, data, color, title, type, unit) => {
    const option = {
        backgroundColor: '',
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: title,
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
        },
        dataZoom: [{
            show: false,
            realtime: true,
            start: 0,
            end: 100,
            textStyle: {
                color: '#fff'
            }
        },
            {
                type: 'inside',
                realtime: true,
                start: 50,
                end: 100,
                textStyle: {
                    color: '#fff'
                }
            }
        ],
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                color: 'white'
            },
            axisLabel: {
                fontFamily: 'Microsoft YaHei',
                color: "white"
            },
            nameLocation: "center",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            nameGap: "30",
            name: unit[0]
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
                color: 'white'
            },
            splitLine: {
                show: true,
                color: 'rgba(255,255,255,0.3)'
            },
            nameLocation: "end",
            nameTextStyle: {
                color: "white",
                fontSize: "14",
            },
            name: unit[1],
            axisLabel: {}
        },
        series: [
            {
                name: title[0],
                type: type[0],
                barWidth: '20%',
                itemStyle: {
                    borderRadius: 3,
                },
                data: data[0]
            },
            {
                name: title[1],
                type: type[1],
                barWidth: '20%',
                itemStyle: {
                    borderRadius: 10,
                },
                data: data[1]
            }
        ]
    };
    el.setOption(option, true);
};

export const tankSpeed = (el, value) => {
    const option = {
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: value.toFixed(0) * 2,
                splitNumber: 4,
                itemStyle: {
                    color: 'aqua',
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                },
                progress: {
                    show: true,
                    roundCap: true,
                    width: 10
                },
                pointer: {
                    icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                    length: '75%',
                    width: 16,
                    offsetCenter: [0, '5%']
                },
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        width: 10
                    }
                },
                axisTick: {
                    splitNumber: 2,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                splitLine: {
                    length: 12,
                    lineStyle: {
                        width: 3,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 30,
                    color: '#999',
                    fontSize: 10
                },
                title: {
                    show: false
                },
                detail: {
                    width: '60%',
                    height: 18,
                    offsetCenter: [0, '35%'],
                    valueAnimation: true,
                    formatter: (value) => {
                        return '{value|' + '实时转速：' + value.toFixed(0) + '}{unit|RPM}';
                    },
                    rich: {
                        value: {
                            fontSize: 18,
                            fontWeight: 'bolder',
                            color: 'white'
                        },
                        unit: {
                            fontSize: 18,
                            color: 'aqua',
                            padding: [-20, 0, -20, 0]
                        }
                    }
                },
                data: [
                    {
                        value: value
                    }
                ]
            }
        ]
    };
    el.setOption(option, true);
}
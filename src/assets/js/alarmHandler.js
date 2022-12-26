import {ElMessageBox, ElMessage} from 'element-plus';
import {getPasswordForStorage} from "@/api/token";
import {deleteAlarmById} from "@/api/alarm-http";

export const alarmHandler = (alarmId) => {
    ElMessageBox.prompt(`<p style="color: black">此操作将删除该报警信息,请确认该报警已处理！输入管理员密码确认</p>`, {
        dangerouslyUseHTMLString: true,
        type: 'warning',
        inputType: 'password',
        cancelButtonClass: 'customClass',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(async ({value}) => {
        let password = getPasswordForStorage();
        if (value === password) {
            let result = await deleteAlarmById({
                alarmId: alarmId
            })
            if (result.code === 200 || result.code === "200") {
                ElMessage.success({
                    type: 'success',
                    message: '处理完成'
                });
            } else {
                ElMessage.error({
                    type: 'error',
                    message: '处理失败请重试!'
                });
            }
        } else {
            ElMessage.error({
                type: 'error',
                message: '密码错误，请重试!'
            });
        }

    }).catch(() => {
        ElMessage({
            message: '已取消操作'
        });
    });
}

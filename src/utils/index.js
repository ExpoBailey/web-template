import {Notice, Loading} from 'iview';
import 'iview/dist/styles/iview.css';

const Utils = {
  /** 添加 promise 返回
   *
   * 公司标准格式的处理响应数据的方法【新增、修改、删除，查询】
   * @param requestDesc 请求描述（ES6 后调用方法参数为动态，可以传或不传)
   * @param res 响应数据
   * @param requestDesc 请求描述（ES6 后调用方法参数为动态，可以传或不传，不传的话不会有提示）
   * @param needAlert 是否需要弹窗；默认弹窗；true/false
   */
  promiseResponse: (res, requestDesc, needAlert = true) => {
    return new Promise((resolve, reject) => {
      let messageType = "error";
      let title = requestDesc;
      let desc = "";
      Loading.start();
      if (res.status === 200) {
        Loading.finish();
        if ( res.data.status === 200) {
          messageType = "success";
          desc = title + "成功！";
          resolve(res.data);
        } else {
          Loading.error();

          title += "失败";

          // 接口处理数据失败，弹出接口返回的提示信息
          desc = res.data.desc;

          reject(new Error(desc));
        }
      } else {
        Loading.error();
        title += "异常";
        desc = requestDesc + "接口调用异常";
        reject(new Error(desc));
      }
      if (requestDesc !== undefined && needAlert) {
        Utils.alertNotice(messageType, title, desc);
      }
    })
  },
  /**
   * 封装的弹窗提示
   * @param type 提示的类型（info、success、warning、error）
   * @param title 提示主题
   * @param desc 提示内容
   * @param second 存在时间（秒）
   */
  alertNotice: (type, title, desc, second = 2) => {
    // console.log(type + "--" + title + "--" + desc + "--" + second);
    switch (type) {
      case 'info':
        Notice.info(
          {
            title: title,
            desc: (desc === null || desc === '') ? '' : desc,
            duration: second
          }
        );
        break;
      case 'success':
        Notice.success(
          {
            title: title,
            desc: (desc === null || desc === '') ? '' : desc,
            duration: second
          }
        );
        break;
      case 'warning':
        Notice.warning(
          {
            title: title,
            desc: (desc === null || desc === '') ? '' : desc,
            duration: second
          }
        );
        break;
      case 'error':
        Notice.error(
          {
            title: title,
            desc: (desc === null || desc === '') ? '' : desc,
            duration: second
          }
        );
        break;
      default:
        break;
    }
  },
};
export default Utils;

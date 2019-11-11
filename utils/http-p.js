import {config} from 'config.js'
import { Base64 } from '../miniprogram_npm/js-base64/index.js'
var tips ={
  1:"抱歉，发生了一个错误",
  10005:"json格式错误",
  10006:"token不合法"
}

class HTTP{
	//对象的解构
  request({url,method="GET",data={}}){
    return new Promise((resolve,reject)=>{
      this._request(url,resolve,reject,method,data)
    })
  }
  // pending fulfilled rejected
  //params是一个对象,有url属性，method属性,data属性,回调函数
	_request(url, resolve, reject, method, data){
    var url = config.api_base_url + url;
    //兼容处理，如果用户不传method值，默认为GET
    // if(!params.method){
    //   params.method = 'GET'
    // }
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type':'application/json',
        //Authorization : "Basic token:"
        Authorization : this._encode()
      },
      //回调函数剥夺了函数return能力，
      //处理方法使用promise,
      //最终方案是 async await
      
      //使用回调函数传值
      success: (res) => {
        // console.log(res);
        var statuscode = res.statusCode.toString();
        if(statuscode.startsWith("2")){
          //目前比较流行的写法，相当于if语句
          resolve(res)
        }
        else{
          reject()
          var errcode = res.data.error_code.toString();
          this._errorMsg(errcode);
        }
        
      },
      fail: (err) => {
        reject()
        this._errorMsg("1");
      }
    })
  }


  _errorMsg(errorcode) {
    if (!tips[errorcode])
      errorcode = '1';
    wx.showToast({
      title: tips[errorcode],
      icon: 'none',
      duration: 2000
    })
  }
  _encode() {
    const token = wx.getStorageSync("token");
    //将username:password格式的编码转换为base64编码
    const base64 = Base64.encode(token + ":")
    return 'Basic ' + base64;
  }
}
export {HTTP}
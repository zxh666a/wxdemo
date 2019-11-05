 import { config } from 'config.js'
import { Base64 } from '../miniprogram_npm/js-base64/index.js'
var tips = {
  1:'发生了一个未知的错误',
  10006:'token不合法'
}
class HTTP {
  _errorMsg(errorcode){
    if (!tips[errorcode]){
      tips[errorcode] = "1"
    }
    wx.showToast({
      title: tips[errorcode],
    })
  }
  _encode() {
    const token = wx.getStorageSync("token")
    const base64 = Base64.encode(token + ':')
    return 'Basic ' + base64
  }
  //params是一个对象
  request(params) {
    var url = config.api_base_url + params.url
    // 兼容处理method
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'application/json',
        // Authorization:"Basic token:password"
        Authorization: this._encode()
      },
      //使用回调函数传值
      success: (res) => {
        var statuscode = res.statusCode.toString()
        if (statuscode.startsWith('2')){
          params.success && params.success(res)
        }else{
          var errcode = res.data.error_code.toString()
          this._errorMsg(errcode) 
        }
      },
      fail: (err) => {
				this._errorMsg("1")
			 }
    })
  }
}

export { HTTP }
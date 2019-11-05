//app.js
import {config} from './utils/config.js'
import {base64} from './miniprogram_npm/js-base64/index.js'
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        wx.request({
          url: config.api_base_url + 'token',
          data: {
            account: res.code,
            appid: config.appid,
            appsecret: config.appsecret,
            type: 100
          },
          method: 'POST',
          success: (res) => {
            // console.log(res.data.token)
            //存到本地缓存
            wx.setStorageSync('token', res.data.token)
            // wx.getStorage('token')
          },
          fail: (err) => { }
        })
      }
    })
	}
})
import { HTTP } from '../utils/http.js'
// var http = new HTTP
class ClassicModel extends HTTP {
  getLastest(sCallback) {
    this.request({
      url: 'classic/latest',
      method: 'GET',
      data: {},
      success: (res)=> {
				//保存最新期刊号
				wx.setStorageSync(this._getClassicKey(res.data.index), res)
				this._setLastestIndex(res.data.index)
				sCallback(res)
      }
    })
  }

	
	getClassic(currentindex,nextorprevious,sCallback){
		let key = nextorprevious == '/next'?
			this._getClassicKey(currentindex + 1):
			this._getClassicKey(currentindex - 1)
		let classicdata = wx.getStorageSync(key)
		if(classicdata){
			sCallback(classicdata)
		}
		else{
			this.request({
				url: "classic/" + currentindex + nextorprevious,
				method:"GET",
				data:{},
				success:(res)=>{
					sCallback(res)
					wx.setStorageSync(key,res)
				}
			})
		}
	}

	isfirst(index){
		return index == 1?true:false
	}
	islatest(index){
		let latestindex = this._getLastestIndex()
		return index == latestindex ? true : false
	}
	_getClassicKey(index){
		return `classic-${index}`
	}
	_setLastestIndex(index){
		wx.setStorageSync("latest", index)
	}
	_getLastestIndex(){
		return wx.getStorageSync("latest")
	}
}
export { ClassicModel }
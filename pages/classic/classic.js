//Page Object
import { ClassicModel } from '../../model/classic.js'
import { LikeModel } from '../../model/like.js'
var classicmodel = new ClassicModel()
var likemodel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
	data: {
		classicData: null,
		first: false,
		latest: true,
		like_status: 0,
		like_nums: 0
	},

  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		classicmodel.getLastest((res) => {
			this._getlikestatus(res.data.id,res.data.type)
			this.setData({
				classicData:res.data
			})

		})
	},
	
	onlike(event) {
		var behavior = event.detail.behavior;
		likemodel.getlikeInfo(behavior, this.data.classicData.id, this.data.classicData.type)
	},

	//期刊切换
	onleft(event) {
		this._updata("/next")
	},
	onright(event) {
		this._updata("/previous")
	},

	_updata(nextorprevious){
		let currentindex = this.data.classicData.index;
		classicmodel.getClassic(currentindex,nextorprevious,(res)=>{
			this._getlikestatus(res.data.id,res.data.type)
			this.setData({
				classicData:res.data,
				first:classicmodel.isfirst(res.data.index),
				latest:classicmodel.islatest(res.data.index)
			})
		})
	},
	_getlikestatus(artID,category){
		likemodel.getlike(artID,category,(res)=>{
			this.setData({
				like_status:res.data.like_status,
				like_nums:res.data.fav_nums
			})
		})
	}
})
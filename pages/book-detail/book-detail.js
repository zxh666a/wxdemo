// pages/book-detail.js
import { BookModel } from "../../model/book.js"
const bookModel = new BookModel()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		bookdetails:{},
		comments:[],
		fav:[]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// console.log(options.bid)
		var bid = options.bid
		const bookdetail = bookModel.getBookdetail(bid)
		const bookshort = bookModel.getBookshotcomment(bid)
		const bookfav = bookModel.getBookfav(bid)
		bookdetail.then(res=>{
			// console.log(res)
			this.setData({
				bookdetails :res.data
			})
		})

		bookshort.then(res => {
			// console.log(res)
			this.setData({
				comments: res.data.comments
			})
			console.log(this.data.comments)
		})

		bookfav.then(res => {
			// console.log(res)
			this.setData({
				fav: res.data
			})
			console.log(this.data.fav)
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})
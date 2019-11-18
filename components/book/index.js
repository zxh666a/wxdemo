// components/book/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		book: Object,
		bid: Number
	},

	/**
	 * 组件的初始数据
	 */
	data: {
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		ontap(e) {
			var bid = e.currentTarget.dataset.id
			console.log(bid)
			wx.navigateTo({
				url: '../../pages/book-detail/book-detail?bid=' + bid,
			})
		}
	}
})

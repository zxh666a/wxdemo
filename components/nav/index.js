// components/nav/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		title: {
			type: String,
			// value: "李安《饮食男女》"
		},
		first: {
			type: Boolean,
			value: false
		},
		latest: {
			type: Boolean,
			value: false
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		disleft: "./img/shang副本.png",
		left: "./img/shang.png",
		disright: "./img/next副本.png",
		right: "./img/next.png",
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onleft(){
			if(!this.properties.latest)
			this.triggerEvent('left', {
			})
		},
		onright(){
			if (!this.properties.first)
			this.triggerEvent('right', {
			})
		}
	}
})

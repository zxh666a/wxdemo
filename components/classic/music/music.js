// components/classic/music/music.js

const mgr = wx.getBackgroundAudioManager()
Component({

	properties: {
		content: String,
		imgurl: String,
		src: String,
		title: String
	},

	data: {
		playsrc: "./img/music-play.png",
		stopsrc: "./img/music-stop.png",
		playing: false
	},

	attached() {
		// console.log("组件被创建")
		this._recoverstatus()
		this._monitorswitch()
	},
	// detached(){
	// 	console.log("组件被销毁")
	// },
	methods: {
		onplay() {
			if (!this.data.playing) {
				this.setData({
					playing: true
				})
				mgr.src = this.properties.src
				mgr.title = this.properties.title
			} else {
				this.setData({
					playing: false
				})
				mgr.pause()
			}
		},
		//监控播放器的状态
		_monitorswitch() {
			//播放
			mgr.onPlay(() => {
				console.log("play")
				this._recoverstatus()
			})

			mgr.onStop(() => {
				console.log("stop")
				this._recoverstatus()
			})
			//暂停
			mgr.onPause(() => {
				console.log("pause")
				this._recoverstatus()
			})
			mgr.onEnded(() => {
				console.log("ended")
				this._recoverstatus()
			})
		},
		_recoverstatus() {
			//paused为true的时候是暂停状态
			if (mgr.paused) {
				// console.log("暂停了")
				this.setData({
					playing: false
				})
				return
			}
			//判断当前正在播放的背景音乐是否是当前组件的背景音乐
			if (mgr.src == this.properties.src) {
				if (!mgr.paused) {
					this.setData({
						playing: true
					})
				}
			}
		}
	}
})

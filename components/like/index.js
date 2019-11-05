// pages/components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 对于组件需要对外开放的功能放在属性中
    blike: {
      type: Boolean,
      // value: false,
      // observer: function () {

      // }
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: '../image/like.png',
    unlike: '../image/dislike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike() {
      var like = this.properties.blike;
      var count = this.properties.count;
      this.setData({
        // 取反但是不改变blike的值
        blike: !like,
        count:like?count-1:count+1
      })
      let behavior = this.data.blike?"like":"cancel";
      this.triggerEvent('like',{
        behavior:behavior
      })
    }
  }
})

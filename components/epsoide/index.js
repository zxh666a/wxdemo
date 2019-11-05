// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      //无限递归循环
      //不能在observe中修改属性值，不然会陷入死循环
      observer: function (oldValue, newValue) {
        let num = oldValue < 10 ? "0" + oldValue : oldValue
        // console.log(num)
        // console.log(index)
        this.setData({
          _index: num
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: "",
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    _index:""
  },
  //生命周期函数
  attached() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      year: year,
      month: this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

const app = getApp()
let localData = require('../../data/post.js')

Page({
  data: {
    swiper: {
      imgUrls: [
        '/images/wx.png',
        '/images/vr.png',
        '/images/iqiyi.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500
    },
    postList: localData.postList
    // 小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A,而这个动作A的执行，是在onLoad函数执行之后发生的
  },
  onLoad: function () {
    // this.setData({
    //   postList: localData.postList
    // })
  },
  onPostTap (id) {
    console.log('aaaa', id)
  }
})
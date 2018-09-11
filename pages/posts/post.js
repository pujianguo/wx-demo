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
    newList: localData.postList
  },
  onLoad: function () {
    this.setData({
      postList: localData.postList
    })
    console.log(this.postList)
  }
})
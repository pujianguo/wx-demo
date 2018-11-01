// pages/movies/more-movie/more-movie.js
var util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {},
    category: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let category = options.category
    this.data.category = category
    let url = ''
    switch (category) {
      case '正在热映':
        url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0'
        break;
      case '即将上映':
        url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=20'
        break;
      case 'Top50':
        url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=40'
        break;
    }
    this.getApiData(url)
  },
  getApiData (url) {
    let that = this
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'Content-Type': 'json'
      },
      success: function(res){
        let data = res.data.subjects.map(x => {
          return {
            id: x.id,
            cover: x.cover,
            rate: x.rate,
            stars: util.converToStarsArray(x.rate),
            title: x.title,
            url: x.url
          }
        })
        that.setData({
          movies: data
        })
      },
      fail: function(err) {
        console.log('request fail: ', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 在页面渲染完毕之后设置标题才会起作用
    wx.setNavigationBarTitle({
      title: this.data.category
    })
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

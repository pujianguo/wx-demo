// pages/movies/more-movie/more-movie.js
var util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: {},
    category: '',
    requestUrl: '',
    totalCount: 0,
    isEmpty: true
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
        url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend'
        break;
      case '即将上映':
        url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&sort=recommend'
        break;
      case 'Top50':
        url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%BB%8F%E5%85%B8&sort=rank'
        break;
    }
    this.data.requestUrl = url;
    url += '&page_start=' + this.data.totalCount + '&page_limit=20';
    this.getApiData(url);
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
        let movies = res.data.subjects.map(x => {
          return {
            id: x.id,
            cover: x.cover,
            rate: x.rate,
            stars: util.converToStarsArray(x.rate),
            title: x.title.length >= 6 ? x.title.substring(0, 6) + '...' : x.title,
            url: x.url
          }
        })

        // 新数据和旧数据相加
        let totalMovies = {}
        if (!that.data.isEmpty) {
          totalMovies = that.data.movies.concat(movies);
        } else {
          totalMovies = movies;
          that.data.isEmpty = false;
        }
        that.setData({
          totalCount: that.data.totalCount + 20,
          movies: totalMovies
        })
      },
      fail: function(err) {
        console.log('request fail: ', err)
      },
      complete: function() {
        wx.hideNavigationBarLoading()
      }
    })
  },
  onScrollLower (event) {
    console.log('more', event)
    let nextUrl = this.data.requestUrl +
      '&page_start=' + this.data.totalCount + '&page_limit=20';
    this.getApiData(nextUrl);
    wx.showNavigationBarLoading()
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
  onPullDownRefresh: function (event) {
    console.log('refresh')
    let refreshUrl = this.data.requestUrl +
      '&page_start=0&page_limit=20';
      // '&page_start=' + this.data.totalCount + '&page_limit=20';
    this.data.movies = {}
    this.data.isEmpty = true
    this.getApiData(refreshUrl);
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

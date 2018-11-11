var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: {},
    b: {},
    c: {},
    searchResult: {},
    containerShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let aUrl = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=3&page_start=0';
    let bUrl = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&sort=recommend&page_limit=3&page_start=0';
    let cUrl = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%BB%8F%E5%85%B8&sort=rank&page_limit=3&page_start=0';
    this.getApiData(aUrl, 'a', '正在热映')
    this.getApiData(bUrl, 'b', '即将上映')
    this.getApiData(cUrl, 'c', 'Top50')
  },

  getApiData (url, type, categoryTitle) {
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
            title: x.title.length >= 6 ? x.title.substring(0, 6) + '...' : x.title,
            url: x.url
          }
        })
        let readyData = {}
        readyData[type] = {
          categoryTitle: categoryTitle,
          movies: data
        }
        that.setData(readyData)
      },
      fail: function(err) {
        console.log('request fail: ', err)
      }
    })
  },

  onMoreTap (event) {
    let category = event.currentTarget.dataset.category
    wx.navigateTo({
      url: 'more-movie/more-movie?category=' + category
    })
  },
  onMovieTap (event) {
    let movieId = event.currentTarget.dataset.movieid
    wx.navigateTo({
      url: 'movie-detail/movie-detail?id=' + movieId
    })
  },

  onBindChange (event) {
    let text = event.detail.value
    console.log('change', text)
    let url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=3&page_start=0';
    this.getApiData(url, 'searchResult', '')
  },
  onBindFocous (event) {
    console.log('bindfocus')
    this.setData({
      containerShow: false
    })
  },
  onCancelImgTap (event) {
    this.setData({
      containerShow: true
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

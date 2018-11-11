// pages/movies/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {
      title: '西虹市首富',
      image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529206747.webp',
      country: '中国',
      year: '2018'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let movieId = options.id
    let url = ''
    console.log(movieId)
  },

  viewMoviePostImg (e) {
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [src]
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

let util = require('../../../utils/util.js')

// pages/movies/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {
      title: '西虹市首富',
      image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529206747.webp',
      country: '中国大陆',
      year: '2018',
      wishCount: '17.8k',
      commentCount: '9k',
      originalTitle: '西虹市首富',
      rate: '6.6',
      stars: util.converToStarsArray(6.6),
      directorName: '闫非',
      casts: '沈腾/宋芸桦/张一鸣/张一鸣',
      generes: '喜剧',
      summary: '西虹市丙级球队大翔队的守门员王多鱼（沈腾 饰）因比赛失利被教练开除，一筹莫展之际王多鱼突然收到神秘人士金老板（张晨光 饰）的邀请，被告知自己竟然是保险大亨王老太爷（李立群 饰）的唯一继承人，遗产高达百亿！但是王老太爷给出了一个非常奇葩的条件，那就是要求王多鱼在一个月内花光十亿，还不能告诉身边人，否则失去继承权。王多鱼毫不犹豫签下了“军令状”，与好友庄强（张一鸣 饰）以及财务夏竹（宋芸桦 饰）一起开启了“挥金之旅”，即将成为西虹市首富的王多鱼，第一次感受到了做富人的快乐，同时也发现想要挥金如土实在没有那么简单！',
      castsInfo: [
        {name: '闫非', img: 'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437030925.47.webp'},
        {name: '沈腾', img: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533527370.41.webp'},
        {name: '宋芸桦', img: 'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1446281965.79.webp'},
        {name: '张一鸣', img: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1413261818.41.webp'},
        {name: '张晨光', img: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11764.webp'}
      ]

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

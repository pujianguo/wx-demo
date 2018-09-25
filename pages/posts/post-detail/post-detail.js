let localData = require('../../../data/post.js')
Page({
  data: {
    postData: null
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    let postId = options.id
    let postData = localData.postList.find(x => x.postId == postId)
    this.setData({
      postData: postData
    })
  },
  onReady: function() {
    //Do some when page ready.

  },
  onShow: function() {
    //Do some when page show.

  },
  onHide: function() {
    //Do some when page hide.

  },
  onUnload: function() {
    //Do some when page unload.

  },
  onPullDownRefresh: function() {
    //Do some when page pull down.

  }
})

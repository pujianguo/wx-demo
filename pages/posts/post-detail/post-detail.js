let localData = require('../../../data/post.js')
let app = getApp()

Page({
  data: {
    postData: null,
    isPlayingMusic: false
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    let postId = options.id
    let postData = localData.postList.find(x => x.postId == postId)
    this.setData({
      postData: postData,
      postId: postId
    })

    // 获取storage中存放的收藏数据
    let postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      let postCollected = postsCollected[postId]
      if (postCollected) {
        this.setData({
          collected: postCollected
        })
      }
    } else {
      postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync('posts_collected', postsCollected)
    }

    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === postId) {
      this.setData({
        isPlayingMusic: true
      })
    }
    // 监听音乐停止、播放
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.onPlay(() => {
      this.setData({
        isPlayingMusic: true
      })
      app.globalData.g_isPlayingMusic = true
      app.globalData.g_currentMusicPostId = postId
    })
    backgroundAudioManager.onPause(() => {
      this.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayingMusic = false
      app.globalData.g_currentMusicPostId = null
    })
    backgroundAudioManager.onStop(() => {
      this.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayingMusic = false
      app.globalData.g_currentMusicPostId = null
    })
  },
  onCollectionTap: function(event) {
    let postsCollected = wx.getStorageSync('posts_collected')
    let postCollected = postsCollected[this.data.postId]
    postCollected = !postCollected
    postsCollected[this.data.postId] = postCollected
    wx.setStorageSync('posts_collected', postsCollected)
    this.setData({
      collected: postCollected
    })

    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      duration: 1000
    })
  },
  onShareTap: function(event) {
    //  目前小程序不支持分享接口，这里只是用来练习showActionSheet方法
    let itemList = [
      '分享给微信好友',
      '分享到朋友圈',
      '分享到QQ',
      '分享到微博'
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#405f80',
      success: function(res) {
        // res.tapIndex 数组元素的序号，从0开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户是否取消？现在无法实现分享功能',
        })
      }
    })
  },

  onMusicTap: function(event) {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    let isPlayingMusic = this.data.isPlayingMusic
    if (isPlayingMusic) {
      backgroundAudioManager.pause()
      this.setData({
        isPlayingMusic: false
      })

    } else {
      let music = this.data.postData.music
      let [title, singer] = music.title.split('-')
      backgroundAudioManager.title = title
      // backgroundAudioManager.epname = music.title
      backgroundAudioManager.singer = singer
      backgroundAudioManager.coverImgUrl = music.coverImgUrl
      // 设置了 src 之后会自动播放
      // backgroundAudioManager.coverImgUrl = music.url // 资源无效
      backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
      // backgroundAudioManager.play()

      this.setData({
        isPlayingMusic: true
      })
    }
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

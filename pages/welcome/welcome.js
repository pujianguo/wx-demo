Page({
    onTap: function () {
        console.log('aaaa')
        wx.redirectTo({
            url: '../posts/post'
        })
        // wx.navigateTo({
        //     url: '../posts/post'
        // })
    }
})

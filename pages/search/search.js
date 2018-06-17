var API_URL = 'https://douban.uieee.com/v2/movie/search';

Page({
  data: {
    movie: []
  },
  search: function (e) {
    if (!e.detail.value) {
      return ;
    }

    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });
    var that = this;

    wx.request({
      url: API_URL + "?q=" + e.detail.value,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        wx.hideToast();
        that.setData({
          movies: res.data.subjects
        });
      }
    });
  }

})

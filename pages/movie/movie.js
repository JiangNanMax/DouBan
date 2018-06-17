var API_URL = 'https://douban.uieee.com/v2/movie/subject/';

Page({
  data: {
    movie:{}
  },
  onLoad: function (param){
    //console.log(param.id);
    var that=this;
    wx.request({
      url: API_URL + param.id,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        //console.log(res.data);
        that.setData({
          movie:res.data
        });
      }
    })
  }

})

var API_URL = 'https://douban.uieee.com/v2/movie/top250';

Page({
  data: {
    title:"加载中...",
    movies:[]
  },
  onLoad:function(){
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon:"loading",
      duration:10000
    });

    wx.request({
      url: API_URL,
      data:{},
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        wx.hideToast();
        var data = res.data;
        that.setData({
          title:data.title,
          movies:data.subjects
        });
        console.log(res.data);
      }
    })
  }
})

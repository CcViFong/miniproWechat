const app = getApp(); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgsrc: '', //背景图片及海报
    title: '',  //标题
    rank: '',   //评分
    director: '',  //导演
    role: '',   //演员
    summary: '',  //概要
    videourl: '',  //腾讯视频的视频id
    starflag:''  //评分的标志  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.getALLData(options.name, options.num);
  },

  // 获取页面上的数据
  getALLData(name, num) {
    app.getCloudData().then(res => {
      let list = res.data[0][name][parseInt(num)];
      list.summary = list.summary.split("\n");
      this.setData({
        imgsrc: list.src,
        title: list.title,
        rank: list.rank,
        director: list.director,
        role: list.role,
        summary: list.summary,
        videourl:list.videourl,
        starflag:list.star
      })
    })    
  },

  // 检测视频插件中广告播放结束后立即播放视频内容
  playAdEnd(e){
    const TxvContext = requirePlugin("tencentvideo");
    const txvContext = TxvContext.getTxvContext('txvideo');
    if(e.detail.isAd){ //e.detail.isAd: true为广告类型  false为非广告类型
      txvContext.play();  //视频播放
    }
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
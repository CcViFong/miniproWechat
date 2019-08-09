// pages/listall/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc: '',
    title: '',
    rank: '',
    director: '',
    role: '',
    summary: '',
    videourl: ''
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
    const db = wx.cloud.database({ env: 'v001-57ea91' })
    db.collection('filmData').get().then(res => {
      let list = res.data[0][name][parseInt(num)];
      this.setData({
        imgsrc: list.src,
        title: list.title,
        rank: list.rank,
        director: list.director,
        role: list.role,
        summary: list.summary
      })
      this.getVideoInfo(list.videourl);
    })    
  },

  // 动态获取腾讯视频上的播放地址
  getVideoInfo(vid) {
    let that = this;
    wx.request({
      url: `https://vv.video.qq.com/getinfo?vid=${vid}&platform=101001&charge=0&otype=json`,
      method: 'get',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        let dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        let dataJson1 = dataJson.replace(/;qwe/, '');
        let data = JSON.parse(dataJson1);
        let url = data.vl.vi[0].ul.ui[0].url
        let url2 = url.replace(/http/, "https"); //把'http'替换为https
        let fu = data.vl.vi[0].fn
        let fvkey = data.vl.vi[0].fvkey
        let realUrl = `${url2}${fu}?vkey=${fvkey}`
        that.setData({
          videourl: realUrl
        })
      }
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
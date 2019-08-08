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
    // console.log(options)
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
        summary: list.summary,
        videourl: list.videourl
      })
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
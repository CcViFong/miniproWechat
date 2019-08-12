const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图显示数据
    scroll: [],
    // 第一栏显示数组
    fdata: [],
    // 第二栏显示数组
    secdata: [],
    // 第三栏显示数组
    thidata: [],
    // 第四栏显示数组
    foudata: [],
  },

  // 点击第一组中的其中一个显示详情内容
  sendfdata(e) {
    let current = parseInt(e.currentTarget.id);
    wx.navigateTo({
      url: `/pages/detail/index?&name=${'fdata'}&num=${current}&title=${this.data.fdata[current].title}`
    })
  },

  // 点击第二组中的其中一个显示详情内容
  sendsdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?&name=${'sdata'}&num=${current}&title=${this.data.secdata[current].title}`
    })
  },

  // 点击第三组中的其中一个显示详情内容
  sendtdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?&name=${'tdata'}&num=${current}&title=${this.data.thidata[current].title}`
    })
  },

  // 点击第四组中的其中一个显示详情内容
  sendfhdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?&name=${'fhdata'}&num=${current}&title=${this.data.foudata[current].title}`
    })
  },

  // 点击进入列表
  golist(val) {
    wx.navigateTo({
      url: `/pages/listall/index?name=${val.currentTarget.dataset.name}`
    })
  },

  // 获取云数据库中的数据
  getData() {
    app.getCloudData().then(res => {
      this.setData({
        scroll: res.data[0].scrolldata,
        fdata: res.data[0].fdata,
        secdata: res.data[0].sdata,
        thidata: res.data[0].tdata,
        foudata: res.data[0].fhdata,
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getData();
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
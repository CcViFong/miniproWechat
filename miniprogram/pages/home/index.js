// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图显示数据
    scroll:[],
    // 第一栏显示数组
    fdata: [],
    // 第二栏显示数组
    secdata:[],
    // 第三栏显示数组
    thidata:[],
    // 第四栏显示数组
    foudata:[],
  },

  sendfdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?src=${this.data.fdata[current].src}&title=${this.data.fdata[current].title}&rank=${this.data.fdata[current].rank}&director=${this.data.fdata[current].director}&role=${this.data.fdata[current].role}&summary=${this.data.fdata[current].summary}`
    })
  },
  sendsdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?src=${this.data.secdata[current].src}&title=${this.data.secdata[current].title}&rank=${this.data.secdata[current].rank}&director=${this.data.secdata[current].director}&role=${this.data.secdata[current].role}&summary=${this.data.secdata[current].summary}`
    })
  },
  sendtdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?src=${this.data.thidata[current].src}&title=${this.data.thidata[current].title}&rank=${this.data.thidata[current].rank}&director=${this.data.thidata[current].director}&role=${this.data.thidata[current].role}&summary=${this.data.thidata[current].summary}`
    })
  },
  sendfhdata(e) {
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?src=${this.data.foudata[current].src}&title=${this.data.foudata[current].title}&rank=${this.data.foudata[current].rank}&director=${this.data.foudata[current].director}&role=${this.data.foudata[current].role}&summary=${this.data.foudata[current].summary}`
    })
  },

  golist(val) {
    wx.navigateTo({
      url: `/pages/listall/index?name=${val.currentTarget.dataset.name}`
    })
  },

  // 获取云数据库中的数据
  getData() {
    const db = wx.cloud.database({ env: 'v001-57ea91' })
    db.collection('filmData').get().then(res => {
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
  onLoad: function (options) {
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
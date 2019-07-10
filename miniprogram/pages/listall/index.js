// pages/listall/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    dataname:''
  },

  // 获取云数据库中的数据
  getData() {
    const db = wx.cloud.database({ env: 'v001-57ea91' })
    db.collection('filmData').get().then(res => {
      this.setData({
        listData: res.data[0][this.data.dataname]
      })
    })
  },

  // 跳转对应的网页
  senddata(e){
    let current = parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/detail/index?src=${this.data.listData[current].src}&title=${this.data.listData[current].title}&rank=${this.data.listData[current].rank}&director=${this.data.listData[current].director}&role=${this.data.listData[current].role}&summary=${this.data.listData[current].summary}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataname:options.name
    })
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
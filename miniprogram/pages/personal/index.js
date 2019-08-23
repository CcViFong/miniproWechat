const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://s2.ax1x.com/2019/08/23/mDURTU.jpg',
    nickName: 'wxUser',
    flag: false,
    secret: '',
    itemshow: true,
    itemsData: [
      { icon: 'icon-huiyuan', text: '我的会员' },
      { icon: 'icon-unie60b', text: '我的点赞' },
      { icon: 'icon-shoucang1', text: '我的收藏' },
      { icon: 'icon-huodong', text: '活动详情' },
      { icon: 'icon-yijianfankui1', text: '意见反馈' },
      { icon: 'icon-guanyuwomen1', text: '关于我们' }
    ]
  },

  /**
   * 初始化
   */
  init() {
    const url = app.globalData.userImg;
    const name = app.globalData.userName;
    if (url && name) {
      this.setData({
        url: url,
        nickName: name
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
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
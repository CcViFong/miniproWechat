const app = getApp();
import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  let option = {
    title: {
      text: '类型偏好'
    },
    radar: {
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [5, 5],
        }
      },
      indicator: [
        { name: '恐怖片', max: 5 },
        { name: '悬疑片', max: 5 },
        { name: '动作片', max: 5 },
        { name: '科幻片', max: 5 },
        { name: '惊悚片', max: 5 },
        { name: '战争片', max: 5 }
      ]
    },
    series: [{
      name: '',
      type: 'radar',
      areaStyle: { normal: {} },
      data: [
        {
          value: [5, 4, 3, 4, 4, 2],
          name: ''
        }
      ]
    }]
  };
  chart.setOption(option);
  return chart;
}

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
    ],
    ec: {
      onInit: initChart
    },
    rankBoxShowFlag: false,
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
   * 显示评分模块
   */
  rankBoxShow(e) {
    let current = e.currentTarget.dataset.index;
    if (current === 0) {
      this.setData({
        rankBoxShowFlag: true
      });
    }
  },

  /**
   * 隐藏评分模块
   */
  rankBoxhide() {
    this.setData({
      rankBoxShowFlag: false
    });
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
    this.rankBoxhide();
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
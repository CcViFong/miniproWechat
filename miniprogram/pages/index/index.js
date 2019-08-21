//index.js
const app = getApp()

Page({
  data: {
    // 进入主页动画
    ani: null
  },
  // 进入主页面
  goHome() {
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/home/index',
      })
    }, 1100);
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    animation.scale(1.3).opacity(0).step();
    this.setData({
      ani: animation.export()      
    })
  },
  onLoad: function () {
  },
})

//index.js
const app = getApp()

Page({
  data: {
    fbgPic:[
      {src:'https://s2.ax1x.com/2019/07/09/ZySiCV.jpg'},
      {src:'https://s2.ax1x.com/2019/07/09/ZySpEn.jpg'},
      {src:'https://s2.ax1x.com/2019/07/09/ZyS9Nq.jpg'},
      {src:'https://s2.ax1x.com/2019/07/09/ZySC40.jpg'},
      {src:'https://s2.ax1x.com/2019/07/09/ZszzHs.jpg'}
    ]
  },
  // 进入主页面
  goHome(){
    wx.switchTab({
      url: '/pages/home/index',
    })
  },
  onLoad: function () {
  },
})

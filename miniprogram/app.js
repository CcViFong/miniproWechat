//app.js
App({
  onLaunch: function () {    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'v001-57ea91',
        traceUser: true,
      })
    }

    this.globalData = {
      userName:'',
      userImg:''
    }
  },

  // 请求云数据库
  getCloudData(){
    const db = wx.cloud.database()
    return db.collection('filmData').get();
  }
})

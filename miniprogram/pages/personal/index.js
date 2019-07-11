// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    name:'',
    flag:false,
    secret:'',
    itemshow:true,
    items:[
      {icon:'icon-caidaniconwodehui',text:'我的资料'},
      {icon:'icon-collect',text:'我的收藏夹'},
      {icon:'icon-set',text:'设置中心'},
    ]
  },

  // 登录
  login() {
    let _this = this;    
    wx.login({
      success(res) {        
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid: 'wx5f74e22484de02cd',
              secret: _this.data.secret,
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            success(res) {
              console.log(res)
              _this.shouquan();
            }
          })
        } else {
          wx.showToast({
            title: '登陆失败',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },

  // 授权
  shouquan() {
    let _this = this;
    wx.getSetting({
      success(res) {
        wx.authorize({
          scope: 'scope.userInfo',
          success(res) {
            wx.getUserInfo({
              success(res){
                wx.showToast({
                  title:"授权登录成功",
                  icon:"success",
                  duration:1500
                })                
                _this.setData(
                  {
                    name:res.userInfo.nickName,
                    url:res.userInfo.avatarUrl,
                    flag:false
                  }
                )
              }
            })
          }
        })
      }
    })
  },

  // 初始化
  init(){
    let _this = this;
    const db = wx.cloud.database({ env: 'v001-57ea91' })
    db.collection('filmData').get().then(res => {
      this.setData({
        secret: res.data[1].pwd,
      })
    })
    wx.checkSession({
      success() {
        _this.data.flag = false;
        _this.shouquan();
      },
      fail() {
        _this.data.flag = true;
        wx.showToast({
          title:'登录超时',
          icon:'none',
          duration:1000
        })
      }
    })
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
//index.js
const app = getApp()

Page({
  data: {
    ani: null,  // 进入主页动画
    flag: false,
    url: '',
    name: '',

  },
  /**
   * 进入主页面
   */
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
  /**
   * 初始化
   */
  init() {
    let _this = this;
    wx.checkSession({
      success() {
        _this.data.flag = false;
        _this.shouquan();
      },
      fail() {
        _this.data.flag = true;
        wx.showToast({
          title: '登录超时',
          icon: 'none',
          duration: 1000
        })
        _this.login();
      }
    })
  },

  /**
   * 授权操作
   */
  shouquan() {
    let _this = this;
    wx.getSetting({
      success(res) {
        wx.authorize({
          scope: 'scope.userInfo',
          success(res) {
            wx.getUserInfo({
              success(res) {
                // wx.showToast({
                //   title: "授权登录成功",
                //   icon: "success",
                //   duration: 1500
                // })
                app.globalData.userName = res.userInfo.nickName;
                app.globalData.userImg = res.userInfo.avatarUrl;
                _this.setData({
                  flag: false
                });
                _this.goHome();
              }
            })
          }
        })
      }
    })
  },

  /**
  * 登录操作
  */
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
  onLoad: function () {
  },
})

// index.js
const backgroundUrl ='https://pic.imgdb.cn/item/6741f55bd29ded1a8c345248.jpg'
const nameUrl = 'https://pic.imgdb.cn/item/6721e774d29ded1a8c1f12cf.png'
const seeUrl = 'https://pic.imgdb.cn/item/67262438d29ded1a8cafcac2.png'
const unseeUrl = 'https://pic.imgdb.cn/item/6726243cd29ded1a8cafcdb2.png'

Page({
  data: {
    backgroundUrl: backgroundUrl,
    nameUrl: nameUrl,
    activeTab: 'code',
    userPhone: '',
    userPassword: '',
    seeUrl: seeUrl,
    unseeUrl: unseeUrl,
    passwordVisible: true,
    userCode: '',
  },

  switchTab(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      activeTab: name
    });
  },

  togglePasswordVisibility() {
    this.setData({
      passwordVisible: !this.data.passwordVisible
    });
  },

  sendCode() {
    if (!this.data.userPhone) {
      wx.showToast({
          title: '请输入手机号',
          icon: 'none',
          duration: 2000
      });
      return;
      }
      // 模拟验证码发送
      this.setData({
      verificationCode: '123456' // 假设发送的验证码是 123456
      });
      wx.showToast({
      title: '验证码已发送',
      icon: 'success',
      duration: 2000
      });
  },

  onPhoneChange(e) {
    this.setData({
      userPhone: e.detail.value
    });
  },

  onPasswordChange(e) {
    this.setData({
      userPassword: e.detail.value
    });
  },

  onCodeChange(e) {
    this.setData({
      userCode: e.detail.value
    });
  },

  onForgotPassword(){
    wx.navigateTo({
        url: '/pages/login/retrieve/retrieve'
      });
  },

  onLogin(){
    wx.navigateTo({
        url: '/pages/dashboard/dashboard'
      });
  },

  onRegister(){
    wx.navigateTo({
      url: '/pages/login/register/register'
    });
  }
})

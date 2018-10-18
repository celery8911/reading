
<script>
          
export default {
  async created () {
    // let user = wx.getStorageSync('userinfo')
    // if(!user){
    //   qcloud.setLoginUrl(config.loginUrl);
    //   qcloud.login({
    //       success: function (userinfo) {
    //           console.log('登录成功',userinfo);
    //           showSuccess('登录成功')
    //           wx.setStorageSync('userinfo',userinfo)

    //       },
    //       fail: function (err) {
    //           // console.log('登录失败', err);
    //       }
    //   });
    // }

    // const res = await get('/weapp/demo')
    // console.log(123, res)
    // wx.request({
    //   url:config.host+'/weapp/demo',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    console.log('小程序启动了')
  }
}
</script>

<style>
.right {
  float: right;
}
.page-title{
  padding-left: 10px;
  background: #ccc;
  line-height: 30px;
  height: 30px;
  font-size:16px;
}
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom: 12px;
  margin-top: 20px;
}
.text-primary{
  color: #EA5149
}
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom:10px;
}
.text-primary{
  color:#EA5149;
}
.btn{
  color:white;
  background:#DC5A3B;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
  text-align: center;
   
}
.btn:active{
  background: #FA5A49;
}
</style>

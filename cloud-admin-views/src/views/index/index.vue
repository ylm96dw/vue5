<template>
  <div>
     <h1>欢迎来到云书</h1>
    <!--<h2>传统表单上传</h2>
    <div>
      <form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <br>
        <input type="text" name="token" v-model="token">
        <br>
        <button>
          提交
        </button>
      </form>
    </div> -->


    <!-- <h1>ajax上传图片</h1>
    <input type="file" @change="handleChange">
    <img :src="imgData" > -->

  <!-- <uploadCom @success="uploadImg"></uploadCom>
  <div style="border:1px solid #000;">
    <img :src="imgData" >
  </div> -->
  <!-- <checkBox v-model="myCheckBox"></checkBox>
  </div> -->
  </div>
</template>

<script>
// import checkBox from '@/components/checkbox-com'
// import uploadCom from '@/utils/upload-com'
// import axios from 'axios'

// export default {
//   //声明一个组件
//   components:{
//     uploadCom,
//     checkBox
//   },

//   data(){
//     return{
//       token:'',
//       imgData:'',
//       myCheckBox:''
//     }
//   },

  //ajax上传
  // methods:{
  //   getToken(){
  //     axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
  //       console.log(res)
  //       this.token = res.data.data
  //     })
  //   },
  //   handleChange(event){
  //   console.log(event)
  //   let file = event.target.files[0]

  //   let formData = new FormData()
    //第一个参数列名  第二个参数内容  第三个参数文件名
    // formData.append('file',file, file.name)
    // formData.append('token',this.token)
  //传续 第一个是链接地址 第二个参数表达对象 第三个参数是设置项
    // axios.post('https://upload-z1.qiniup.com',formData,{
    //   headers:{
    //     'Content-Type':'multipart/form-data',
        // 发get请求 默认的是applicationi
        // 'Content-Type':'application/x-www-form-urlencoded',
        //发post请求并且带了参数 发这种请求
        // 'Content-Type':'application/json'
  //     }
  //   }).then(res=>{
  //     this.imgData = res.data.url
  //   })
  //   },
  //   //做个监听
  //   uploadImg(url){
  //     this.imgData = url
  //   }
  // },
  // created(){
  //   this.getToken()
  // }





  //传统上传方法
  // data(){
  //   return{
  //     token:''
  //   }
  // },
  // methods:{
  //   getToken(){
  //     axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
  //       console.log(res)
  //       this.token = res.data.data
  //     })
  //   }
  // },
  // //created调用axios
  // created(){
  //   this.getToken()
  // }



// }
</script>

<style>

</style>

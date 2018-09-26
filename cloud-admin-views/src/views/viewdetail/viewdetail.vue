<template>
  <div>
    <h2>查看管理员详情</h2>
    <el-form :model="formData" label-width="80px" label-position="left">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="formData.nickname" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formData.email" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="用户头像">
        <uploadImg v-model="formData.avatar"></uploadImg>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="formData.desc" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="hangle">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import uploadImg from '@/utils/upload-com'
export default {
  components:{
    uploadImg
  },
  data(){
    return{
      formData:{
        username:'',
        nicknaem:'',
        email:'',
        desc:'',
        avatar:''
      }
    }
  },
  methods:{
    initData(){
      this.formData = {
        //不能查看其他管理员的信息
        ...this.$store.state.userinfo
      }
    },
    hangle(){
      this.$router.push('/layout/userEdit')
    }
  },
  created(){

    this.initData()
  }
}
</script>

<style>

</style>

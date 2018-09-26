<template>
  <div class="add-user">
    <h2>添加管理员</h2>
    <div class="form-wrap">
        <el-form v-model="user" size="small" label-width="80px" label-position="left">
          <el-form-item label="用户名">
            <el-input v-model="user.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="user.checkpassword"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="user.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="user.email"></el-input>
          </el-form-item>
          <el-form-item label="用户头像">
            <uploadImg v-model="user.avatar" style="float:left;"></uploadImg>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input v-model="user.desc" type="textarea"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="handleSave" size="small" type="primary">
              添加
            </el-button>
          </el-form-item>
        </el-form>
      </div>
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
      user:{
        username:'',
        nickname:'',
        email:'',
        password:'',
        desc:'',
        avatar:'',
        checkpassword:''
      },

    }
  },
  methods:{
    handleSave(){
      if(this.user.password == this.user.checkpassword){
        this.$axios.post('/user',this.user).then(res=>{
          console.log(res)
          if(res.code == 200){
            this.$message.success(res.msg)
            this.$router.push('/layout/users')
          }

        })
      }else{
        this.$message.error('两次输入的密码不一致')
      }
    }
  }
}
</script>
<style>
  .form-wrap{
    margin-top: 20px;
    width: 600px;
  }
</style>

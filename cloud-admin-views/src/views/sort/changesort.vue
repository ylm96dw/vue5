<template>
  <div>
    <h2>修改列表</h2>
    <el-form :data="formData">
      <el-form-item label="作者">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <uploadImg v-model="formData.icon" class="cl"></uploadImg>
      </el-form-item>
      <el-form-item label="序号">
        <el-input v-model="formData.index"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleClick">确认</el-button>
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
        title:'',
        icon:'',
        index:''
      }
    }
  },
  methods:{
    getbook(){
    let id = this.$route.query.id
    this.$axios.get(`/category/${id}`).then(res=>{
      this.formData = res.data
    })
  },
  handleClick(){
    let id = this.$route.query.id
    this.$axios.put(`/category/${id}`,this.formData).then(res=>{
      if(res.code == 200){
        this.$message.success(res.msg)
        this.$router.push('/layout/sortlist')
      }
    })
  }

  },
  created(){
    this.getbook()
  }

}
</script>

<style>
.cl{
  float: left;
}
</style>

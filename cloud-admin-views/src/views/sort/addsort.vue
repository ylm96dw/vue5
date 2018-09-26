<template>
  <div>
    <h2>添加分类</h2>
    <el-form :model="formData">
      <el-form-item label="分类名">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item>
        <uploadImg v-model="formData.icon"></uploadImg>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSave" >确定</el-button>
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
        icon:''
      }
    }
  },
  methods:{
    handleSave(){
      this.$axios.post('/category',this.formData).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push('/layout/sortlist')
        }
      })
    }
  }
}
</script>

<style>

</style>

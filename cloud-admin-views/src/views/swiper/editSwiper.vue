<template>
  <div>
    <h2>编辑轮播图</h2>
    <el-form :model="formData">
      <el-form-item label="标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="头图">
        <uploadImg v-model="formData.img" class="fl"></uploadImg>
      </el-form-item>
      <el-form-item label="书籍id">
        <el-input v-model="formData.book._id"></el-input>
      </el-form-item>
      <el-form-item label="index">
        <el-input v-model="formData.index"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSave">确定</el-button>
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
        img:'',
        book:'',
        index:''
      },
      id:''
    }
  },
  methods:{
    getData(){
      let id = this.$route.query.id;
      this.$axios.get(`/swiper/${id}`).then(res=>{
        this.formData = res.data
        this.id = res.data.book._id
      })
    },
    handleSave(){
      let id = this.$route.query.id;
      let params ={
        ...this.formData,
        book:this.id
      }
      console.log(params.book);
      this.$axios.put(`/swiper/${id}`,params).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push('/layout/swiperlist')
        }
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style>
  .fl{
    float: left;
  }
</style>

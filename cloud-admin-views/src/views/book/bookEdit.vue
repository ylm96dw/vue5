<template>
  <div>
    <h3>修改图书</h3>
    <div>
      <el-form :model="formData">
        <el-form-item label="作者">
          <el-input v-model="formData.author" ></el-input>
        </el-form-item>
        <el-form-item>
          <uploadImg v-model="formData.img"></uploadImg>
        </el-form-item>
        <el-form-item label="index">
          <el-input v-model="formData.index" ></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-input v-model="formData.type"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">
            确定修改
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
      formData:{
        author:'',
        img:'',
        index:'',
        title:'',
        type:'',
        desc:''
      }
    }
  },
  methods:{
    getBook(){
      let id = this.$route.query.bookId
      this.$axios.get(`/book/${id}`).then(res=>{
        this.formData = res.data
      })
    },
    handleSave(){
      let newValue = {
        ...this.formData,
        book_id:this.$route.query.bookId
      }
      this.$axios.put('/book',this.formData).then(res=>{
        console.log(res)
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push('/layout/booklist')
        }

      })
    }
  },
  created(){
    this.getBook()
  }
}
</script>

<style>

</style>

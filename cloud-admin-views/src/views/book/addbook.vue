<template>
  <div>
    <h2>添加图书</h2>
    <el-form :model="infoData">
      <el-form-item label="作者">
        <el-input v-model="infoData.author"></el-input>
      </el-form-item>
      <el-form-item label="图书头像">
        <uploadImg v-model="infoData.img" style="float:left"></uploadImg>
      </el-form-item>
      <el-form-item label="看云图书链接">
        <el-input v-model="infoData.url"></el-input>
      </el-form-item>
      <el-form-item label="图书分类">
        <el-select v-model="infoData.typeId" placeholder="请选择">
          <el-option
            v-for="item in list"
            :key="item.title"
            :label="item.title"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleClick" >
            添加
        </el-button>
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
    return {
      infoData:{
        author:'',
        img:'',
        url:'',
        typeId:''
      },
      list:[],
      value:true
    }
  },
  methods:{
    getData(){
      this.$axios.get('/category').then(res=>{
        console.log(res)
        this.list = res.data
      })
    },
    handleClick(){
      this.$axios.post('/book',this.infoData).then(res=>{
        console.log(res)
      //   if(res.code==200){
      //     this.$message.success(res.msg)
      //     this.$router.push('/layout/booklist')
      //   }
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style>

</style>

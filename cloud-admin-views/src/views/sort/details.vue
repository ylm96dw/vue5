<template>
  <div>
    <h2>分类详情页面</h2>
    <el-table :data="formData">
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="img-item" >
        </template>
      </el-table-column>
      <el-table-column label="作者">
        <template slot-scope="scope">
          <el-popover trigger="hover">
            <p>姓名:{{scope.row.author}}</p>
            <p>描述:{{scope.row.desc}}</p>
            <div slot="reference">
              <el-tag size="medium">{{scope.row.author}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="创建日期">
        <template slot-scope="scope">
          <span>
            <i class="el-icon-time"></i>
            <p>{{scope.row.createTime}}</p>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="index">
        <template slot-scope="scope">
          <i class="el-icon-message"></i>
          <span>{{scope.row.index}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleSwiper(scope.row)" >生成轮播图</el-button>
          <el-button size="mini" type="primary" @click="handleEdit(scope.row._id)" >编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      formData:[]
    }
  },
  methods:{

    getData(){
      let id = this.$route.query.id
      this.$axios.get(`/category/${id}/books`).then(res=>{
        this.formData = res.data.books
      })
    },
    handleEdit(id){
      this.$router.push(`/layout/bookEdit?bookId=${id}`)
    },
    handleDelete(ids){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(()=>{
          let id = this.$route.query.id
          this.$axios.delete(`/category/${id}/book/${ids}`).then(res=>{
            if(res.code == 200){
              this.$message.success(res.msg)
              this.getData()
            }
          })
        }).catch(()=>{
          this.$message.error(res.msg)
        })
    },
    handleSwiper(row){
      console.log(row)
      let params={
        title:row.title,
        img:row.img,
        book:row._id,
        index:row.index
      }
      console.log(params)
      this.$axios.post(`/swiper`,params).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push('/layout/swiperlist')
        }else{
          this.$message.error(res.msg)
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

</style>

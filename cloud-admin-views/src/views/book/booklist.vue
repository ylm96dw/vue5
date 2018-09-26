<template>
  <div>
    <h2>图书列表</h2>
    <el-table :data="tableData">
      <el-table-column label="头像" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="avatar">
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="150"></el-table-column>
      <el-table-column prop="createTime" label="日期"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row._id)" size="small" type="primary">编辑</el-button>

          <el-button @click="handleDelete(scope.row._id)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    v-model="page"
    background
    layout="prev, pager, next"
    @current-change="pageChange"
    :page-size="10"
    :total="count">

    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData:[],
      count:0,
      page:1
    }
  },
    methods:{
      getData(){
      this.$axios.get('/book',{pn:this.page,size:10}).then(res=>{
        console.log(res)
        if(res.code == 200){
          this.count = res.count
          this.tableData = res.data
        }
      })
    },
    handleEdit(id){
      this.$router.push(`/layout/bookEdit?bookId=${id}`)
    },
    handleDelete(id){
      this.$confirm('此操作将永久删除该图书，是否继续？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        console.log(555)
        this.$axios.delete(`/book/${id}`).then(res=>{
          if(res.code == 200){
          this.$message.success(res.msg)
          this.getData()
          }
        })

      }).catch(()=>{
        this.$message({
          type:'info',
          message:'已取消删除'
        })
      })
    },
     pageChange(page){
      this.page = page
      this.getData()
    }
  },

  created(){
    this.getData()
  }

}
</script>

<style>
.avatar{
  width: 100px;
  height: 150px;
}

</style>



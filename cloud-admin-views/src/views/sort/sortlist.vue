<template>
  <div>
    <h2>分类列表页面 <i title="添加分类"
    class="el-icon-circle-plus-outline" @click="addSort"></i> </h2>
    <el-table :data="tableData">
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.icon" class="img">
        </template>
      </el-table-column>
      <el-table-column prop="title" label="类名">
      </el-table-column>
      <el-table-column label="index">
        <template slot-scope="scope">
          <span>{{scope.row.index}}</span>
        </template>
      </el-table-column>
      <el-table-column label="typeId" >
        <template slot-scope="scope">
        <span>{{scope.row._id}}</span>
        </template>
      </el-table-column >
      <el-table-column label="书的数量">
        <template slot-scope="scope">
          <span>{{scope.row.books.length}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row._id)">
            编辑
          </el-button>
          <el-button size="mini" @click="handleDetails(scope.row._id)" >
            详情
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)" >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model="pn"
    @current-change="pageChange"
    :page-size="10"></el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData:[],
      pn:1
    }
  },
  methods:{
    getData(){
      this.$axios.get('/category',{pn:this.pn,size:10}).then(res=>{
        console.log(res)
        if(res.code ==200){

          this.tableData = res.data
        }
      })
    },
    addSort(){

    },
    pageChange(pn){
      this.pn = pn;
      this.getData()
    },
    handleDetails(id){
      this.$router.push(`/layout/details?id=${id}`)
    },
    handleEdit(id){
      this.$router.push(`/layout/changesort?id=${id}`)
    },
    handleDelete(id){

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$axios.delete(`/category/${id}`).then(res=>{
            console.log(666)
            if(res.code == 200){

              this.$message({
                type: 'success',
                message: res.msg

              });
              this.getData()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

    }
  },
  created(){
    this.getData()
  },
  watch:{
    pn(){
      this.getData()
    }
  }

}
</script>

<style>
.img{
  width: 100px;
  height: 120px;
}
</style>


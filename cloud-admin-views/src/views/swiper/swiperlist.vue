<template>
  <div>
    <h2>轮播图列表</h2>
    <el-table :data="tableData">
      <el-table-column label="头图" >
        <template slot-scope="scope">
          <img :src="scope.row.img" class="img-ti">
        </template>
      </el-table-column>
      <el-table-column label="类名">
        <template slot-scope="scope">
          {{scope.row.sort}}
        </template>
      </el-table-column>
      <el-table-column label="index">
        <template slot-scope="scope">
          <span>{{scope.row.index}}</span>
        </template>
      </el-table-column>
      <el-table-column label="头图">
        <template slot-scope="scope">
          <img :src="scope.row.staus" >
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button type="danger" @click="handleDel(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    v-model="pn"
    layout="prev, pager, next"
    @current-change="pageChange"
    :page-size="5"
    >

    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[],
      pn:1
    }
  },
  methods:{
      getswiper(){
      this.$axios.get(`/swiper?pn=${this.pn}&size=5`).then(res=>{
        console.log(res)
        this.tableData = res.data
      })
    },
    handleEdit(id){
      this.$router.push(`/layout/editSwiper?id=${id}`)
    },
    handleDel(id){
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(()=>{
          this.$axios.post('/swiper/delete',{ids:[id]}).then(res=>{
            console.log(res)
            if(res.code == 200){
              this.$message.success(res.msg)
              this.getswiper()
            }
          })
        }).catch(()=>{
          this.$message({
            type:'info',
            message:'已取消删除'
          })
        })


      },
    pageChange(pn){
      this.pn = pn
      this.getswiper()
    }
  },
  created(){
    this.getswiper()
  },


}
</script>

<style>
.img-ti{
  width: 100px;
  height: 120px;
}
</style>

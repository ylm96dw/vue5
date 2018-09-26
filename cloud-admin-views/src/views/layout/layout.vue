<template>
  <div class="layout">
    <div class="header ml-200">
      <h1 class="title">
        云书后台操作系统
      </h1>
    </div>
    <div class="side-bar">
          <el-menu
          :router="true" background-color="#545c64"
          text-color="#fff">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户管理</template>
              <el-menu-item index="/layout/index">首页</el-menu-item>
              <el-menu-item index="/login">登录页</el-menu-item>
              <el-menu-item index="/layout/users">用户管理页面</el-menu-item>
              <el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>
              <el-menu-item index="/layout/addAdmin">添加管理员页面</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
              <el-menu-item index=""></el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span >导航二</span>
            </template>
            <el-menu-item-group>
              <template slot="title">图书馆理</template>
              <el-menu-item index="/layout/booklist">
                图书列表
              </el-menu-item>
              <el-menu-item index="/layout/addbook">
                添加图书
              </el-menu-item>
              <el-menu-item index="/layout/sortlist">
                分类列表
              </el-menu-item>
              <el-menu-item index="/layout/addsort">
                添加分类列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <!-- <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item> -->
          <el-submenu index="4">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span >导航四</span>
            </template>
            <el-menu-item-group>
              <template slot="title">轮播图馆理</template>
              <el-menu-item index="/layout/addSwiper">
                添加轮播图
              </el-menu-item>
              <el-menu-item index="/layout/swiperlist">
                轮播图列表
              </el-menu-item>
              
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
    </div>
    <div class="main-content ml-200">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<!--去掉参差不齐的边 方法一
<style >
.el-menu{
  border-right: none
}
</style>

-->
<style lang="scss">
  .layout{
    .title{
      text-align: center;
      font-weight: 400;
      line-height: 60px;
      height: 60px;
      border-bottom:1px solid #f1f1f1;
      font-size: 20px
    }
    .ml-200{
      margin-left: 200px
    }

    .side-bar{
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      padding-top: 80px;
      width:200px;
      overflow: hidden;
      background-color:#545c64;

      // <!--去参差不齐的边 方法二 深度选择器-->
      /deep/
      .el-menu{
        border-right: none;
      }
    }
    .main-content{
      padding: 15px;
    }
  }
</style>

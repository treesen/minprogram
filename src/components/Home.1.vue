<template>
  <el-container>
    <el-header>

    </el-header>
    <el-main>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo home-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div class="block main">
        <el-carousel height="550px">
          <el-carousel-item v-for="item in imgList" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-main>
  </el-container>
</template>
<style scoped>
@media screen and (max-width: 1000px) {
  .el-header {
    background-color: red;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
}

.home-menu {
  z-index: 1000;
  position: fixed;
  top: 150px;
}

.main {
  margin: 50px 100px;
}

.el-header {
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #5077aa;
  color: #ffffff;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
  border-bottom-color: #d6d3d3;
  margin-bottom: 10px;
}

.el-main {
  padding: 60px 0 0 0;
}
img {
  /* max-width: 100%; */
  max-height: 100%;
}
</style>

<script>
import f from '@/assets/image/1.jpg'
import s from '@/assets/image/2.jpg'
import t from '@/assets/image/3.jpg'
import ff from '@/assets/image/4.jpg'

export default {
  data () {
    return {
      isCollapse: true,
      imgList: [f, s, t, ff]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<template>
  <el-container>
    <front-masker />
    <el-header>
      <div class="logo">treesen的个人博客</div>
      <div class="brand">
        <!-- <img :src="brand" height="50px"> -->
      </div>
      <!-- <el-menu default-active="1" mode="horizontal" class="el-menu-horizontal" background-color="#262626" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link to="/nav">知识导航</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu> -->
    </el-header>
    <el-container class="content">
      <el-aside>
        <el-menu el-menu default-active="1" :collapse="isCollapse" class="el-menu-vertical" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1" @click="$router.push({ path: 'nav' })">
            <i class="el-icon-location"></i>
            <span slot="title">网站导航</span>
          </el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>学习笔记</span>
            </template>
            <el-menu-item-group>
              <template slot="title">UI</template>
              <el-menu-item index="2-1">photoshop</el-menu-item>
              <el-menu-item index="2-2">axure</el-menu-item>
              <el-menu-item index="2-3">sketch</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="WEB">
              <el-menu-item index="2-4">vue</el-menu-item>
              <el-menu-item index="2-5">angular</el-menu-item>
              <el-menu-item index="2-6">bootstrap</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="SERVER">
              <el-menu-item index="2-7">java</el-menu-item>
              <el-menu-item index="2-8">python</el-menu-item>
              <el-menu-item index="2-9">go</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="NETWORK">
              <el-menu-item index="2-7">http</el-menu-item>
              <el-menu-item index="2-8">tcp/udp</el-menu-item>
              <el-menu-item index="2-9">ip</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
          <!-- <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">学习笔记</span>
          </el-menu-item> -->
          <el-menu-item index="4" @click="$router.push({ path: 'about' })">
            <i class="el-icon-more"></i>
            <span slot="title">关于我</span>
          </el-menu-item>
        </el-menu>
        <div class="qc-menu-fold" @click="isCollapse = !isCollapse">
          <i :class="[isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left', 'el-icon-d-arrow']"></i>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <!-- <iframe :src="the_url" width="100%" height="100%" /> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
@media screen and (max-width: 800px) {
  .qc-menu-fold {
    display: none;
  }
}
.el-icon-d-arrow {
  color: white;
}
.logo {
  font-size: 22px;
  line-height: 60px;
  color: #fff;
  margin-left: 60px;
}
a {
  text-decoration: none;
}
.front-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.el-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #262626;
}
.content {
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 100%;
}

.el-aside {
  background-color: #333;
  text-align: left;
  width: auto !important;
  overflow-x: hidden;
}
.el-main {
  background-color: #f5f7fa;
  padding: 0;
  overflow: auto;
}
.el-menu-horizontal {
  position: absolute;
  right: 30px;
}

.el-menu-vertical {
  border-right: 0px;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}

.mask-enter-active {
  transition: all 0.3s ease;
}
.mask-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.mask-enter, .mask-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

.qc-menu-fold {
  line-height: 100;
  position: absolute;
  overflow: hidden;
  width: 18px;
  height: 38px;
  border: 1px solid #4d4d4d;
  border-right: none;
  z-index: 100;
  background-color: #4d4d4d;
  top: 4px;
  left: 200px;
  /* margin-right: -18px; */
  border-radius: 2px 0 0 2px;
  cursor: pointer;
}

.qc-menu-fold i {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -8px;
  margin-left: -8px;
  display: inline-block;
  cursor: pointer;
}
.el-menu--collapse + .qc-menu-fold i {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -8px;
  margin-left: -8px;
  display: inline-block;
}

.el-menu--collapse + .qc-menu-fold {
  left: 64px;
}
</style>

<script>
import FrontMasker from './FrontMasker.vue'

export default {
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    'front-masker': FrontMasker
  },
  methods: {
  }
}
</script>

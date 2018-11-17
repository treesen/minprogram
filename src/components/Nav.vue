<template>
  <el-container class="nav-sites">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in carousels" :key="item.id">
        <a :href="item.link" target="_blank"><img :src="item.img" alt="" width="100%"></a>
      </el-carousel-item>
    </el-carousel>
    <div class="sites">
      <a target="_blank" href="http://www.shui-mai.com/" class="site-item" data-log="SITES.1">
        <span style="background-image: url(/static/UI.png);"></span>
        <i>UI设计者</i>
      </a>

      <a target="_blank" href="http://huaban.com/" data-origin="http://v.baidu.com" class="site-item" data-log="SITES.2">
        <span style="background-image: url(/static/huabanwang.png);"></span>
        <i>花瓣网</i>
      </a>

      <a target="_blank" href="https://www.zcool.com.cn/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/zcool.ico);"></span>
        <i>站酷网</i>
      </a>

      <a target="_blank" href="https://stackoverflow.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/stackoverflow.ico);"></span>
        <i>stackoverflow</i>
      </a>

      <a target="_blank" href="https://cn.vuejs.org/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/vue.png);"></span>
        <i>vue</i>
      </a>
      <a target="_blank" href="https://angular.io/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/angular.png);"></span>
        <i>angular</i>
      </a>

      <a target="_blank" href="https://github.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/github.png);"></span>
        <i>github</i>
      </a>

      <a target="_blank" href="https://maven.apache.org/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/maven.png);"></span>
        <i>maven</i>
      </a>

      <a target="_blank" href="http://dubbo.apache.org/zh-cn/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/dubbo.ico);"></span>
        <i>dubbo</i>
      </a>

      <a target="_blank" href="http://spring.io/projects/spring-cloud" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/spring.png);"></span>
        <i>spring-cloud</i>
      </a>
      <a target="_blank" href="https://www.docker.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/docker.png);"></span>
        <i>docker</i>
      </a>
      <a target="_blank" href="https://www.python.org/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/python.ico);"></span>
        <i>python</i>
      </a>
      <a target="_blank" href="https://golang.org/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/go.jpg);"></span>
        <i>golang</i>
      </a>
      <a target="_blank" href="https://www.nginx.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/nginx.png);"></span>
        <i>nginx</i>
      </a>
      <a target="_blank" href="https://www.axure.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/axure.ico);"></span>
        <i>axure</i>
      </a>
      <a target="_blank" href="https://www.photoshop.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/ps.jpg);"></span>
        <i>photoshop</i>
      </a>
      <a target="_blank" href="https://www.adobe.com/cn/products/illustrator.html" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/ai.png);"></span>
        <i>illustrator</i>
      </a>
      <a target="_blank" href="http://getbootstrap.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/bootstrap.ico);"></span>
        <i>bootstrap</i>
      </a>
      <a target="_blank" href="https://www.seeseed.com/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background-image: url(/static/seeseed.png);"></span>
        <i>seeseed</i>
      </a>
      <a target="_blank" href="https://daneden.github.io/animate.css/" data-origin="http://video.browser.qq.com" class="site-item" data-log="SITES.3">
        <span style="background:#2995ec">A</span>
        <i>animate</i>
      </a>
      <!-- <a target="_blank" href="javascript:;" class="add-sites" style="display: inline;">
        <span class="el-icon-plus"></span>
        <i></i>
      </a> -->
    </div>

    <div class="copyright">Copyright 2018. All Rights Reserved. Design by treesen. 粤ICP备18132385号-1</div>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      carousels: [
        { id: 1, img: require('../assets/UI.jpg'), link: 'http://www.shui-mai.com/course/' },
        { id: 2, img: require('../assets/blockchain.jpg'), link: 'http://www.xinhuanet.com/finance/2018-02/26/c_1122452794.htm' },
        { id: 3, img: require('../assets/spring.jpg'), link: 'https://www.bilibili.com/video/av22683925/' },
        { id: 4, img: require('../assets/ali.png'), link: 'https://yunqi.youku.com/meeting/review' }]
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 800px) {
  .el-carousel {
    display: none;
  }
  .nav-sites {
    width: auto !important;
  }
}
.copyright {
  margin-top: 20px;
}
img {
  width: auto;
  /* height: auto; */
  max-width: 100%;
  max-height: 100%;
}
.el-carousel {
  width: 1200px;
  margin: 60px auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.nav-sites {
  display: block;
  margin: 60px auto;
  width: 1200px;
}
.nav-title {
  margin: 0 auto;
  width: 90%;
  text-align: left;
}
.nav-title .el-tag {
  width: 100px;
}
.el-card__body {
  padding: 0;
}
.sites {
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  transition: margin-bottom 0.5s ease, width 0.5s ease;
}

.sites a {
  width: 54px;
  max-width: 60px;
  margin: 0 14px 5px;
  padding: 1% 1.19% 0;
  text-align: center;
}
a {
  text-decoration: none;
  outline: 0 none;
  color: #333;
}
.sites span {
  -webkit-user-drag: none;
  display: flex;
  width: 100%;
  height: 54px;
  line-height: 54px;
  border-radius: 50%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  transition: filter 0.2s ease-out;
  font-size: 30px;
  color: #fff;
  text-align: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12);
}
.sites i {
  width: 140%;
  margin-left: -20%;
  padding-top: 12px;
  font-size: 13px;
  text-align: center;
  white-space: normal;
  height: 32px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #000;
}
.el-icon-plus::before {
  color: gray;
}
</style>

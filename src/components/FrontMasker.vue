<template>
  <div class="front-mask" v-if="showMask">
    <div class="wrap">
      <transition appear enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutRight">
        <h1 v-if="show" class="site__title mega">Treesen.club</h1>
      </transition>
      <transition appear enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <hr v-if="show" />
      </transition>
      <transition appear enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" @before-leave="maskFade" @after-leave="hideMask">
        <span style="display: inline-block;" class="beta subhead btn" @click="show = false;" v-if="show">Enter</span>
      </transition>
      <transition appear enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutRight">
        <span style="display: inline-block;" class="beta subhead" v-if="show"> 我们愈是学习，愈觉得自己的贫乏</span>
      </transition>
    </div>
  </div>
  <!-- <transition name="mask">
    <div v-show="show" class="front-mask" :style="{backgroundImage:'url('+frontMask+')'}">
      <el-button type="primary" class="enterBtn" @click="show = false;">点击进入</el-button>
    </div>
  </transition> -->
</template>
<style scoped>
.btn {
  color: white !important;
  border: 0.3px solid #c6e2ff;
  background-color: #feab3a;
  padding: 0 10px;
  margin-right: 5px;
  cursor: pointer;
}
.site__title {
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* -webkit-animation: hue 60s infinite linear; */
}
h1 {
  font: 100%/2.5 'Roboto', Verdana, sans-serif;
  font-weight: 100;
  font-size: 6rem;
  line-height: 1;
  display: block;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  letter-spacing: -0.05em;
}
.front-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  opacity: 1;
  overflow: hidden;

  font: 100%/1.5 'Roboto', Verdana, sans-serif;
  color: #3d464d;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  width: 100%;
}

*,
:before,
:after {
  margin: 0;
  padding: 0;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h1,
.alpha {
  margin-bottom: 1.5rem;

  font-size: 3rem;
  font-weight: 100;
  line-height: 1;
  letter-spacing: -0.05em;
}

h2,
.beta {
  margin-bottom: 0.75rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1;
}

@media (min-width: 650px) {
  .mega {
    font-size: 6rem;
    line-height: 1;
  }
}

.subhead {
  /* font-family: 'Courier New', Courier, monospace; */
}

.subhead,
.meta {
  color: #7b8993;
}
.promo {
  text-align: center;
}

hr {
  margin-bottom: 1.5rem;
  border: none;
  margin-top: -1px;
  height: 1px;
  background-color: #c0c8c9;
  background-image: -webkit-linear-gradient(0deg, #fff, #c0c8c9, #fff);
}

.wrap {
  max-width: 38rem;
  margin: 0 auto;
}

.island {
  padding: 1.5rem;
}

.isle {
  padding: 0.75rem;
}

.spit {
  padding: 0.375rem;
}
</style>
<script>
import frontMask from '@/assets/front-mask.jpg'

export default {
  data () {
    return {
      frontMask,
      showMask: true,
      show: true
    }
  },
  methods: {
    hideMask () {
      this.showMask = false
    },
    maskFade () {

    }
  }
}
</script>

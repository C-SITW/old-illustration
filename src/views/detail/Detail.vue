<template>
  <Topnav title="应用详情" />
  <div class="Software">
    <img class="Software__logo" src="../../assets/images/Software__logo.svg" />
    <div class="Software__name">旧图插画</div>
    <div class="Software__version">version 1.0.0</div>
  </div>
  <div class="wrapper">
    <div class="introduce-item">
      <div class="introduce-item__title">设计初衷</div>
      <div class="introduce-item__original">
        你有多久没有拿起一本书了？小时候，一切都是如此平淡，惟有书中的插画总是让我浮想联翩。给我的生活增添一点乐趣。在信息时代高速发展的今天，人们越来越离不开手机了，每天都会有各种各样有趣的东西出现了。填充了生活中的每时每刻，人们渐渐变得很少阅读，那些沉浸在书中的插画也随着沉入历史的长河，我不想遗忘它们，所以设计了旧图插画，里面收集了旧书中的一些精美插画
      </div>
    </div>
    <div class="introduce-item">
      <div class="introduce-item__title">设计</div>
      <div class="introduce-item__technology">
        <a href=""><img src="../../assets/images/logo/figma_logo.svg" /></a>
        <a href=""><img src="../../assets/images/logo/iconfont__logo.svg" /></a>
      </div>
    </div>
    <div class="introduce-item">
      <div class="introduce-item__title">前端</div>
      <div class="introduce-item__technology">
        <a href=""><img src="../../assets/images/logo/vue_logo.png" /></a>
        <div class="introduce-item__technology__stack">vue-cli3</div>
        <div class="introduce-item__technology__stack">Composition</div>
        <div class="introduce-item__technology__stack">Axios</div>
      </div>
    </div>
    <div class="introduce-item">
      <div class="introduce-item__title">后端</div>
      <div class="introduce-item__technology">
        <a href=""><img src="../../assets/images/logo/node_logo.svg" /></a>
        <div class="introduce-item__technology__stack">KOA2</div>
        <div class="introduce-item__technology__stack">mongodb</div>
        <div class="introduce-item__technology__stack">nginx</div>
        <div class="introduce-item__technology__stack">pm2</div>
      </div>
    </div>
    <div class="introduce-item">
      <div class="introduce-item__title">源码</div>
      <div class="introduce-item__technology">
        <a href="https://gitee.com/sitw/old-illustration"
          ><img src="../../assets/images/logo/gitgee_logo.svg"
        /></a>
        <a href=""><img src="../../assets/images/logo/github_logo.svg" /></a>
      </div>
    </div>
  </div>
</template>
<script>
import Topnav from "../../components/Topnav.vue";
export default {
  name: "Detail ",
  components: { Topnav },
};
</script>

<style lang='scss' scoped>
@import "../../style/mixins.scss";
.Software {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 1rem;
  left: 0.2rem;
  right: 0.2rem;
  height: 1rem;
  &__name {
    margin-top: 0.08rem;
  }
  &__version {
    margin-top: 0.05rem;
  }
}
.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 2.3rem;
  bottom: 0rem;
  right: 0.2rem;
  overflow-y: scroll;
  @include hideScrollbar;
}
.introduce-item {
  margin-bottom: 0.1rem;
  padding: 0.2rem 0.2rem;
  border-radius: 0.2rem;
  background: #f8f8f8;
  color: #353535;
  &:nth-child(1) {
    color: #fff;
    background: #3b3838;
  }
  &__title {
    font-weight: bold;
    font-size: 0.18rem;
  }
  &__technology {
    margin-top: 0.1rem;
    display: flex;
    align-items: center;
    height: 0.4rem;
    overflow-x: scroll;
    @include hideScrollbar;
    & > * {
      margin-right: 0.2rem;
    }
    &__stack {
      padding: 0.1rem;
      text-align: center;
      background-color: #3b3838;
      color: #fff;
      font-size: 0.14rem;
    }
    img {
      width: 0.35rem;
      height: 0.35rem;
    }
  }
  &__original {
    text-indent: 2em;
    letter-spacing: 0.02rem;
    margin-top: 0.08rem;
    font-size: 0.12rem;
    line-height: 0.18rem;
  }
}
</style>
<template>
  <div class="header">
    <router-link :to="{ name: 'Detail' }">
      <div class="header__detail">SITW</div>
    </router-link>
    <div class="header__logo iconfont">&#xe60c;</div>
    <router-link :to="{ name: 'Personal' }">
      <img class="header__user" :src="userinfo.imgurl" />
    </router-link>
  </div>
  <Search placeholder="搜些逝去的图书插画吧..." />
  <div class="nav">
    <router-link v-for="item in navList" :key="item.title" :to="item.to">
      <div class="nav__item">
        <img class="nav__item__icom" :src="item.src" />
        <p class="nav__item__title">{{ item.title }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Search from "../../components/Search.vue";
import { useUserInfoEffect } from "../../utils/getUserInfo";

export default {
  name: "Header",
  components: { Search },
  setup() {
    const navList = [
      {
        src: require("../../assets/images/artist.svg"),
        title: "艺术家",
        to: { name: "Artists" },
      },
      {
        src: require("../../assets/images/Sculptor.svg"),
        title: "雕刻师",
        to: { name: "Artists" },
      },
      {
        src: require("../../assets/images/Illustrator.svg"),
        title: "插画师",
        to: { name: "Artists" },
      },
      {
        src: require("../../assets/images/format.svg"),
        title: "格式",
        to: { name: "Artists" },
      },
    ];

    const { userinfo } = useUserInfoEffect();
    return { navList, userinfo };
  },
};
</script>

<style lang='scss' scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.header {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__detail,
  &__user {
    width: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border-radius: 50%;
    background: $content-fontcolor;
    color: #fff;
  }
  &__user {
    &__img {
      width: 100%;
      border-radius: 50%;
    }
  }

  &__logo {
    font-size: 0.28rem !important;
    color: $content-fontcolor;
  }
}
.nav {
  display: flex;
  margin-top: 0.2rem;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  overflow-x: scroll;
  @include hideScrollbar;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0.25rem;
    &__icon {
      width: 0.8rem;
      height: 0.8rem;
    }
    &__title {
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>
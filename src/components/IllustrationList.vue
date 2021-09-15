<template>
  <div class="illustration">
    <img class="illustration__img" :src="item.imgurl" />
    <div class="illustration__info">
      <div class="illustration__info__title">{{ item.name }}</div>
      <div class="illustration__info__author">{{ item.artistname }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IllustrationList",
  props: ["item"],
};
</script>
<style lang='scss' scoped>
@import "../style/mixins.scss";
.illustration {
  height: 100%;
  margin-right: 0.08rem;
  &__img {
    width: 1.55rem;
    height: 1.92rem;
    background-color: #a1a1a1;
    // border-radius: 0.2rem;
    overflow: hidden;
    background-size: cover;
  }
  &__info {
    width: 1.45rem;
    margin-top: 0.06rem;
    padding-left: 0.1rem;
    &__title {
      font-weight: bold;
      @include ellipsis;
      font-size: 0.12rem;
      margin-bottom: 0.02rem;
    }
    &__author {
      @include ellipsis;
      font-size: 0.1rem;
      color: #a1a1a1;
    }
  }
}
</style>
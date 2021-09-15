<template>
  <div class="search">
    <div class="search__icon iconfont">&#xe607;</div>
    <input type="text" class="search__input" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "Seach",
  props: ["placeholder"],
};
</script>


<style lang='scss' scoped>
@import "../style/mixins.scss";

.search {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.45rem;
  border-radius: 50px;
  background: #edeef0;
  margin-top: 0.18rem;
  &__icon {
    font-size: 0.15rem !important;
    margin: 0 0.08rem 0 0.2rem;
  }
  &__input {
    flex: 1;
    font-size: 0.14rem;
    font-weight: bold;
    margin-right: 0.2rem;
    @include hideSearchStyle;
  }
}
</style>
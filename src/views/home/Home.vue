<template>
  <div class="wrapper">
    <Header />
    <Recommend />
  </div>

  <Docker :currentIndex="0" />
</template>

<script>
import Header from "./Header.vue";
import Recommend from "./Recommend.vue";
import Docker from "../../components/Docker.vue";

export default {
  name: "Home",
  components: { Header, Docker, Recommend },
};
</script>

<style lang='scss' scoped>
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  bottom: 0.68rem;
  right: 0.2rem;
  overflow-y: scroll;
  @include hideScrollbar;
}
</style>
<template>
  <div class="docker__content">
    <div class="docker">
      <router-link
        v-for="(item, index) in dockerlist"
        :key="item.icon"
        :to="item.to"
      >
        <div
          :class="{
            docker__item: true,
            'docker__item--active': index === currentIndex,
          }"
        >
          <div class="iconfont" v-html="item.icon" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props: ["currentIndex"],
  setup() {
    const dockerlist = [
      { icon: "&#xe600;", to: { name: "Home" } },
      { icon: "&#xe603;", to: { name: "Favorite" } },
      { icon: "&#xe60b;", to: { name: "Message" } },
      { icon: "&#xe602;", to: { name: "Personal" } },
    ];
    return { dockerlist };
  },
};
</script>


<style lang='scss' scoped>
@import "../style/viriables.scss";

.docker__content {
  position: absolute;
  left: 0;
  bottom: 0.1rem;
  right: 0;
  padding: 0 0.2rem 0 0.2rem;
}

.docker {
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.12rem 0 0.12rem;
  width: 100%;
  height: 0.65rem;
  border-radius: 0.5rem;
  background-color: $content-fontcolor;
  &__item {
    width: 0.32rem;
    height: 0.32rem;
    text-align: center;
    line-height: 0.32rem;
    .iconfont {
      color: #fff;
    }
    &--active {
      background-color: #525050;
      mix-blend-mode: normal;
      border-radius: 0.5rem;
    }
  }
}
</style>
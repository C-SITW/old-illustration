<template>
  <div class="topnav-contont">
    <div class="topnav">
      <img
        @click="handleBackClick"
        src="../assets/images/back.svg"
        class="topnav__back"
      />
      <div class="topnav__title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
import { useBackClickEffect } from "../utils/backClick";

export default {
  name: "Topnav ",
  props: ["title"],
  setup() {
    const { handleBackClick } = useBackClickEffect();
    return { handleBackClick };
  },
};
</script>

<style lang='scss' scoped>
.topnav-contont {
  position: fixed;
  top: 0.2rem;
  left: 0;
  right: 0;
  height: 0.6rem;
  padding: 0 0.2rem 0 0.2rem;
}
.topnav {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 0.22rem 0 0.22rem;
  width: 100%;
  height: 0.6rem;
  border-radius: 0.2rem;
  background: rgba(248, 248, 248, 1);
  &__back {
    position: absolute;
  }
  &__title {
    flex: 1;
    display: flex;
    justify-content: center;
    color: rgba(31, 29, 29, 1);
    font-weight: bold;
    font-size: 0.18rem;
  }
}
</style>
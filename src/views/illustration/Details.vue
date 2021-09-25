<template>
  <div class="introduce">
    <div class="introduce__translate">
      <div
        v-for="item in landdata"
        :key="item.title"
        @click="() => handleSelectClick(item.title)"
        :class="{
          introduce__translate__land: true,
          'introduce__translate--active': currentland === item.title,
        }"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
  <div class="title">
    {{ currentland === "EN" ? data.en : data.cn }}
  </div>
</template>
<script>
import { ref } from "vue";

// 处理中英切换
const useLandEffect = () => {
  const landdata = [{ title: "中" }, { title: "EN" }];
  let currentland = ref(landdata[0].title);
  const handleSelectClick = (title) => {
    currentland.value = title;
  };
  return { landdata, currentland, handleSelectClick };
};

export default {
  name: "Details",
  props: ["data"],
  setup() {
    const { landdata, currentland, handleSelectClick } = useLandEffect();
    return { landdata, currentland, handleSelectClick };
  },
};
</script>
<style lang='scss' scoped>
.introduce {
  width: 100%;
  &__translate {
    width: 1rem;
    display: flex;
    &__land {
      background: rgb(194, 177, 177);
      width: 0.5rem;
      line-height: 0.3rem;
      text-align: center;
      color: rgba(255, 245, 245, 1);
      font-weight: 500;
      font-size: 0.14rem;
    }
    &--active {
      background: rgba(226, 81, 81, 1);
    }
  }
}
.title {
  margin-top: 0.2rem;
  font-weight: 500;
  font-size: 0.16rem;
  text-indent: 1em;
  line-height: 0.28rem;
  border-bottom: 1px solid rgb(228, 228, 228);
  padding-bottom: 0.2rem;
}
</style>
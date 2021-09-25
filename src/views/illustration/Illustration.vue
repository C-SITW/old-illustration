<template>
  <Header :data="data" />

  <div class="wrapper">
    <Details :data="data" />
    <Comment :data="data" />
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
import { get } from "../../utils/request";
import Header from "./Header.vue";
import Details from "./Details.vue";
import Comment from "./Comment.vue";

// 获取该插画后台数据
const useDetailsEffect = () => {
  const route = useRoute();
  const id = route.params.id;

  // 获取该插画后台数据
  const illustration = reactive({ data: {} });
  const getDetails = async () => {
    const res = await get(`api/illustration/${id}`);
    illustration.data = res.data;
  };

  getDetails();
  const { data } = toRefs(illustration);

  return { data };
};

export default {
  name: "Illustration",
  components: { Header, Details, Comment },
  // components: { Header, Details },
  setup() {
    const { data } = useDetailsEffect();
    return { data };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";

.wrapper {
  box-sizing: border-box;
  padding: 0.15rem 0.2rem 0 0.2rem;
  position: fixed;
  top: 3.02rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  @include hideScrollbar;
}
</style>
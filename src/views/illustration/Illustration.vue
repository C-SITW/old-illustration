<template>
  <Header :data="datas" />

  <div class="wrapper">
    <Details :data="datas" />
    <Comment :data="datas" />
  </div>
  <Tosat v-if="show" :massage="toastMessage" />
</template>
<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
import { get } from "../../utils/request";
import Header from "./Header.vue";
import Details from "./Details.vue";
import Comment from "./Comment.vue";
import Tosat, { useToastEffect } from "../../components/Toast.vue";

export default {
  name: "Illustration",
  components: { Header, Tosat, Details, Comment },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    // 获取该插画后台数据
    const datatest = reactive({ datas: {} });
    const getIllustrationDetails = async () => {
      const res = await get(`api/illustration/${id}`);
      datatest.datas = res.data;
    };

    getIllustrationDetails();
    const { datas } = toRefs(datatest);
    return { datas };
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
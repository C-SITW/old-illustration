<template>
  <div class="main">
    <div class="main__title">
      <div class="main__title__recom">每日推荐</div>
      <router-link :to="{ name: 'More' }">
        <div class="main__title__more">更多</div>
      </router-link>
    </div>

    <div class="content">
      <router-link
        v-for="item in IllustrationList"
        :key="item._id"
        :to="`/illustration/${item._id}`"
      >
        <IllustrationList :item="item" />
      </router-link>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import IllustrationList from "../../components/IllustrationList.vue";

const useRecommendEffect = () => {
  const IllustrationList = ref([]);
  const getRecommendList = async () => {
    const res = await get("api/illustration/recommend");
    // console.log(res);
    if (res?.errno === 0 && res?.data?.length) {
      IllustrationList.value = res.data;
    }
  };
  return { IllustrationList, getRecommendList };
};

export default {
  name: "Recommend",
  components: { IllustrationList },
  setup() {
    const { IllustrationList, getRecommendList } = useRecommendEffect();
    getRecommendList();

    return { IllustrationList };
  },
};
</script>


<style lang='scss' scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";

.main {
  margin-top: 0.2rem;
  height: 2.7rem;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  @include hideScrollbar;
  &__title {
    margin-bottom: 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__recom {
      color: #1f1d1d;
      font-weight: bold;
      font-size: 0.18rem;
    }
    &__more {
      color: #a1a1a1;
      font-weight: bold;
      font-size: 0.12rem;
    }
  }
  .content {
    display: flex;
    margin-top: 0.2rem;
    width: 100%;
    height: 2.29rem;
    overflow: hidden;
    overflow-x: scroll;
    @include hideScrollbar;
  }
}
</style>
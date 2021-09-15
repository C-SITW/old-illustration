<template>
  <Topnav title="每日推荐" />
  <div class="wrapper">
    <div class="recommend">
      <div class="recommend__title">
        <div class="recommend__title__day">31</div>
        <div class="recommend__title__division"></div>
        <div class="recommend__title__month">09</div>
      </div>
      <div class="recommend__content">
        <div class="recommend__show" v-if="IllustrationList.length === 0">
          正从布满灰尘的旧书中寻找插画...
        </div>
        <router-link
          v-for="item in IllustrationList"
          :key="item._id"
          :to="`/illustration/${item._id}`"
        >
          <IllustrationList :item="item" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import IllustrationList from "../../components/IllustrationList.vue";
import Topnav from "../../components/Topnav";

const useRecommendEffect = () => {
  const IllustrationList = ref([]);

  const getRecommendList = async () => {
    const res = await get("api/illustration/recommend");
    if (res?.errno === 0 && res?.data?.length) {
      IllustrationList.value = res.data;
    }
  };

  return { IllustrationList, getRecommendList };
};

export default {
  name: "More",
  components: { Topnav, IllustrationList },
  setup() {
    const { IllustrationList, getRecommendList } = useRecommendEffect();
    getRecommendList();

    return { IllustrationList };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 1rem;
  bottom: 0.8rem;
  right: 0.2rem;
  .recommend {
    &__title {
      width: 0.85rem;
      position: relative;
      margin-bottom: 0.25rem;
      &__day {
        color: #ce5353;
        font-weight: bold;
        font-size: 0.36rem;
      }
      &__division {
        position: absolute;
        left: 0.24rem;
        bottom: 0.15rem;
        width: 0.5rem;
        height: 0.024rem;
        transform: rotate(125.706692deg);
        border: 3px solid #6c5656;
      }
      &__month {
        position: absolute;
        right: 0.15rem;
        bottom: 0.02rem;
        color: #6c5656;
        font-weight: bold;
        font-size: 0.16rem;
      }
    }
    &__content {
      width: 100%;
      height: 4.8rem;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include hideScrollbar;
      .illustration {
        margin: 0 0 0.15rem 0;
      }
    }
    &__show {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #818181;
      font-weight: bold;
      font-size: 0.15rem;
    }
  }
}
</style>
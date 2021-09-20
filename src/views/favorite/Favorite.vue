<template>
  <div class="wrapper">
    <Search placeholder="寻找收藏的插画吧..." />
    <div class="collection">
      <div class="collection__title">我的收藏</div>
      <div class="collection__content">
        <Showtitle
          v-if="IllustrationList.length === 0"
          title="您暂未有收藏的插画！快去收藏吧！"
        />
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

  <Docker :currentIndex="1" />
</template>

<script>
import Docker from "../../components/Docker.vue";
import Search from "../../components/Search.vue";
import IllustrationList from "../../components/IllustrationList.vue";
import { useIllustrationsEffect } from "../../utils/getIllustrations";
import Showtitle from "../../components/Showtitle.vue";

export default {
  name: "Favorite",
  components: { Docker, Search, IllustrationList, Showtitle },
  setup() {
    const url = "/api/user/collection";
    const { IllustrationList } = useIllustrationsEffect(url);
    return { IllustrationList };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  bottom: 0.8rem;
  right: 0.2rem;

  .collection {
    margin-top: 0.2rem;
    width: 100%;
    &__title {
      margin: 0 0 0.15rem 0.06rem;
      color: #1f1d1d;
      font-weight: bold;
      font-size: 0.18rem;
    }
    &__content {
      width: 100%;
      height: 4.2rem;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include hideScrollbar;
      .illustration {
        margin: 0 0 0.15rem 0;
      }
    }
  }
  .show {
    align-items: center;
  }
}
</style>
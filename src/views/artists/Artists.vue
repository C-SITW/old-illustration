<template>
  <Topnav title="艺术家列表" />
  <div class="wrapper">
    <router-link
      v-for="item in ArtistList"
      :key="item._id"
      :to="`/artist/${item._id}`"
    >
      <div class="artist__item">
        {{ item.artistname }}
      </div>
    </router-link>
  </div>
</template>
<script>
import { ref } from "vue";
import Topnav from "../../components/Topnav.vue";
import { get } from "../../utils/request";
export default {
  name: "Artists",
  components: { Topnav },
  setup() {
    const ArtistList = ref([]);

    const getArtistList = async () => {
      const res = await get("api/artist");
      // console.log(res.data);
      if (res?.errno === 0 && res?.data?.length) {
        ArtistList.value = res.data;
      }
    };

    getArtistList();

    return { ArtistList };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";

.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 0.95rem;
  bottom: 0;
  right: 0.2rem;
  overflow-y: scroll;
  @include hideScrollbar;
  .artist__item {
    display: inline-block;
    margin: 0 0.12rem 0.1rem 0;
    background-color: #c4c4c4;
    line-height: 0.2rem;
    font-size: 0.14rem;
    font-weight: bold;
    padding: 0.15rem;
  }
}
</style>
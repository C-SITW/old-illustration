<template>
  <Topnav title="艺术家详情" />
  <div class="wrapper">
    <div class="artistinfo">
      <div class="artistinfo__name">{{ artistname }}</div>
      <div class="artistinfo__profile">
        {{ artistinfo }}
      </div>
      <div class="artistinfo__llustration">
        <Showtitle
          v-if="llustrationlist.length === 0"
          title="正在努力收录该作者插画！"
        />
        <router-link
          v-for="item in llustrationlist"
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
import { reactive, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { get } from "../../utils/request";
import Topnav from "../../components/Topnav.vue";
import IllustrationList from "../../components/IllustrationList";
import Showtitle from "../../components/Showtitle.vue";

const useArtistDetailEffect = () => {
  const route = useRoute();
  const id = route.params.id;
  const data = reactive({
    artistname: "",
    artistinfo: "",
    llustrationlist: [],
  });
  const getArtistDetails = async () => {
    const res = await get(`api/artist/${id}`);
    if (res?.errno === 0) {
      data.artistname = res.data.artistname;
      data.artistinfo = res.data.artistinfo;
      data.llustrationlist = res.data.llustrationlist;
    }
  };
  getArtistDetails();
  const { artistname, artistinfo, llustrationlist } = toRefs(data);
  return { artistname, artistinfo, llustrationlist };
};

export default {
  name: "Artist",
  components: { Topnav, IllustrationList, Showtitle },
  setup() {
    const { artistname, artistinfo, llustrationlist } = useArtistDetailEffect();
    return { artistname, artistinfo, llustrationlist };
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
  .artistinfo {
    &__name {
      display: inline-block;
      margin-bottom: 0.15rem;
      padding: 0.15rem;
      background-color: #ede2e2;
      line-height: 0.2rem;
      font-size: 0.14rem;
      font-weight: bold;
    }
    &__profile {
      margin-bottom: 0.15rem;
      color: #737373;
      font-weight: 500;
      font-size: 0.14rem;
      text-indent: 1em;
      line-height: 0.28rem;
    }
    &__llustration {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .illustration {
        margin: 0 0 0.15rem 0;
      }
    }
  }
}
</style>
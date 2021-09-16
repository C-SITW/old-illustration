<template>
  <header>
    <div class="topnav-contont">
      <div class="topnav">
        <img
          @click="handleBackClick"
          src="../../assets/images/back.svg"
          class="topnav__back"
        />
        <div
          @click="handlecollectClick"
          :class="{
            topnav__collect: true,
            iconfont: true,
            'topnav__collect--active': Illustrationinfo.collection
              ? true
              : false,
          }"
        >
          &#xe603;
        </div>
      </div>
    </div>

    <img :src="Illustrationinfo.imgurl" alt="" class="bg" />
    <div class="details">
      <div class="details__info">
        <div class="details__info__name">{{ Illustrationinfo.name }}</div>
        <div class="details__info__artistname">
          {{ Illustrationinfo.artistname }}
        </div>
        <div class="details__info__book">{{ Illustrationinfo.book }}</div>
      </div>
      <img class="download" src="../../assets/images/download.svg" />
    </div>
  </header>
</template>
<script>
import { toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "IllustrationHeader",
  props: ["Illustrationinfo"],
  setup() {
    const router = useRouter();
    // 点击返回
    const handleBackClick = () => {
      router.back();
    };

    // 点击收藏
    const handlecollectClick = () => {
      console.log("收藏");
    };

    return { handleBackClick, handlecollectClick };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;
  .bg {
    width: 100%;
    height: 2.2rem;
  }
  .details {
    border-bottom: 1px solid rgb(228, 228, 228);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.8rem;
    background-color: rgb(255, 255, 255);
    padding: 0 0.2rem 0 0.2rem;
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 1.62rem;
      height: 0.6rem;

      &__name,
      &__artistname,
      &__book {
        overflow-x: scroll;
        @include hideScrollbar;
      }

      &__name {
        color: rgba(31, 29, 29, 1);
        font-weight: bold;
        font-size: 0.2rem;
      }
      &__artistname {
        color: rgba(92, 92, 92, 1);
        font-weight: bold;
        font-size: 0.14rem;
      }
      &__book {
        color: rgba(201, 196, 196, 1);
        font-weight: bold;
        font-size: 0.12rem;
      }
    }
  }
  .topnav-contont {
    position: absolute;
    top: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.2rem 0 0.2rem;
    .topnav {
      display: flex;
      justify-content: space-between;
      &__collect {
        border-radius: 50px;
        background: rgba(51, 51, 51, 1);
        width: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        color: #fff;
        &--active {
          background: #fff;
          color: #d50f0f;
        }
      }
    }
  }
}
</style>
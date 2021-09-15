<template>
  <div class="wrapper">
    <h1 class="title">消息</h1>
    <Search placeholder="寻找未读的消息..." />
    <div class="new">
      <div class="new__subject">
        <div class="new__subject__title">未读消息</div>
        <div class="new__subject__count">02</div>
      </div>

      <div class="new__content">
        <div
          class="new__item"
          v-for="item in messagedata"
          :key="item.createdAt"
        >
          <div class="new__item__time">{{ item.createdAt }}</div>
          <div class="new__item__userimg">
            <img :src="item.created_userimg" />
          </div>
          <div class="new__item__division"></div>
          <div class="new__item__count">
            收到
            <span>1人</span>
            <span>{{ item.type === 0 ? "点赞" : "喜欢" }}</span>
            <span class="iconfont">{{
              item.type === 0 ? "&#xe606;" : "&#xe611;"
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Docker :currentIndex="2" />
</template>
<script>
import Docker from "../../components/Docker.vue";
import Search from "../../components/Search.vue";
export default {
  name: "Message",
  components: { Docker, Search },
  setup() {
    const messagedata = [
      {
        type: 0,
        createdAt: "2021/8/28",
        created_userid: "6129aee5f622e7608c87f533",
        created_username: "骑单车的龙",
        created_userimg:
          "https://5b0988e595225.cdn.sohucs.com/images/20171221/22b1117f31ed4805b2087af994feb376.jpeg",
        illustrationid: "61270f5ef91206387c457189",
      },
      {
        type: 1,
        createdAt: "2021/8/30",
        created_userid: "61261b652eda9e6180bae2c1",
        created_username: "zeze",
        created_userimg:
          "http://192.168.31.66:3000/images/useravatar/DefaultAvatar.jpeg",
        illustrationid: "6129e9f7550f50cc3876cd6d",
      },
      {
        type: 0,
        createdAt: "2021/8/30",
        created_userid: "61261b652eda9e6180bae2c5",
        created_username: "SITW",
        created_userimg:
          "http://localhost:3000/images/useravatar/DefaultAvatar.jpeg",
        illustrationid: "61270f5ef91206387c457189",
      },
    ];

    return { messagedata };
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
  .title {
    margin: 0 0 0.12rem 0;
    text-align: center;
    color: #1f1d1d;
    font-weight: bold;
    font-size: 0.18rem;
  }

  .new {
    margin-top: 0.15rem;
    &__subject {
      display: flex;
      justify-content: space-between;
      padding: 0 0.15rem 0 0.15rem;
      margin-bottom: 0.15rem;
      &__title {
        color: #1f1d1d;
        font-weight: bold;
        font-size: 0.14rem;
      }
      &__count {
        color: #c8b3b3;
        font-weight: bold;
        font-size: 0.12rem;
      }
    }
    &__content {
      width: 100%;
      height: 4.2rem;
      overflow-y: scroll;
      @include hideScrollbar;
    }
    &__item {
      box-sizing: border-box;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 0.08rem;
      padding: 0 0.195rem 0 0.195rem;
      width: 100%;
      height: 0.73rem;
      border-radius: 0.5rem;
      background: #f8f8f8;
      &__time {
        position: absolute;
        top: 0.08rem;
        right: 0.33rem;
        color: #898686;
        font-weight: bold;
        font-size: 0.1rem;
      }
      &__userimg {
        width: 1.34rem;
        height: 0.4rem;
        // background-color: rgb(29, 29, 29);
        display: flex;
        justify-content: space-between;
        img {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 0.5rem;
        }
      }
      &__division {
        width: 0.02rem;
        height: 0.4rem;
        background: #c4c4c4;
      }
      &__count {
        color: #7c7c7c;
        font-weight: bold;
        font-size: 0.14rem;
        .iconfont {
          margin-left: 0.1rem;
          color: #d60f0f;
        }
      }
    }
  }
}
</style>
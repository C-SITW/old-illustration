<template>
  <div class="bg">
    <img src="../../assets/images/bg.png" />
    <router-link :to="{ name: 'Edituserinfo' }">
      <img class="modify" src="../../assets/images/edit.svg" />
    </router-link>
    <div class="user">
      <img :src="data2.imgurl" />
      <div class="userinfo">
        <div class="useritem" v-for="item in data" :key="item.title">
          <span class="title">{{ item.title }}</span>
          <span class="count">{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class="signature">
      <img
        class="recommendation"
        src="../../assets/images/recommendation.svg"
      />
      <div class="content">
        <div class="user-cont">
          <div class="username">{{ data2.username }}</div>
          <div class="usersignature">{{ data2.introduction }}</div>
        </div>
        <img src="../../assets/images/back.svg" class="link" />
      </div>
    </div>

    <img
      @click="handleSignOutClick"
      class="signout"
      src="../../assets/images/signout.svg"
    />
  </div>

  <Docker :currentIndex="3" />
</template>
<script>
import { ref, reactive, toRefs } from "vue";
import { useUserInfoEffect } from "../../utils/getUserInfo";
import { get } from "../../utils/request";
import Docker from "../../components/Docker.vue";

const useSignOutEffect = () => {
  const handleSignOutClick = () => {
    localStorage.removeItem("isLogin");
    location.reload();
  };
  return { handleSignOutClick };
};

export default {
  name: "Personal",
  components: { Docker },
  setup() {
    const { handleSignOutClick } = useSignOutEffect();
    const { userinfo } = useUserInfoEffect();

    // const data1 = reactive({ userinfos: {} });
    // const totallikes = ref("");
    // const fans = ref("");
    // const follow = ref("");
    // const collections = reactive([]);

    const data2 = reactive({
      username: "",
      totallikes: "",
      fans: "",
      follow: "",
      collections: [],
      imgurl: "",
      introduction: "",
    });

    const getUserInfo = async () => {
      const res = await get("api/user/info");
      if (res?.errno === 0) {
        data2.totallikes = res.data.Totallikes;
        data2.fans = res.data.fans;
        data2.follow = res.data.follow;
        data2.collections.value = res.data.collections;
        data2.imgurl = res.data.imgurl;
        data2.introduction = res.data.introduction;
        data2.username = res.data.username;
      }
    };

    const { totallikes, fans, follow, collections } = toRefs(data2);

    // const getUserInfo = async () => {
    //   const res = await get("api/user/info");
    //   if (res?.errno === 0) {
    //     console.log(res);
    //     data1.userinfos = res.data;
    //     totallikes.value = res.data.Totallikes;
    //     follow.value = res.data.follow;
    //     fans.value = res.data.fans;
    //     collections.value = res.data.collections;
    //   }
    // };
    // const { userinfos } = toRefs(data1);

    getUserInfo();

    const data = [
      { title: "获赞", count: totallikes },
      { title: "粉丝", count: fans },
      { title: "关注", count: follow },
      { title: "收藏", count: collections.length },
    ];

    // return { handleSignOutClick, userinfo, userinfos, data };
    return { handleSignOutClick, data, data2 };
  },
};
</script>
<style lang='scss' scoped>
.bg {
  position: relative;
  width: 100%;
  height: 1.2rem;
  img {
    width: 100%;
    height: 100%;
  }
  .modify {
    position: absolute;
    top: 0.5rem;
    right: 0.28rem;
    width: 30px;
    height: 30px;
  }
  .user {
    box-sizing: border-box;
    position: absolute;
    bottom: -0.52rem;
    left: 0;
    width: 100%;
    height: 1.04rem;
    padding: 0 0.28rem 0 0.2rem;
    // background-color: rgba(75, 50, 50, 0.24);
    display: flex;
    img {
      margin-right: 0.15rem;
      width: 0.98rem;
      height: 0.98rem;
      border-radius: 0.5rem;
    }
    .userinfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      height: 100%;
      // background-color: rgba(153, 53, 53, 0.473);
      padding-top: 0.5rem;
      .useritem {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-weight: bold;
          font-size: 0.14rem;
        }
        .count {
          margin-top: 0.02rem;
          color: #908f8f;
          font-weight: bold;
          font-size: 0.1rem;
        }
      }
    }
  }
}

.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 2rem;
  bottom: 1rem;
  right: 0.2rem;
  overflow: hidden;
  .signature {
    display: flex;
    width: 100%;
    height: 175px;
    border-radius: 0.1rem;
    background: #646161;
    .content {
      position: relative;
      flex: 1;
      padding: 0.15rem;
      color: #ffffff;
      .username {
        font-weight: bold;
        font-size: 0.18rem;
      }
      .usersignature {
        margin-top: 0.05rem;
        font-weight: 500;
        font-size: 0.12rem;
      }
      .link {
        position: absolute;
        bottom: 0.15rem;
        right: 0.15rem;
        transform: rotate(180deg);
      }
    }
  }
  .signout {
    position: absolute;
    right: 0.1rem;
    bottom: 0;
  }
}
</style>
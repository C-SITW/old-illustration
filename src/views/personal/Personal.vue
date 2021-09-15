<template>
  <div class="bg">
    <img src="../../assets/images/bg.png" />
    <router-link :to="{ name: 'Edituserinfo' }">
      <img class="modify" src="../../assets/images/edit.svg" />
    </router-link>
    <div class="user">
      <img src="../../assets/images/DefaultAvatar.jpeg" alt="" />
      <div class="userinfo">
        <div class="useritem">
          <span class="title">获赞</span>
          <span class="count">10</span>
        </div>
        <div class="useritem">
          <span class="title">获赞</span>
          <span class="count">10</span>
        </div>
        <div class="useritem">
          <span class="title">获赞</span>
          <span class="count">10</span>
        </div>
        <div class="useritem">
          <span class="title">获赞</span>
          <span class="count">10</span>
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
          <div class="username">SITW</div>
          <div class="usersignature">寻找历史的痕迹，一定会发现什么...</div>
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
import Docker from "../../components/Docker.vue";
export default {
  name: "Personal",
  components: { Docker },
  setup() {
    const handleSignOutClick = () => {
      localStorage.removeItem("isLogin");
      location.reload();
    };

    return { handleSignOutClick };
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
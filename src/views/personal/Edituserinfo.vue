<template>
  <div class="topnav-contont">
    <div class="topnav">
      <img
        @click="handleBackClick"
        src="../../assets/images/back.svg"
        class="topnav__back"
      />
      <div class="topnav__title">编辑个人资料</div>
      <img
        @click="handleEditClick"
        src="../../assets/images/black-edit.svg"
        class="topnav__edit"
      />
    </div>
  </div>
  <div class="wrapper">
    <div class="avatar-content">
      <div class="imgcontent">
        <img
          class="userimg"
          src="../../assets/images/DefaultAvatar.jpeg"
          alt=""
        />
        <img class="mask" src="../../assets/images/change.svg" alt="" />
      </div>
      <div>点击更换头像</div>
    </div>
    <ul class="userinfo-content">
      <li
        v-for="item in userinfo"
        :key="item.title"
        class="userinfo-content__item"
      >
        <div class="userinfo-content__item__title">{{ item.title }}</div>
        <input
          class="userinfo-content__item__input"
          type="text"
          :value="item.value"
        />
      </li>
      <li class="userinfo-content__item">
        <div class="userinfo-content__item__title">测试</div>
        <input class="userinfo-content__item__input" type="date" />
      </li>
    </ul>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "Edituserinfo",
  setup() {
    const router = useRouter();
    const handleBackClick = () => {
      router.back();
    };
    const handleEditClick = () => {
      console.log("修改信息！");
    };

    const userinfo = [
      { title: "用户名", value: "zeze" },
      { title: "性别", value: "男" },
      { title: "年龄", value: "19" },
      { title: "简介", value: "寻找历史的痕迹，一定会发现什么" },
    ];

    return { userinfo, handleBackClick, handleEditClick };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";

.topnav-contont {
  position: fixed;
  top: 0.2rem;
  left: 0;
  right: 0;
  height: 0.6rem;
  padding: 0 0.2rem 0 0.2rem;
}
.topnav {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 0.22rem 0 0.22rem;
  width: 100%;
  height: 0.6rem;
  border-radius: 0.2rem;
  background: rgba(248, 248, 248, 1);
  &__back {
    position: absolute;
  }
  &__edit {
    position: absolute;
    right: 0.4rem;
  }
  &__title {
    flex: 1;
    display: flex;
    justify-content: center;
    color: rgba(31, 29, 29, 1);
    font-weight: bold;
    font-size: 0.18rem;
  }
}
.wrapper {
  position: absolute;
  left: 0.2rem;
  top: 1rem;
  bottom: 1rem;
  right: 0.2rem;
  overflow: hidden;
  .avatar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1.24rem;
    // background-color: rgba(255, 0, 0, 0.377);
    margin-bottom: 0.25rem;
    .imgcontent {
      position: relative;
      margin-bottom: 0.1rem;
      .userimg {
        width: 0.98rem;
        height: 0.98rem;
        border-radius: 0.5rem;
      }
      .mask {
        position: absolute;
        left: 0;
      }
    }
  }
  .userinfo-content {
    width: 100%;
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      margin-bottom: 0.05rem;
      padding: 0 0.22rem 0 0.22rem;
      height: 0.5rem;
      border-radius: 0.2rem;
      background: #f8f8f8;
      font-size: 0.14rem;
      &__input {
        text-align: right;
        color: #2c2525;
        font-weight: 500;
        font-size: 0.14rem;
        @include hideSearchStyle;
        @include ellipsis;
      }
    }
  }
}
</style>
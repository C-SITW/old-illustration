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
        <img class="userimg" :src="data.imgurl" />
        <img class="mask" src="../../assets/images/change.svg" />
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
          v-model="item.model"
        />
      </li>
    </ul>
  </div>
  <Tosat v-if="show" :massage="toastMessage" />
</template>
<script>
import { reactive, toRefs } from "vue";
import { useBackClickEffect } from "../../utils/backClick";
import { get, patch } from "../../utils/request";
import Tosat, { useToastEffect } from "../../components/Toast.vue";

const useUserInfoEffect = () => {
  // 用户数据
  const data = reactive({
    username: "zeze",
    sex: "男",
    age: "12",
    introduction: "寻找历史的痕迹，一定会发现什么",
    imgurl: "",
  });
  const getUserInfo = async () => {
    const res = await get("api/user/info");
    if (res?.errno === 0) {
      data.username = res.data.username;
      data.sex = res.data.sex;
      data.age = res.data.age;
      data.introduction = res.data.introduction;
      data.imgurl = res.data.imgurl;
    }
  };
  getUserInfo();
  const { username, sex, age, introduction } = toRefs(data);
  const userinfo = reactive([
    { title: "用户名", model: username },
    { title: "性别", model: sex },
    { title: "年龄", model: age },
    { title: "简介", model: introduction },
  ]);

  return { data, userinfo };
};
const useEditInfoEffect = (data) => {
  const { show, toastMessage, showToast } = useToastEffect();
  // 更改信息
  const handleEditClick = async () => {
    const res = await patch("/api/user/info", {
      username: data.username,
      sex: data.sex,
      age: data.age,
      introduction: data.introduction,
    });
    if (res?.errno === 0) {
      showToast("更新成功！");
      location.reload();
    }
  };

  return { show, toastMessage, handleEditClick };
};

export default {
  name: "Edituserinfo",
  components: { Tosat },
  setup() {
    const { data, userinfo } = useUserInfoEffect();
    const { show, toastMessage, handleEditClick } = useEditInfoEffect(data);
    const { handleBackClick } = useBackClickEffect();

    return {
      data,
      show,
      userinfo,
      toastMessage,
      handleEditClick,
      handleBackClick,
    };
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
<template>
  <div class="bg">
    <img src="../../assets/images/register.svg" />
  </div>
  <div class="main">
    <div class="register">
      <div class="register__content">
        <div class="register__content__item">
          <div class="register__content__item__title">用户名</div>
          <input
            v-model="username"
            type="text"
            class="register__content__item__input"
          />
        </div>
        <div class="register__content__item">
          <div class="register__content__item__title">密码</div>
          <input
            v-model="password"
            type="password"
            class="register__content__item__input"
          />
        </div>
        <div class="register__content__item">
          <div class="register__content__item__title">再次确认密码</div>
          <input
            v-model="check"
            type="password"
            class="register__content__item__input"
          />
        </div>
      </div>
    </div>

    <div class="register__button" @click="handleregister">立即注册</div>
    <router-link :to="{ name: 'Login' }">
      <div class="register__link">登录</div>
    </router-link>
  </div>
  <router-link :to="{ name: 'Detail' }">
    <img class="logo" src="../../assets/images/logo.svg" />
  </router-link>
  <Tosat v-if="show" :massage="toastMessage" />
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { post } from "../../utils/request";
import Tosat, { useToastEffect } from "../../components/Toast.vue";

const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "", check: "" });
  // 处理注册逻辑
  const handleregister = async () => {
    if (data.password === "" || data.username === "") {
      return showToast("用户名和密码不能为空");
    }
    if (data.password !== data.check) {
      return showToast("两次密码不一致！");
    }
    try {
      const res = await post("api/user/register", {
        username: data.username,
        password: data.password,
      });
      if (res?.errno === 0) {
        showToast("注册成功！正在为您跳转登录页面！");
        setTimeout(() => {
          router.push({ name: "Login" });
        }, 1500);
      } else {
        showToast("注册失败！该用户已注册");
      }
    } catch (e) {
      showToast("请求服务器失败");
    }
  };
  const { username, password, check } = toRefs(data);
  return { username, password, check, handleregister };
};

export default {
  name: "Register",
  components: { Tosat },

  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, check, handleregister } =
      useRegisterEffect(showToast);

    return { username, password, check, show, toastMessage, handleregister };
  },
};
</script>

<style lang='scss' scoped>
.bg {
  position: relative;
  top: 0;
  width: 100%;
  height: 3.19rem;
  background: linear-gradient(
    180deg,
    #f05959 0.31%,
    rgba(172, 133, 133, 0) 100%
  );
  img {
    position: absolute;
    top: 0.2rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
.main {
  position: absolute;
  top: 1.1rem;
  left: 50%;
  transform: translateX(-50%);
}

.register {
  width: 3.36rem;
  height: 2.84rem;
  border-radius: 50px;
  background: #312f2f;
  &__content {
    padding: 0.7rem 0.2rem 0 0.2rem;
    &__item {
      width: 100%;
      margin-bottom: 0.1rem;
      &__title {
        margin: 0 0 0.04rem 0.2rem;
        color: #dcdbdb;
        font-weight: bold;
        font-size: 0.12rem;
      }
      &__input {
        font-size: 0.12rem;
        box-sizing: border-box;
        padding: 0 0.2rem 0 0.2rem;
        height: 0.37rem;
        width: 100%;
        border-radius: 0.5rem;
        background: #f2f3f5;
        outline: none;
        border: none;
      }
    }
  }
  &__button {
    margin-top: 0.12rem;
    width: 100%;
    background-color: #493d3d;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 0.52rem;
    font-weight: bold;
    font-size: 0.18rem;
    color: #fbf0f0;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
  }
  &__link {
    margin-top: 0.16rem;
    text-align: center;
    color: #575353;
    font-weight: bold;
    font-size: 0.16rem;
  }
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.2rem;
}
</style>
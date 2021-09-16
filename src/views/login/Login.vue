<template>
  <div class="bg">
    <img src="../../assets/images/login.svg" />
  </div>
  <div class="main">
    <div class="login">
      <img class="login__bg" src="../../assets/images/loginbg.svg" />
      <div class="login__content">
        <div class="login__content__item">
          <div class="login__content__item__title">用户名</div>
          <input
            type="text"
            v-model="username"
            class="login__content__item__input"
          />
        </div>
        <div class="login__content__item">
          <div class="login__content__item__title">密码</div>
          <input
            type="password"
            v-model="password"
            class="login__content__item__input"
            @keyup.enter="handleLogin"
          />
        </div>
      </div>
    </div>

    <div class="login__button" @click="handleLogin">登录验证</div>
    <div class="register">
      <router-link :to="{ name: 'Register' }">
        <div class="login__link">注册</div>
      </router-link>
      <div class="login__split"></div>
      <div class="login__demo">演示</div>
    </div>
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

const useLoginEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "" });
  // 处理登录逻辑
  const handleLogin = async () => {
    if (data.password === "" || data.username === "") {
      return showToast("用户名和密码不能为空");
    }
    try {
      const res = await post("api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (res?.errno === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        showToast(res.message);
      }
    } catch (e) {
      showToast("请求服务器失败");
    }
  };
  const { username, password } = toRefs(data);
  return { username, password, handleLogin };
};

export default {
  name: "Login",
  components: { Tosat },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);

    return { username, password, show, toastMessage, handleLogin };
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
.login {
  width: 3.36rem;
  height: 2.84rem;
  border-radius: 50px;
  background: #312f2f;
  &__content {
    margin-top: 0.1rem;
    padding: 0 0.2rem 0 0.2rem;
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
  &__link,
  &__demo {
    margin: 0.16rem 0.05rem;
    text-align: center;
    color: #575353;
    font-weight: bold;
    font-size: 0.16rem;
  }
  &__split {
    width: 0.02rem;
    height: 0.18rem;
    background: rgb(197, 197, 197);
  }
}
.register {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.2rem;
}
</style>
<template>
  <div class="main">
    <div class="commentbox">
      <img :src="userinfo.imgurl" class="userimg" />
      <div class="userinfo">
        <div class="username">{{ userinfo.username }}</div>
        <div class="userinput">
          <input
            v-model="inputdata"
            type="text"
            class="input"
            placeholder="发表精彩评论吧！"
          />
          <img
            @click="handleReleaseClick"
            src="../../assets/images/release.svg"
            :class="{
              release: true,
              'release--active': inputdata === '' ? false : true,
            }"
          />
        </div>
      </div>
    </div>
    <div class="commentare">
      <div class="commentare__content">
        <div class="commentare__content__title">评论</div>
        <div class="commentare__content__count">
          {{
            datas.comments.length > 10
              ? datas.comments.length
              : `0${datas.comments.length}`
          }}
        </div>
      </div>
      <Showtitle
        v-if="data.comments.length === 0"
        title="暂无评论！快来抢沙发吧！！！"
      />

      <div
        class="commentare__item"
        v-for="(item, index) in datas.comments"
        :key="item.commentid"
      >
        <img :src="item.userimgurl" class="commentare__userimg" />
        <div class="usercommentbox">
          <div class="usercomment__info">
            <div class="usercomment__info__name">
              {{
                item.username === userinfo.username
                  ? `${item.username}(我）`
                  : item.username
              }}
            </div>
            <div
              class="usercomment__info__praise"
              @click="
                () => handleLikeClick(item.commentid, item.userid, userinfo._id)
              "
            >
              <div
                :class="{
                  usercomment__like: true,
                  iconfont: true,
                  'usercomment__like--active': item.userlike ? true : false,
                }"
              >
                &#xe606;
              </div>
              <div class="usercomment__praise">{{ item.Total_likes }}</div>
            </div>
          </div>
          <div class="usercomment__time">{{ item.createdAt }}</div>
          <div class="usercomment__content">
            {{ item.content }}
          </div>
        </div>
        <div
          class="commentare__item__del iconfont"
          v-if="item.username === userinfo.username"
          @click="() => handleDelClick(item.commentid, index)"
        >
          &#xe612;
        </div>
      </div>
    </div>
  </div>
  <Tosat v-if="show" :massage="toastMessage" />
</template>
<script>
import { reactive, ref, watchEffect, toRefs } from "vue";
import { useRoute } from "vue-router";
import { post, del } from "../../utils/request";
import { useUserInfoEffect } from "../../utils/getUserInfo.js";
import Tosat, { useToastEffect } from "../../components/Toast.vue";
import Showtitle from "../../components/Showtitle.vue";

// 点击发表
const useeReleaseEffect = (illustrationid, showToast) => {
  const inputdata = ref("");
  const handleReleaseClick = async () => {
    if (inputdata.value === "") {
      showToast("内容不能为空！");
    } else {
      const res = await post("/api/comment", {
        illustrationid,
        content: inputdata.value,
      });
      inputdata.value = "";
      console.log(res);
      if (res?.errno === 0) {
        showToast("发表成功！");
        location.reload();
      } else {
        showToast("发表失败！请重试！");
      }
    }
  };

  return { inputdata, handleReleaseClick };
};

// 点赞
const useeLikeEffect = (id, showToast) => {
  const handleLikeClick = async (commentid, involve_id, userid) => {
    if (involve_id === userid) {
      showToast("不能点赞自己的评论！");
    } else {
      const res = await post("api/messages", {
        illustrationid: id,
        commentid,
        involve_id,
        type: 0,
      });
      location.reload();
    }
  };
  return { handleLikeClick };
};

export default {
  name: "Comment",
  props: ["data"],
  components: { Tosat, Showtitle },
  setup(props) {
    const route = useRoute();
    const id = route.params.id;

    // 获取用户信息
    const { userinfo } = useUserInfoEffect();

    const { show, toastMessage, showToast } = useToastEffect();

    // 点击发表
    const { inputdata, handleReleaseClick } = useeReleaseEffect(id, showToast);

    // 点赞功能
    const { handleLikeClick } = useeLikeEffect(id, showToast);

    // 获取组件的数据
    const { data } = toRefs(props);
    const datas = reactive({ comments: [] });
    watchEffect(() => {
      datas.comments = data.value.comments;
    });

    // 删除评论
    const handleDelClick = async (commentid, index) => {
      // const res = await del("/api/comment", {
      //   illustrationid: id,
      //   commentid,
      // });
      datas.comments.splice(index, 1);
      showToast("精彩评论已被删除！");
    };

    return {
      userinfo,
      inputdata,
      handleReleaseClick,
      show,
      toastMessage,
      handleLikeClick,
      handleDelClick,
      datas,
    };
  },
};
</script>
<style lang='scss' scoped>
@import "../../style/mixins.scss";

.main {
  margin-top: 0.2rem;
  // width: 100%;
  // height: 10rem;
  .commentbox {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 0.8rem;
    border-radius: 0.5rem;
    background: #241e1e;
    padding: 0 0.2rem 0 0.2rem;
    .userimg {
      width: 0.54rem;
      height: 0.54rem;
      border-radius: 0.5rem;
    }
  }
  .userinfo {
    margin-left: 0.1rem;
    flex: 1;
    height: 0.54rem;
    color: #fff;
    .username {
      color: #ffffff;
      font-weight: bold;
      font-size: 0.14rem;
      margin: 0 0 0.08rem 0.06rem;
    }
    .userinput {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.1rem 0 0.1rem;
      width: 100%;
      height: 0.28rem;
      border-radius: 0.5rem;
      background: #f8f8f8;
      .release {
        width: 0.18rem;
        height: 0.18rem;
        padding: 0.02rem;
        &--active {
          border-radius: 50%;
          background-color: rgb(24, 24, 46);
        }
      }
      input {
        flex: 1;
        height: 100%;
        font-weight: bold;
        font-size: 0.12rem;
        @include hideSearchStyle;
        ::placeholder {
          color: #3b7073;
        }
      }
    }
  }
  .commentare {
    margin-top: 0.3rem;
    &__content {
      display: flex;
      justify-content: space-between;
      padding: 0 0.15rem 0 0.15rem;
      margin-bottom: 0.2rem;
      &__title {
        color: #1f1d1d;
        font-weight: bold;
        font-size: 0.18rem;
      }
      &__count {
        color: #c8b3b3;
        font-weight: bold;
        font-size: 0.14rem;
      }
    }
  }
  .commentare__item {
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 0.1rem;
    padding: 0.1rem 0.1rem 0.28rem 0.1rem;
    width: 100%;
    border-radius: 0.1rem;
    background: #f1efef;
    .commentare__userimg {
      margin-right: 0.1rem;
      width: 0.38rem;
      height: 0.38rem;
      border-radius: 0.5rem;
    }
    .usercommentbox {
      width: 100%;
      display: flex;
      flex-direction: column;
      .usercomment__info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.02rem;
        padding-right: 0.1rem;
        width: 100%;
        &__name {
          font-weight: bold;
          font-size: 0.14rem;
        }
        &__praise {
          display: flex;
          align-items: center;
          .usercomment__like {
            margin-right: 0.02rem;
            &--active {
              color: rgb(202, 11, 11);
            }
          }
          .usercomment__praise {
            color: #5b5959;
            font-weight: bold;
            font-size: 0.12rem;
          }
        }
      }
      .usercomment__time {
        margin-bottom: 0.08rem;
        color: #b6b0b0;
        font-weight: bold;
        font-size: 0.1rem;
      }
      .usercomment__content {
        letter-spacing: 0.01rem;
        font-size: 0.12rem;
        line-height: 150%;
      }
    }
    &__del {
      position: absolute;
      bottom: 0.1rem;
      right: 0.2rem;
      font-size: 0.14rem;
    }
  }
}
</style>
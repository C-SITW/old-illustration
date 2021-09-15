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
            'topnav__collect--active': collection ? true : false,
          }"
        >
          &#xe603;
        </div>
      </div>
    </div>

    <img
      src="https://www.oldbookillustrations.com/wp-content/uploads/2020/10/water-cart.jpg"
      alt=""
      class="bg"
    />
    <div class="details">
      <div class="details__info">
        <div class="details__info__name">Water Cart</div>
        <div class="details__info__artistname">{{ artistname }}</div>
        <div class="details__info__book">{{ book }}</div>
      </div>
      <img class="download" src="../../assets/images/download.svg" />
    </div>
  </header>

  <div class="wrapper">
    <div class="introduce">
      <div class="introduce__translate">
        <div class="introduce__translate__cn introduce__translate--active">
          中
        </div>
        <div class="introduce__translate__en">英</div>
      </div>
    </div>
    <div class="title">
      {{ cn }}
    </div>
    <div class="comment-content">
      <div class="commentbox">
        <img src="../../assets/images/DefaultAvatar.jpeg" class="userimg" />
        <div class="userinfo">
          <div class="username">SITWZeze</div>
          <div class="userinput">
            <input
              v-model="inputdata"
              type="text"
              class="input"
              placeholder="发表评论吧！"
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
          <div class="commentare__content__count">02</div>
        </div>

        <div
          class="commentare__item"
          v-for="item in comments"
          :key="item.commentid"
        >
          <img :src="item.userimgurl" class="commentare__userimg" />
          <div class="usercommentbox">
            <div class="usercomment__info">
              <div class="usercomment__info__name">{{ item.username }}</div>
              <div class="usercomment__info__praise">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { reactive, toRefs, ref } from "vue";
import { get } from "../../utils/request";

export default {
  name: "",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;

    // const getIllustrationDetails = async () => {
    //   const res = await get(`api/illustration/${id}`);
    //   console.log(res);
    // };

    // getIllustrationDetails();

    const inputdata = ref("");

    const data = reactive({
      _id: "61270f5ef91206387c457189",
      artistid: "61270e9cf9c52a63e0e0fa53",
      artistname: "Potter, Beatrix",
      imgurl: "http://localhost:3000/images/illustrations/sew-them.jpg",
      name: "Mouse with Sewing Needle",
      book: "The tailor of Gloucester",
      cn: "一只棕色的老鼠一边看着观众一边穿针。",
      en: "A brown mouse is threading a needle while looking at the viewer.",
      collection: false,
      comments: [
        {
          commentid: "61273e29c1d75f3b0c53f8b3",
          userid: "61261b652eda9e6180bae2c1",
          userimgurl:
            "http://192.168.31.66:3000/images/useravatar/DefaultAvatar.jpeg",
          username: "zeze",
          content: "这老鼠看起来好可爱啊！！",
          createdAt: "2021/8/26 下午3:09:29",
          Total_likes: 1,
          userlike: false,
        },
        {
          commentid: "6128bacbfa170f699841c5a9",
          userid: "61261b652eda9e6180bae2c5",
          userimgurl:
            "http://localhost:3000/images/useravatar/DefaultAvatar.jpeg",
          username: "SITW",
          content: "这个老鼠拿着绣花针吗？哈哈哈！好傻！",
          createdAt: "2021/8/27 下午6:13:31",
          Total_likes: 1,
          userlike: true,
        },
        {
          commentid: "6128d31f0a77cf74e4e332ae",
          userid: "61262bc74b127e5e88c91821",
          userimgurl: "http://localhost:3000/images/useravatar/test.jpeg",
          username: "Alex",
          content: "我居然觉得老鼠也有点可爱哈哈哈！",
          createdAt: "2021/8/27 下午7:57:19",
          Total_likes: 0,
          userlike: false,
        },
      ],
    });

    // 点击返回
    const handleBackClick = () => {
      router.back();
    };

    const { cn, collection, artistname, name, book, comments } = toRefs(data);

    // 点击收藏
    const handlecollectClick = () => {
      data.collection = !data.collection;
    };

    // 点击发表
    const handleReleaseClick = () => {
      console.log(inputdata.value);
      inputdata.value = "";
    };

    return {
      inputdata,
      cn,
      collection,
      artistname,
      name,
      book,
      comments,
      handleBackClick,
      handlecollectClick,
      handleReleaseClick,
    };
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

.wrapper {
  box-sizing: border-box;
  padding: 0.15rem 0.2rem 0 0.2rem;
  position: fixed;
  top: 3.02rem;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgb(161, 152, 152);
  overflow-y: scroll;
  @include hideScrollbar;
}

.introduce {
  width: 100%;

  &__translate {
    width: 1rem;
    display: flex;
    &__cn,
    &__en {
      background: rgb(194, 177, 177);
      width: 0.5rem;
      line-height: 0.3rem;
      text-align: center;
      color: rgba(255, 245, 245, 1);
      font-weight: 500;
      font-size: 0.14rem;
    }
    &--active {
      background: rgba(226, 81, 81, 1);
    }
  }
}

.title {
  margin-top: 0.2rem;
  font-weight: 500;
  font-size: 0.16rem;
  text-indent: 1em;
  line-height: 0.28rem;
  border-bottom: 1px solid rgb(228, 228, 228);
  padding-bottom: 0.2rem;
}

.comment-content {
  margin-top: 0.2rem;
  width: 100%;
  height: 10rem;
  // background-color: rgb(168, 50, 50);
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
    box-sizing: border-box;
    display: flex;
    margin-bottom: 0.1rem;
    padding: 0.1rem;
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
  }
}
</style>
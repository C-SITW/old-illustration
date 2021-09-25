<template>
  <div class="tosat">{{ massage }}</div>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  name: "Tosat",
  props: ["massage"],
};

export const useToastEffect = () => {
  const todstData = reactive({
    show: false,
    toastMessage: "",
  });
  const showToast = (massage) => {
    todstData.show = true;
    todstData.toastMessage = massage;
    setTimeout(() => {
      todstData.show = false;
      todstData.toastMessage = "";
    }, 1500);
  };
  const { show, toastMessage } = toRefs(todstData);
  return { show, toastMessage, showToast };
};
</script>

<style lang='scss' scoped>
.tosat {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 0.05rem 0 0.05rem;
  border-radius: 0.1rem;
  background: rgb(34, 26, 26);
  font-weight: 500;
  text-align: center;
  font-size: 0.14rem;
  line-height: 0.3rem;
  color: #fff;
  z-index: 999999;
}
</style>
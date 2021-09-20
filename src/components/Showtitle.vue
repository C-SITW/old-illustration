<template>
  <div class="show">{{ title }}</div>
</template>
<script>
export default {
  name: "Showtitle",
  props: ["title"],
};
</script>
<style lang='scss' scoped>
.show {
  flex: 1;
  display: flex;
  justify-content: center;
  color: #818181;
  font-weight: bold;
  font-size: 0.15rem;
}
</style>
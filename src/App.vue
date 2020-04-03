<template>
  <div id="app">
    <!-- 缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      repair: {}
    };
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>

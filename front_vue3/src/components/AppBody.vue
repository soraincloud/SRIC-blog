<template>
  <body id="AppBody-background-style" :style="fire">
    <nav-menu @dochangefire="changeFire" @doChangeFilter="changeFilter" ref="changeProgress" />
    <div
    class="AppBody-allBody-div-style"
    :style="filter"
    >
      <router-view/>
    </div>

  </body>
</template>

<script>
  import appbody from "@/assets/js/AppBody.js"
  export default appbody
</script>

<style>
  @import '@/assets/css/AppBody.css';
</style>
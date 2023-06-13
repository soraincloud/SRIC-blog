<template>
  <body id="AppBody-background-style">
    <nav-menu/>
    <router-view/>
  </body>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
export default
{
  name: 'AppBody',
  components:{ NavMenu }
}
</script>

<style>
  @import '@/assets/css/AppBody.css';
</style>
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
body
{
  margin: 0;
}

#AppBody-background-style
{
  height: 100%;
  width: 100%;
  background: url("@/assets/images/background/AppBody-background.png");
  background-size: cover;
  position: fixed;
}
</style>
<template>
  <body id="AppBody-background-style" :style="fire">
    <nav-menu @dochangefire="changeFire" />
    <router-view/>
  </body>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import nightImage from '@/assets/images/background/night.jpg'
import lightImage from '@/assets/images/background/night-withlight.jpg'
let fireNow = 0;

export default
{
  name: 'AppBody',
  components:{ NavMenu },
  data()
  {
    return{
      fire: {backgroundImage: 'url(' + nightImage + ')'},
    }
  },
  methods:
  {
    changeFire()
    {
      console.log(fireNow)
      if(fireNow == 0)
      {
        this.fire = {backgroundImage: 'url(' + lightImage + ')'}
        fireNow = 1
      }
      else
      {
        this.fire = {backgroundImage: 'url(' + nightImage + ')'}
        fireNow = 0
      }
    }
  }
}
</script>

<style>
  @import '@/assets/css/AppBody.css';
</style>
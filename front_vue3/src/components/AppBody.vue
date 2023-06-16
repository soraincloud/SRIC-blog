<template>
  <body id="AppBody-background-style" :style="fire">
    <nav-menu @dochangefire="changeFire" @doChangeFilter="changeFilter" />
    <div class="AppBody-allBody-div-style" :style="filter">
      <router-view/>
    </div>

  </body>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'
import nightImage from '@/assets/images/background/night.jpg'
import lightImage from '@/assets/images/background/night-withlight.jpg'
let fireNow = 0;
let filterNumber = 0;

export default
{
  name: 'AppBody',
  components:{ NavMenu },
  data()
  {
    return{
      fire: {backgroundImage: 'url(' + nightImage + ')'},
      filter: "backdrop-filter: blur(" + filterNumber + "px)",
    }
  },
  methods:
  {
    changeFire()
    {
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
    },
    changeFilter()
    {
      if(filterNumber >= 9)
      {
        filterNumber = 0
      }
      else
      {
        filterNumber += 3
      }
      this.filter = "backdrop-filter: blur(" + filterNumber + "px)"
    },
  }
}
</script>

<style>
  @import '@/assets/css/AppBody.css';
</style>
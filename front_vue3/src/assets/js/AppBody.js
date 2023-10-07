import NavMenu from '@/components/common/NavMenu'
import nightImage from '@/assets/webp/background/night.webp'
import lightImage from '@/assets/webp/background/night-withlight.webp'
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
      this.$refs.changeProgress.progressData = filterNumber / 3 * 33
    },
  }
}
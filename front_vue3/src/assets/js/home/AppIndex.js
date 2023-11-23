import AsideMessage from '@/components/common/AsideMessage'
import IndexHead from '@/components/home/IndexHead'
import IndexUsed from '@/components/home/IndexUsed'
import IndexAbout from '@/components/home/IndexAbout'
import IndexTime from '@/components/home/IndexTime'
import IndexAside from '@/components/home/IndexAside'
import { visitPage } from '@/axios/api/visitApi'

let isMore = 0;

export default
{
    name: 'AppIndex',
    components: { AsideMessage,IndexHead,IndexUsed,IndexAbout,IndexTime,IndexAside },
    data()
    {
        return{
            backTop: require('@/assets/webp/background/backTop.webp'),
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px',
            data: 0,
            bottomData: 'bottom: ' + (window.innerHeight + 100) + 'px',
            loading: true,
        }
    },
    mounted()
    {
        visitPage({ page: "index" })
        window.onresize = () => 
        {
            this.indexHeight = (window.innerHeight - 70) + 'px'
            this.asideHeight = (window.innerHeight - 70) + 'px'
        }
    },
    methods:
    {
        over(i)
        {
            this.$refs.aside.changeBackground(i)
        },
        backToTop()
        {
            this.$refs.indexScroll.scrollTo({top: 0, behavior: 'smooth'})
            this.bottomData = 'bottom: ' + (window.innerHeight + 100) + 'px'
        },
        handleScroll(e)
        {
            this.data = e.scrollTop
            if(this.data > 300 && isMore == 0)
            {
                this.bottomData = 'bottom: 75px'
                isMore = 1
            }
            if(this.data < 300)
            {
                this.bottomData = 'bottom: ' + (window.innerHeight + 100) + 'px'
                isMore = 0;
            }
        },
    },
    created()
    {
        
    }
}
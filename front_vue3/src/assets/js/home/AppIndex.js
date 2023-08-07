import AsideMessage from '@/components/common/AsideMessage'
import IndexHead from '@/components/home/IndexHead'
import IndexUsed from '@/components/home/IndexUsed'
import IndexAbout from '@/components/home/IndexAbout'
import IndexTime from '@/components/home/IndexTime'
import IndexAside from '@/components/home/IndexAside'

export default
{
    name: 'AppIndex',
    components: { AsideMessage,IndexHead,IndexUsed,IndexAbout,IndexTime,IndexAside },
    data()
    {
        return{
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px',
        }
    },
    mounted()
    {
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
        }
    }
}
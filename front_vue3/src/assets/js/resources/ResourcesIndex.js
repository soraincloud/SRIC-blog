import AsideMessage from '@/components/common/AsideMessage'
import ResourcesCard from '@/components/resources/ResourcesCard'
import ResourcesAside from '@/components/resources/ResourcesAside'
import { getResourcesListByCategory } from '@/axios/api/resourcesApi'
import { visitPage } from '@/axios/api/visitApi'

let isMore = 0;

export default
{
    name:'ResourcesIndex',
    components: { AsideMessage,ResourcesCard,ResourcesAside },
    data()
    {
        return{
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px',
            categoryHeight: (window.innerHeight - 70) + 'px',
            backTop: require('@/assets/webp/background/backTop.webp'),
            data: 0,
            bottomData: 'bottom: ' + (window.innerHeight + 100) + 'px',
            loading: true,
        }
    },
    mounted()
    {
        visitPage({ page: "resources" })
        window.onresize = () => 
        {
            this.indexHeight = (window.innerHeight - 70) + 'px'
            this.asideHeight = (window.innerHeight - 70) + 'px'
            this.categoryHeight = (window.innerHeight - 70) + 'px'
        }
    },
    methods:
    {
        loadAllResources()
        {
            this.$refs.loadAllResourcesToCard.loadResources()
        },
        loadResourcesByCategory()
        {
            var _this = this
            var categoryNeed = this.$refs.getCategory.categoryNeed
            getResourcesListByCategory({ category: categoryNeed }).then(function(resp){
                    _this.$refs.loadAllResourcesToCard.resources = resp.data
            })
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
    }
}
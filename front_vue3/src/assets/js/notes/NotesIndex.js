import AsideMessage from '@/components/common/AsideMessage'
import NotesCard from '@/components/notes/NotesCard'
import NotesAside from '@/components/notes/NotesAside'

let isMore = 0;

export default
{
    name:'NotesIndex',
    components: { AsideMessage,NotesCard,NotesAside },
    data()
    {
        return{
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px',
            categoryHeight: (window.innerHeight - 70) + 'px',
            backTop: require('@/assets/images/background/backTop.png'),
            data: 0,
            bottomData: 'bottom: ' + (window.innerHeight + 100) + 'px',
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.indexHeight = (window.innerHeight - 70) + 'px'
            this.asideHeight = (window.innerHeight - 70) + 'px'
            this.categoryHeight = (window.innerHeight - 70) + 'px'
        }
    },
    methods:
    {
        loadAllNotes()
        {
            this.$refs.loadAllNotesToCard.loadNotes()
        },
        loadNotesByCategory()
        {
            var _this = this
            var categoryNeed = this.$refs.getCategory.categoryNeed
            this.$axios
            .get('/notesListByCategory',{ params:{ category: categoryNeed } })
            .then(resp => 
            {
                if (resp && resp.status === 200)
                {
                    _this.$refs.loadAllNotesToCard.notes = resp.data
                }
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
import AsideMessage from '@/components/common/AsideMessage'
import { useDark } from '@vueuse/core'
import { getNoteById } from '@/axios/api/notesApi'

const isDark = useDark()

let isMore = 0;

export default
{
    name: 'NotesShow',
    components: { AsideMessage },
    data()
    {
        return{
            describeHeight: (window.innerHeight - 70) + 'px',
            indexHeight: (window.innerHeight - 70) + 'px',
            asideHeight: (window.innerHeight - 70) + 'px',
            backgrounds: '',
            describeBackgrounds: '',
            noteTitle: '',
            noteDescription: '',
            noteVisited: '',
            markdownText: require('@/assets/md/NULL.md'),
            backTop: require('@/assets/webp/background/backTop.webp'),
            data: 0,
            bottomData: 'bottom: ' + (window.innerHeight + 100) + 'px',
        }
    },
    methods:
    {
        over()
        {
            if(isDark.value == true)
            {
                this.backgrounds = "background: rgba(0,0,0,0.85);"
            }
            else
            {
                this.backgrounds = "background: rgba(255,255,255,0.85);"
            }
        },
        leave()
        {
            this.backgrounds = ''
        },
        describeOver()
        {
            if(isDark.value == true)
            {
                this.describeBackgrounds = "background: rgba(0,0,0,0.85);"
            }
            else
            {
                this.describeBackgrounds = "background: rgba(255,255,255,0.85);"
            }
        },
        describeLeave()
        {
            this.describeBackgrounds = ''
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
    mounted()
    {
        window.onresize = () => 
        {
            this.indexHeight = (window.innerHeight - 70) + 'px'
            this.asideHeight = (window.innerHeight - 70) + 'px'
            this.describeHeight = (window.innerHeight - 70) + 'px'
        }
    },
    created()
    {
        var _this = this
        getNoteById({ id: localStorage.getItem('noteId') }).then(function(resp){
            _this.noteTitle = resp.data.title
            _this.noteDescription = resp.data.description
            _this.noteVisited = resp.data.visited
            _this.markdownText = require('@/assets/md/' + resp.data.md)
        })
    },
}
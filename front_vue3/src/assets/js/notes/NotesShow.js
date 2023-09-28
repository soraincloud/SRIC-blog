import AsideMessage from '@/components/common/AsideMessage'
import { useDark } from '@vueuse/core'

const isDark = useDark()

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
            markdownText: require('@/assets/md/C001-二叉树.md')
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
        this.$axios
        .get('/getNoteById',{ params:{ id: localStorage.getItem('noteId') } })
        .then(resp =>
            {
                console.log(resp.data.title)
                _this.noteTitle = resp.data.title
                _this.noteDescription = resp.data.description
                _this.noteVisited = resp.data.visited
            }
        )
        console.log(this.markdownText)
    },
}
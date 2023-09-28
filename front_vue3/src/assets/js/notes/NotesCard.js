import { useDark } from '@vueuse/core'
import { Histogram } from '@element-plus/icons-vue'

const isDark = useDark()
export default
{
    name:'NotesCard',
    components: { Histogram },
    data()
    {
        return{
            notes:[]
        }
    },
    methods:
    {
        over(i)
        {
            if(isDark.value == true)
            {
                this.notes[i].backgrounds = "background: rgba(0,0,0,0.85);"
            }
            else
            {
                this.notes[i].backgrounds = "background: rgba(255,255,255,0.85);"
            }
        },
        leave(i)
        {
            this.notes[i].backgrounds = ""
        },
        clickCard(i)
        {
            localStorage.setItem('noteId',this.notes[i].id)
            this.$router.push('/notesShow')
        },
        loadNotes()
        {
            var _this = this
            this.$axios
            .get('/notesList')
            .then(resp => 
            {
                if (resp && resp.status === 200)
                {
                    _this.notes = resp.data
                }
            })
        }
    },
    mounted:function()
    {
        this.loadNotes()
    },
}
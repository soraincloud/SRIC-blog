import { useDark } from '@vueuse/core'
import { getNotesList } from '@/axios/api/notesApi'

const isDark = useDark()
export default
{
    name:'NotesCard',
    data()
    {
        return{
            notes:[],
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
            localStorage.setItem('noteMd',this.notes[i].md)
            this.$router.push('/notesShow')
        },
        loadNotes()
        {
            var _this = this
            getNotesList().then(function(resp){
                _this.notes = resp.data
                _this.$emit('isLoading',false)
            })
        },
    },
    mounted:function()
    {
        this.loadNotes()
    },
}
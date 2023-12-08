import { getAllNotesCategory,getNotesList,getNoteListByCategory } from '@/axios/api/notesApi'
import { useDark } from '@vueuse/core'

const isDark = useDark()
export default
{
    name: 'ManageIndex',
    data() {
        return {
            loading: true,
            bodyHeight: "height:" + (window.innerHeight - 80) + "px;",
            scrollCardHeight: (window.innerHeight - 110),
            back0: '',
            category:
            [
                {
                    id: 0,
                    content: "全部",
                    icon: "Menu",
                },
                {
                    id: -1,
                    content: "未分类",
                    icon: "QuestionFilled",
                },
            ],
            notes:[],
        }
    },
    methods:
    {
        mouseOver(i)
        {
            console.log(i)
            if(i == 0)
            {
                this.back0 = 'background: rgba(0,0,0,0);'
            }
            else if(i == 1)
            {
                this.back1 = 'background: rgba(0,0,0,0);'
            }
        },
        mouseLeave(i)
        {
            if(i == 0)
            {
                this.back0 = ''
            }
            else if(i == 1)
            {
                this.back1 = ''
            }
        },
        over(i)
        {
            if(isDark.value == true)
            {
                this.category[i].backgrounds = "background: #ff7f7f"
            }
            else
            {
                this.category[i].backgrounds = "background: #ffcccc"
            }
        },
        leave(i)
        {
            this.category[i].backgrounds = ''
        },
        cardOver(i)
        {
            this.notes[i].backgrounds = "background: rgba(255,255,255,0);"
        },
        cardLeave(i)
        {
            this.notes[i].backgrounds = ""
        },
        choose(i)
        {
            this.loading = true
            var _this = this
            if(this.category[i].id == 0)
            {
                getNotesList().then(function(resp){
                    _this.notes = resp.data
                    _this.loading = false
                })
            }
            else
            {
                getNoteListByCategory({ category: this.category[i].id }).then(function(resp){
                    _this.notes = resp.data
                    _this.loading = false
                })
            }
        },
    },
    created()
    {
        var _this = this
        getAllNotesCategory().then(function(resp){
            for(let i = 0;i < resp.data.length;i++)
            {
                _this.category.push(resp.data[i])
            }
        })
        getNotesList().then(function(resp){
            _this.notes = resp.data
            _this.loading = false
        })
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = "height:" + (window.innerHeight - 80) + "px;"
        }
    },
}
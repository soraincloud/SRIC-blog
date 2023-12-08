import { getAllNotesCategory,getNotesList,getNoteListByCategory,deleteNoteById } from '@/axios/api/notesApi'
import { useDark } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'ManageIndex',
    data() {
        return {
            loading: true,
            bodyHeight: "height:" + (window.innerHeight - 80) + "px;",
            scrollCardHeight: (window.innerHeight - 150),
            back0: '',
            deleteTitle: t('common.deleteSure'),
            deleteOk: t('common.apply'),
            deleteCancel: t('common.cancel'),
            placeholderText: t('common.search'),
            showLeft: '',
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
            search: '',
        }
    },
    methods:
    {
        loadNotes()
        {
            var _this = this
            getNotesList().then(function(resp){
                _this.notes = resp.data
                _this.loading = false
            })
        },
        mouseOver(i)
        {
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
                this.loadNotes()
            }
            else
            {
                getNoteListByCategory({ category: this.category[i].id }).then(function(resp){
                    _this.notes = resp.data
                    _this.loading = false
                })
            }
        },
        deleteConfirm(i)
        {
            this.loading = true
            var _this = this
            deleteNoteById({ id: this.notes[i].id }).then(function(resp){
                _this.$message.success({message: t('message.deleteSuccess'),}),
                _this.loadNotes()
            })
        },
        clickEdit(i)
        {

        },
        clickSearch()
        {

        },
        clickAdd()
        {

        },
        clickRefresh()
        {
            this.loading = true
            this.loadNotes()
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
        this.loadNotes()
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = "height:" + (window.innerHeight - 80) + "px;"
            this.scrollCardHeight = (window.innerHeight - 150)
        }
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.deleteTitle = t('common.deleteSure')
            this.deleteOk = t('common.apply')
            this.deleteCancel = t('common.cancel')
            this.placeholderText = t('common.search')
        }
    },
}
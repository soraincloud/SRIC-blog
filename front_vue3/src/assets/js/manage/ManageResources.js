import { getAllResourcesCategory,getResourcesList,getResourcesListByCategory,deleteResourceById,getResourcesByText,addResource,updateResource } from '@/axios/api/resourcesApi'
import { getAllUsername } from '@/axios/api/userApi'
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
            updateBodyHeight: (window.innerHeight - 110),
            back0: '',
            deleteTitle: t('common.deleteSure'),
            deleteOk: t('common.apply'),
            deleteCancel: t('common.cancel'),
            placeholderText: t('common.search'),
            outDivHeight: 'height: ' + (window.innerHeight) + 'px;',
            showLeft: 'left: 0px;',
            updateLeft: 'left: ' + (window.innerWidth + 1000) + 'px;',
            editLeft: 'left: ' + (window.innerWidth + 1000) + 'px;',
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
            resources:[],
            search: '',
            inputBackgrounds: '',
            input: 
            {
                id: '',
                title: '',
                description: '',
                category: '',
                tag: '',
                file: '',
                visited: '',
                username: '',
                date: '',
            },
            rules:
            {
                title: [{required: true, message: 'NOT NULL'}],
                description: [{required: true, message: 'NOT NULL'}],
                category: [{required: true, message: 'NOT NULL'}],
                tag: [{required: true, message: 'NOT NULL'}],
                file: [{required: true, message: 'NOT NULL'}],
                visited: 
                [
                    {required: true, message: 'NOT NULL'},
                    {type: 'number', message: 'NEEDS NUMBER', trigger: 'blur', transform: (value) => Number(value)}
                ],
                username: [{required: true, message: 'NOT NULL'}],
                date: [{required: true, message: 'NOT NULL'}],
            },
            label:
            {
                title: t('notes.title'),
                description: t('notes.description'),
                category: t('notes.category'),
                tag: t('notes.tag'),
                file: t('notes.md'),
                visited: t('notes.visited'),
                username: t('notes.username'),
                date: t('notes.date'),
            },
            isUpdate: true,
            updateText: '',
            user: [],
            formBackground: 'background: rgba(0,0,0,0);',
            isSubmit: false,
        }
    },
    methods:
    {
        loadResources()
        {
            var _this = this
            getResourcesList().then(function(resp){
                _this.resources = resp.data
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
            this.resources[i].backgrounds = "background: rgba(255,255,255,0);"
        },
        cardLeave(i)
        {
            this.resources[i].backgrounds = ""
        },
        updateCardOver()
        {
            this.inputBackgrounds = "background: rgba(255,255,255,0);"
        },
        updateCardLeave()
        {
            this.inputBackgrounds = ""
        },
        formOver()
        {
            if(isDark.value == true)
            {
                this.formBackground = "background: rgba(0,0,0,0.5)"
            }
            else
            {
                this.formBackground = "background: rgba(255,255,255,0.5)"
            }
        },
        formLeave()
        {
            this.formBackground = "background: rgba(0,0,0,0)"
        },
        choose(i)
        {
            this.loading = true
            var _this = this
            if(this.category[i].id == 0)
            {
                this.loadResources()
            }
            else
            {
                getResourcesListByCategory({ category: this.category[i].id }).then(function(resp){
                    _this.resources = resp.data
                    _this.loading = false
                })
            }
        },
        deleteConfirm(i)
        {
            this.loading = true
            var _this = this
            deleteResourceById({ id: this.resources[i].id }).then(function(resp){
                _this.$message.success({message: t('message.deleteSuccess'),}),
                _this.loadResources()
            })
        },
        clickUpdate(i)
        {
            this.isUpdate = true
            this.updateText = t('common.edit')
            this.showLeft = 'left: ' + (-(window.innerWidth + 1000)) + 'px;'
            this.updateLeft = 'left: 0px;'
            this.input = 
            {
                id: this.resources[i].id,
                title: this.resources[i].title,
                description: this.resources[i].description,
                category: this.resources[i].category,
                tag: this.resources[i].tag,
                file: this.resources[i].file,
                visited: this.resources[i].visited,
                username: this.resources[i].username,
                date: this.resources[i].date,
            }
        },
        clickSearch()
        {
            this.loading = true
            var _this = this
            getResourcesByText({ text: this.search }).then(function(resp){
                _this.resources = resp.data
                _this.loading = false
            })
        },
        clickAdd()
        {
            this.isUpdate = false
            this.updateText = t('common.add')
            this.showLeft = 'left: ' + (-(window.innerWidth + 1000)) + 'px;'
            this.updateLeft = 'left: 0px;'
            this.input = 
            {
                id: '',
                title: '',
                description: '',
                category: -1,
                tag: '',
                file: '',
                visited: 0,
                username: '',
                date: '',
            }
        },
        clickRefresh()
        {
            this.loading = true
            this.loadResources()
        },
        clickEditFile()
        {
            this.updateLeft = 'left: ' + (-(window.innerWidth + 1000)) + 'px;'
            this.editLeft = 'left: 0px;'
        },
        clickCancelUpdate()
        {
            this.showLeft = 'left: 0px;'
            this.updateLeft = 'left: ' + (window.innerWidth + 1000) + 'px;'
        },
        clickSubmit()
        {
            this.isSubmit = true
        },
        clickApply()
        {
            this.$refs['form'].validate((valid) => {
                if(valid)
                {
                    var _this = this
                    if(this.isUpdate == true)
                    {
                        updateResource(this.input).then(function(resp){
                            _this.$message.success({message: t('message.applySuccess'),})
                            _this.loadResources()
                            _this.showLeft = 'left: 0px;'
                            _this.updateLeft = 'left: ' + (window.innerWidth + 1000) + 'px;'
                            _this.isSubmit = false
                        })
                    }
                    else
                    {
                        addResource(this.input).then(function(resp){
                            _this.$message.success({message: t('message.applySuccess'),})
                            _this.loadResources()
                            _this.showLeft = 'left: 0px;'
                            _this.updateLeft = 'left: ' + (window.innerWidth + 1000) + 'px;'
                            _this.isSubmit = false
                        })
                    }
                }
                else
                {
                    return
                }
            })
        },
        clickCancel()
        {
            this.isSubmit = false
        },
    },
    created()
    {
        var _this = this
        getAllResourcesCategory().then(function(resp){
            for(let i = 0;i < resp.data.length;i++)
            {
                _this.category.push(resp.data[i])
            }
        })
        getAllUsername().then(function(resp){
            _this.user = resp.data
        })
        this.loadResources()
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = "height:" + (window.innerHeight - 80) + "px;"
            this.scrollCardHeight = (window.innerHeight - 150)
            this.updateBodyHeight = (window.innerHeight - 110)
            this.outDivHeight = 'height: ' + (window.innerHeight) + 'px;'
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
            this.label.title = t('notes.title')
            this.label.description = t('notes.description')
            this.label.category = t('notes.category')
            this.label.file = t('notes.md')
            this.label.visited = t('notes.visited')
            this.label.username = t('notes.username')
            this.label.date = t('notes.date')
        }
    },
}
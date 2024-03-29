import { getAllResourcesCategory,addResourcesCategory,updateResourcesCategoryById,deleteResourcesCategoryById } from '@/axios/api/resourcesApi'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'ManageNotesCategory',
    data()
    {
        return{
            loading: false,
            bodyHeight: (window.innerHeight - 60),
            active0: '',
            active1: '',
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
            textLabel: t('common.text'),
            iconLabel: t('common.icon'),
            input:
            {
                id: '',
                content: '',
                icon: '',
            },
            icons: [],
            selectPlaceholderText: t('common.select'),
            isAdd: false,
            isEdit:false,
            isDelete: false,
            isEditApply: false,
            isDeleteApply: false,
            isCancel: false,
            showText: '',
            addBackgrounds: 'background: #ff7f7f',
            rules:
            {
                content: [{required: true, message: 'NOT NULL'}],
                icon: [{required: true, message: 'NOT NULL'}],
            },
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70)
        }
    },
    methods:
    {
        mouseOver(i)
        {
            if(isDark.value == true)
            {
                if(i == 0)
                {
                    this.active0 = 'background: rgba(0,0,0,0);'
                }
                else if(i == 1)
                {
                    this.active1 = 'background: rgba(0,0,0,0);'
                }
            }
            else
            {
                if(i == 0)
                {
                    this.active0 = 'background: rgba(255,255,255,0);'
                }
                else if(i == 1)
                {
                    this.active1 = 'background: rgba(255,255,255,0);'
                }
            }
        },
        mouseLeave(i)
        {
            if(i == 0)
            {
                this.active0 = ''
            }
            else if(i == 1)
            {
                this.active1 = ''
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
        choose(i)
        {
            if(i == 0 || i == 1)
            {
                this.$message.error({message: t('message.notDefaultChange'),})
                return
            }
            this.input.id = this.category[i].id
            this.input.content = this.category[i].content
            this.input.icon = this.category[i].icon
            this.isEdit = true
            this.isDelete = true
            this.isAdd = false
            this.isEditApply = false
            this.isDeleteApply = false
            this.isCancel = false
            this.showText = ''
        },
        clickAdd()
        {
            this.isAdd = true
            this.isEdit = false
            this.isDelete = false
            this.isEditApply = false
            this.isDeleteApply = false
            this.isCancel = false
            this.showText = ''
            this.input = 
            {
                id: '',
                content: '',
                icon: '',
            }
        },
        add()
        {
            this.$refs['form'].validate((valid) => {
                if(valid)
                {
                    var _this = this
                    addResourcesCategory({ content: this.input.content,icon: this.input.icon }).then(function(resp){
                        _this.isAdd = false
                        _this.refresh()
                        _this.$message.success({message: t('message.applySuccess'),})
                        _this.input = 
                        {
                            id: '',
                            content: '',
                            icon: '',
                        }
                    })
                }
                else
                {
                    this.$message.error({message: t('message.notNullError'),})
                    return
                }
            })
        },
        clickEdit()
        {
            this.isEdit = false
            this.isDelete = false
            this.isEditApply = true
            this.isCancel = true
            this.showText = t('common.applyText')
        },
        editApply()
        {
            this.$refs['form'].validate((valid) => {
                if(valid)
                {
                    var _this = this
                    updateResourcesCategoryById({ id: this.input.id,content: this.input.content,icon: this.input.icon }).then(function(resp){
                        _this.isEditApply = false
                        _this.isCancel = false
                        _this.showText = ''
                        _this.refresh()
                        _this.$message.success({message: t('message.applySuccess'),})
                        _this.input = 
                        {
                            id: '',
                            content: '',
                            icon: '',
                        }
                    })
                }
                else
                {
                    this.$message.error({message: t('message.notNullError'),})
                    return
                }
            })
        },
        clickDelete()
        {
            this.isEdit = false
            this.isDelete = false
            this.isDeleteApply = true
            this.isCancel = true
            this.showText = t('common.deleteSure')
        },
        deleteApply()
        {
            this.$refs['form'].validate((valid) => {
                if(valid)
                {
                    var _this = this
                    deleteResourcesCategoryById({ id: this.input.id }).then(function(resp){
                        _this.isDeleteApply = false
                        _this.isCancel = false
                        _this.showText = ''
                        _this.refresh()
                        _this.$message.success({message: t('message.deleteSuccess'),})
                        _this.input = 
                        {
                            id: '',
                            content: '',
                            icon: '',
                        }
                    })
                }
                else
                {
                    this.$message.error({message: t('message.notNullError'),})
                    return
                }
            })
        },
        cancel()
        {
            this.isEditApply = false
            this.isDeleteApply = false
            this.isCancel = false
            this.isAdd = false
            this.isEdit = true
            this.isDelete = true
            this.showText = ''
        },
        addOver()
        {
            this.addBackgrounds = "background: #ff5f5f"
        },
        addLeave()
        {
            this.addBackgrounds = 'background: #ff7f7f'
        },
        refresh()
        {
            this.category = 
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
            ]
            var _this = this
            getAllResourcesCategory().then(function(resp){
                for(let i = 0;i < resp.data.length;i++)
                {
                    _this.category.push(resp.data[i])
                }
            })
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
        for (const [key] of Object.entries(ElementPlusIconsVue)) 
        {
            this.icons.push({
                icon: key,
            })
        }
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.category[0].content = t('notes.all')
            this.category[1].content = t('notes.none')
            this.textLabel = t('common.text')
            this.iconLabel = t('common.icon')
            this.selectPlaceholderText = t('common.select')
        }
    },
}
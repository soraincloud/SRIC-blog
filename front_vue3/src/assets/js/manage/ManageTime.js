import { getIndexTimeList,updateTimeById,deleteTimeById,getTimeByText,getTimeByTime,getTimeByYear,addIndexTime } from "@/axios/api/homeApi"
import { getDictElColorType } from "@/axios/api/dictApi"
import { useDark } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
let isMore = 0;
export default
{
    name: 'ManageTime',
    data()
    {
        return{
            loading: true,
            bodyHeight: (window.innerHeight - 60),
            timeline: [],
            active: '',
            margin: 'margin-top: 50px;',
            timelineCard: [],
            options: [],
            deleteTitle: t('common.deleteSure'),
            deleteOk: t('common.apply'),
            deleteCancel: t('common.cancel'),
            select: '',
            selectPlaceholderText: t('common.select'),
            placeholderText: t('common.search'),
            labelText: t('common.text'),
            labelTime: t('common.time') + " (YY-MM-DD)",
            labelYears: t('common.years'),
            search: '',
            addShow: false,
            addType: '',
            addColor: '#909399',
            addHeight: 'height: 0px;',
            addText: '',
            rules:
            {
                content: [{required: true, message: 'NOT NULL'}],
                timestamp: [{required: true, message: 'NOT NULL'}],
            },
            addForm: 
            {
                content: '',
                timestamp: '',
            },
            scrollShow: 'right: -50px;',
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70)
        }
    },
    created()
    {
        var _this = this
        getDictElColorType().then(function(resp){
            _this.options = resp.data
        })
        getIndexTimeList().then(function(resp){
            _this.timeline = resp.data
            for(let i = 0;i < resp.data.length;i++)
            {
                _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
            }
            _this.loading = false
        })
    },
    methods:
    {
        mouseOver()
        {
            if(isDark.value == true)
            {
                this.active = 'background: rgba(0,0,0,0.5);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.5)'
            }
        },
        mouseLeave()
        {
            this.active = ''
        },
        clickEdit(i)
        {
            if(this.timelineCard[i].open == false)
            {
                var divHeight = document.getElementById("manageTime-card-div-id").offsetHeight
                this.timelineCard[i].height = 'height: ' + (divHeight + 20) + 'px;'
                this.timelineCard[i].open = true
            }
            else
            {
                this.timelineCard[i].height = 'height: ' + 0 + 'px;'
                this.timelineCard[i].open = false
            }
        },
        clickSubmit(i)
        {
            this.timelineCard[i].submit = true
        },
        clickApply(i)
        {
            this.$refs['editForm'][i].validate((valid) => {
                if(valid)
                {
                    updateTimeById(this.timeline[i]).then(
                        this.$message.success({message: t('message.applySuccess'),}),
                        this.timelineCard[i].submit = false,
                        this.timelineCard[i].open = false,
                        this.timelineCard[i].height = 'height: ' + 0 + 'px;',
                    )
                }
                else
                {
                    this.$message.error({message: t('message.notNullError'),})
                    return
                }
            })
        },
        clickCancel(i)
        {
            this.timelineCard[i].submit = false
        },
        deleteConfirm(i)
        {
            deleteTimeById({ id: this.timeline[i].id }).then(
                this.timeline.splice(i,1),
                this.$message.success({message: t('message.deleteSuccess'),}),
            )
        },
        clickSearch()
        {
            var _this = this
            if(this.select == 1)
            {
                getTimeByTime({ time: this.search }).then(function(resp){
                    _this.timeline = resp.data
                    _this.timelineCard = {}
                    for(let i = 0;i < resp.data.length;i++)
                    {
                        _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
                    }
                })
            }
            else if(this.select == 2)
            {
                getTimeByYear({ year: this.search }).then(function(resp){
                    _this.timeline = resp.data
                    _this.timelineCard = {}
                    for(let i = 0;i < resp.data.length;i++)
                    {
                        _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
                    }
                })
            }
            else
            {
                getTimeByText({ text: this.search }).then(function(resp){
                    _this.timeline = resp.data
                    _this.timelineCard = {}
                    for(let i = 0;i < resp.data.length;i++)
                    {
                        _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
                    }
                })
            }
        },
        clickAdd()
        {
            this.addShow = true
            this.addText = ''
            setTimeout( () => { 
                var divHeight = document.getElementById("add-card-div-id").offsetHeight
                this.addHeight = 'height: ' + (divHeight + 20) + 'px;'
             },100)
        },
        clickRefresh()
        {
            this.addShow = false
            this.addForm = 
            {
                content: '',
                timestamp: '',
            }
            this.addType = ''
            this.addColor = '#909399'
            this.addHeight = 'height: 0px;'
            this.addText = ''
            var _this = this
            _this.loading = true
            getIndexTimeList().then(function(resp){
                _this.timeline = resp.data
                for(let i = 0;i < resp.data.length;i++)
                {
                    _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
                }
                _this.loading = false
            })
        },
        addApply()
        {
            this.$refs['addForm'].validate((valid) => {
                if(valid)
                {
                    var _this = this
                    addIndexTime({ content: this.addForm.content,timestamp: this.addForm.timestamp,type: this.addType,color: this.addColor }).then(function(resp){
                        _this.timeline[_this.timeline.length] = {
                            id: resp.data.id,
                            content: _this.addForm.content,
                            timestamp: _this.addForm.timestamp,
                            type: _this.addType,
                            color: _this.addColor,
                        },
                        _this.timelineCard[_this.timelineCard.length] = { height: 'height: 0px;',submit: false,open: false },
                        _this.addForm.content = '',
                        _this.addForm.timestamp = '',
                        _this.addType = '',
                        _this.addColor = '#909399',
                        _this.addHeight = 'height: 0px;',
                        _this.addShow = false,
                        _this.$refs.scrollbar.scrollTo({top: document.getElementById("manageTime-scrollbar").offsetHeight, behavior: 'smooth'}),
                        _this.$message.success({message: t('message.applySuccess'),})
                    })
                }
                else
                {
                    this.$message.error({message: t('message.notNullError'),})
                    return
                }
            })
        },
        addCancel()
        {
            this.addHeight = 'height: 0px;'
            this.addText = 'color: #909399;'
            this.addType = ''
            this.addColor = '#909399'
        },
        clickBackTop()
        {
            this.$refs.scrollbar.scrollTo({top: 0, behavior: 'smooth'})
        },
        handleScroll(e)
        {
            this.data = e.scrollTop
            if(this.data > 300 && isMore == 0)
            {
                this.scrollShow = 'right: 20px;'
                isMore = 1
            }
            if(this.data < 300)
            {
                this.scrollShow = 'right: -50px;'
                isMore = 0;
            }
        },
    },
    watch:
    {
        '$i18n.locale'(newValue)
        {
            this.deleteTitle = t('common.deleteSure')
            this.deleteOk = t('common.apply')
            this.deleteCancel = t('common.cancel')
            this.selectPlaceholderText = t('common.select')
            this.placeholderText = t('common.search')
            this.labelText = t('common.text')
            this.labelTime = t('common.time') + " (YY-MM-DD)"
            this.labelYears = t('common.years')
        }
    },
}
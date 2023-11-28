import { getIndexTimeList,updateTimeById,deleteTimeById,getTimeByText,getTimeByTime,getTimeByYear,addIndexTime } from "@/axios/api/homeApi"
import { getDictElColorType } from "@/axios/api/dictApi"
import { useDark } from '@vueuse/core'
import i18n from '@/language'

const { t } = i18n.global
const isDark = useDark()
export default
{
    name: 'ManageTime',
    data()
    {
        return{
            loading: true,
            bodyHeight: (window.innerHeight - 60) + 'px',
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
            addTimestamp: '',
            addType: '',
            addColor: '#909399',
            addContent: '',
            addHeight: 'height: 0px;',
            addText: '',
            rules:
            {
                text: [{required: true, message: 'NOT NULL'}],
                time: [{required: true, message: 'NOT NULL'}],
            },
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70) + 'px'
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
                this.active = 'background: rgba(0,0,0,0.3);'
            }
            else
            {
                this.active = 'background: rgba(255,255,255,0.3)'
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
            updateTimeById(this.timeline[i]).then(
                this.$message.success({message: t('common.applySuccess'),}),
                this.timelineCard[i].submit = false,
                this.timelineCard[i].open = false,
                this.timelineCard[i].height = 'height: ' + 0 + 'px;',
            )
        },
        clickCancel(i)
        {
            this.timelineCard[i].submit = false
        },
        deleteConfirm(i)
        {
            deleteTimeById({ id: this.timeline[i].id }).then(
                this.timeline.splice(i,1),
                this.$message.success({message: t('common.deleteSuccess'),}),
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
            this.addTimestamp = ''
            this.addType = ''
            this.addColor = '#909399'
            this.addContent = ''
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
            if(this.addContent == '' || this.addTimestamp == '')
            {
                this.$message.error({message: t('common.error'),})
                return
            }
            var _this = this
            addIndexTime({ content: this.addContent,timestamp: this.addTimestamp,type: this.addType,color: this.addColor }).then(function(resp){
                _this.timeline[_this.timeline.length] = {
                    id: resp.data.id,
                    content: _this.addContent,
                    timestamp: _this.addTimestamp,
                    type: _this.addType,
                    color: _this.addColor,
                },
                _this.timelineCard[_this.timelineCard.length] = { height: 'height: 0px;',submit: false,open: false },
                _this.addContent = '',
                _this.addTimestamp = '',
                _this.addType = '',
                _this.addColor = '#909399',
                _this.addHeight = 'height: 0px;',
                _this.addShow = false,
                _this.$refs.scrollbar.scrollTo({top: document.getElementById("manageTime-scrollbar").offsetHeight, behavior: 'smooth'}),
                _this.$message.success({message: t('common.applySuccess'),})
            })
        },
        addCancel()
        {
            this.addHeight = 'height: 0px;'
            this.addText = 'color: #909399;'
            this.addType = ''
            this.addColor = '#909399'
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
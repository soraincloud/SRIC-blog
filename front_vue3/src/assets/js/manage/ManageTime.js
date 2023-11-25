import { getIndexTimeList,updateTimeById,deleteTimeById,getTimeByText } from "@/axios/api/homeApi"
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
            options: 
            [
                {
                    value: 'primary',
                    label: 'primary',
                },
                {
                    value: 'success',
                    label: 'success',
                },
                {
                    value: 'info',
                    label: 'info',
                },
                {
                    value: 'warning',
                    label: 'warning',
                },
                {
                    value: 'danger',
                    label: 'danger',
                },
            ],
            deleteTitle: t('common.deleteSure'),
            deleteOk: t('common.apply'),
            deleteCancel: t('common.cancel'),
            select: '',
            selectPlaceholderText: t('common.select'),
            placeholderText: t('common.search'),
            labelText: t('common.text'),
            labelTime: t('common.time'),
            search: '',
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
                var divObject = document.getElementById("manageTime-card-div-id")
                var divHeight = divObject.offsetHeight
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

            }
            else
            {
                getTimeByText({ text: this.search }).then(function(resp){
                    _this.timeline = resp.data
                    console.log(_this.timelineCard)
                    _this.timelineCard = {}
                    console.log(_this.timelineCard)
                    for(let i = 0;i < resp.data.length;i++)
                    {
                        _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
                    }
                    console.log(_this.timelineCard)
                })
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
            selectPlaceholderText = t('common.select')
            this.placeholderText = t('common.search')
            labelText = t('common.text')
            labelTime = t('common.time')
        }
    },
}
import { getIndexTimeList,updateTimeById } from "@/axios/api/homeApi"
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
            bodyHeight: (window.innerHeight - 60) + 'px',
            timeline: [],
            active: '',
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
            _this.loading = false
            for(let i = 0;i < resp.data.length;i++)
            {
                _this.timelineCard[i] = { height: 'height: 0px;',submit: false,open: false }
            }
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
        clickDelete(i)
        {

        },
        clickSubmit(i)
        {
            this.timelineCard[i].submit = true
        },
        clickApply(i)
        {
            console.log(this.timeline[i])
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
    },
}
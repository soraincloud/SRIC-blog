import gsap from "gsap"
import { getManageIndexData } from "@/axios/api/manageApi"

export default
{
    name: 'ManageIndex',
    data() {
        return {
            loading: true,
            bodyHeight: (window.innerHeight - 60) + 'px',
            num: 0,
            visitShowNumber: 0,
            userShowNumber: 0,
            timeShowNumber: 0,
            pageShowNumber: 0,
            visitChangeNumber: 0,
            userChangeNumber: 0,
            timeChangeNumber: 0,
            pageChangeNumber: 0,
            chartData: [],
            back0: '',
            back1: '',
            back2: '',
            back3: '',
            back4: '',
        }
    },
    watch:
    {
        visitChangeNumber(newValue)
        {
            gsap.to(this,{
                duration: 1,
                visitShowNumber: newValue,
            })
        },
        userChangeNumber(newValue)
        {
            gsap.to(this,{
                duration: 1,
                userShowNumber: newValue,
            })
        },
        timeChangeNumber(newValue)
        {
            gsap.to(this,{
                duration: 1,
                timeShowNumber: newValue,
            })
        },
        pageChangeNumber(newValue)
        {
            gsap.to(this,{
                duration: 1,
                pageShowNumber: newValue,
            })
        },
    },
    created()
    {
        var _this = this
        getManageIndexData().then(function(resp){
            _this.visitChangeNumber = resp.data.visits
            _this.userChangeNumber = resp.data.users
            _this.timeChangeNumber = resp.data.days
            _this.pageChangeNumber = resp.data.pages

            _this.chartData = resp.data.visitsList
            _this.drawEcharts()
            _this.loading = false
        })
    },
    methods:
    {
        drawEcharts() {
            let echartsBackground = this.$echarts.init(document.getElementById('echarts-visit-chart'))
            echartsBackground.setOption({
                tooltip: {
                    trigger: 'item'
                  },
                  series: [
                    {
                      type: 'pie',
                      radius: ['40%', '70%'],
                      avoidLabelOverlap: false,
                      itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                      },
                      label: {
                        show: false,
                        position: 'center'
                      },
                      emphasis: {
                        label: {
                          show: true,
                          fontSize: 32,
                          fontWeight: 'bold'
                        }
                      },
                      labelLine: {
                        show: false
                      },
                      data: this.chartData
                    }
                  ]  
            })
        },
        mouseOver(num)
        {
            if(num == 0)
            {
                this.back0 = "background-color: rgba(255,143,143,0.5);"
            }
            else if(num == 1)
            {
                this.back1 = "background-color: rgba(255,143,143,0.5);"
            }
            else if(num == 2)
            {
                this.back2 = "background-color: rgba(255,143,143,0.5);"
            }
            else if(num == 3)
            {
                this.back3 = "background-color: rgba(255,143,143,0.5);"
            }
            else if(num == 4)
            {
                this.back4 = "background-color: rgba(255,143,143,0.5);"
            }
        },
        mouseLeave(num)
        {
            if(num == 0)
            {
                this.back0 = ''
            }
            else if(num == 1)
            {
                this.back1 = ''
            }
            else if(num == 2)
            {
                this.back2 = ''
            }
            else if(num == 3)
            {
                this.back3 = ''
            }
            else if(num == 4)
            {
                this.back4 = ''
            }
        }
    },
    mounted()
    {
        window.onresize = () => 
        {
            this.bodyHeight = (window.innerHeight - 70) + 'px'
        }
    },
}
import gsap from "gsap"
import { getManageIndexData } from "@/axios/api/manageApi"

export default
{
    name: 'ManageIndex',
    data() {
        return {
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
        }
    },
}
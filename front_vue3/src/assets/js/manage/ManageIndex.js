import gsap from "gsap"

export default
{
    name: 'ManageIndex',
    data() {
        return {
            changeNumber: 0,
            showNumber: 0,
            number: 200,
        }
    },
    watch:
    {
        changeNumber(newValue)
        {
            gsap.to(this,{
                duration: 1,
                showNumber: newValue,
            })
        }
    },
    created()
    {
        this.changeNumber = 114514 
    },
    mounted() {
        this.drawEcharts()
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
                      name: 'Access From',
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
                      data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' },
                        { value: this.number, name: 'fafasd' },
                      ]
                    }
                  ]  
                
            })
        }
    },
}
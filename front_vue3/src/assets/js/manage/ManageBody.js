export default
    {
        name: 'AppBody',
        data() {
            return {

            }
        },
        mounted() {
            this.drawEcharts()
        },
        methods:
        {
            drawEcharts() {
                let echartsBackground = this.$echarts.init(document.getElementById('echarts-background-text'))
                echartsBackground.setOption({
                    graphic: {
                        elements: [
                            {
                                type: 'text',
                                left: 'center',
                                top: 'center',
                                style: {
                                    text: 'SRIC Technology',
                                    fontSize: 80,
                                    fontWeight: 'bold',
                                    lineDash: [0, 200],
                                    lineDashOffset: 0,
                                    fill: 'transparent',
                                    stroke: '#ff5f5f',
                                    lineWidth: 1
                                },
                                keyframeAnimation: {
                                    duration: 5000,
                                    loop: false,
                                    keyframes: [
                                        {
                                            percent: 0.7,
                                            style: {
                                                fill: 'rgba(255,255,255,0)',
                                                lineDashOffset: 200,
                                                lineDash: [200, 0]
                                            }
                                        },
                                        {
                                            // Stop for a while.
                                            percent: 0.8,
                                            style: {
                                                fill: 'rgba(255,255,255,0)'
                                            }
                                        },
                                        {
                                            percent: 1,
                                            style: {
                                                fill: '#ff5f5f'
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                })
            }
        }
    }
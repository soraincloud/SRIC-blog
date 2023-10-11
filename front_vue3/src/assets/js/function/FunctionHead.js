import { ArrowLeftBold } from '@element-plus/icons-vue'
let divPlace = 0;

export default
{
    name: 'FunctionHead',
    components: { ArrowLeftBold },
    data() 
    {
        return {
            head: 'head-front.webp',
            imageTop: 'top:' + (-512) + "px;",
            carouselTop: 'top:' + (window.innerHeight) + "px;",
            divHeight: 'height:' + (window.innerHeight) + "px;",
            divTop1: 'top:' + (-(window.innerHeight) - 100) + "px;",
            divTop2: 'top:' + (-(window.innerHeight) - 100) + "px;",
            divTop3: 'top:' + (-(window.innerHeight) - 100) + "px;",
            divTop4: 'top:' + (-(window.innerHeight) - 100) + "px;",
            opacity: 'opacity: 1',
            carousel:
            [
                {
                    webp: 'head-front.webp',
                    text: '只有前面的 mua fa 辫',
                },
                {
                    webp: 'head-four.webp',
                    text: '有四条 mua fa 辫',
                },
                {
                    webp: 'head-short.webp',
                    text: 'mua fa 辫 + 短发',
                },
                {
                    webp: 'head-low.webp',
                    text: 'mua fa 辫 + 低马尾',
                },
                {
                    webp: 'head-high.webp',
                    text: 'mua fa 辫 + 高马尾',
                },
                {
                    webp: 'head-up.webp',
                    text: 'mua fa 辫 + 翘发',
                },
                {
                    webp: 'head-long.webp',
                    text: 'mua fa 辫 + 长直发',
                },
                {
                    webp: 'head-shi.webp',
                    text: 'mua fa 辫 + 诗岸式辫子',
                },
                {
                    webp: 'head-yuan.webp',
                    text: 'mua fa 辫 + 有点危险的双马尾',
                },
                {
                    webp: 'head-double.webp',
                    text: 'mua fa 辫 + 低双马尾',
                },
                {
                    webp: 'head-danger.webp',
                    text: 'mua fa 辫 + 非常危险的发型',
                },
                {
                    webp: 'head-veryshort.webp',
                    text: 'mua fa 辫 + 超短发',
                },
                {
                    webp: 'head-none.webp',
                    text: '不 要 头 发',
                },
            ],
        }
    },
    methods:
    {
        clickBack()
        {
            this.imageTop = 'top:' + (window.innerHeight + 512) + "px;"
            this.carouselTop = 'top:' + (-512) + "px;"
            setTimeout( () => { this.$router.push('/function') },200)
        },
        carouselChange(e) 
        {
            //判断向上还是向下 先把脑袋挡住
            if(divPlace == 0)
            {
                this.divTop1 = 'top:' + 0 + "px;"
                setTimeout( () => { this.divTop2 = 'top:' + 0 + "px;" },100)
                setTimeout( () => { this.divTop3 = 'top:' + 0 + "px;" },200)
                setTimeout( () => { this.divTop4 = 'top:' + 0 + "px;" },300)
            }
            else
            {
                this.divTop1 = 'top:' + 0 + "px;"
                setTimeout( () => { this.divTop2 = 'top:' + 0 + "px;" },100)
                setTimeout( () => { this.divTop3 = 'top:' + 0 + "px;" },200)
                setTimeout( () => { this.divTop4 = 'top:' + 0 + "px;" },300)
            }
            //挡住的过程中改变脑袋的图片
            setTimeout( () => {
                if (e == 0) 
                {
                    this.head = 'head-front.webp'
                }
                else if(e == 1)
                {
                    this.head = 'head-four.webp'
                }
                else if(e == 2)
                {
                    this.head = 'head-short.webp'
                }
                else if(e == 3)
                {
                    this.head = 'head-low.webp'
                }
                else if(e == 4)
                {
                    this.head = 'head-high.webp'
                }
                else if(e == 5)
                {
                    this.head = 'head-up.webp'
                }
                else if(e == 6)
                {
                    this.head = 'head-long.webp'
                }
                else if(e == 7)
                {
                    this.head = 'head-shi.webp'
                }
                else if(e == 8)
                {
                    this.head = 'head-yuan.webp'
                }
                else if(e == 9)
                {
                    this.head = 'head-double.webp'
                }
                else if(e == 10)
                {
                    this.head = 'head-danger.webp'
                }
                else if(e == 11)
                {
                    this.head = 'head-veryshort.webp'
                }
                else if(e == 12)
                {
                    this.head = 'head-none.webp'
                }
            },500)
            //判断向上还是向下 离开屏幕
            if(divPlace == 0)
            {
                setTimeout( () => { this.divTop1 = 'top:' + window.innerHeight + "px;" },500)
                setTimeout( () => { this.divTop2 = 'top:' + window.innerHeight + "px;" },600)
                setTimeout( () => { this.divTop3 = 'top:' + window.innerHeight + "px;" },700)
                setTimeout( () => { this.divTop4 = 'top:' + window.innerHeight + "px;" },800)
                divPlace = 1
            }
            else
            {
                setTimeout( () => { this.divTop1 = 'top:' + (-(window.innerHeight) - 100) + "px;" },500)
                setTimeout( () => { this.divTop2 = 'top:' + (-(window.innerHeight) - 100) + "px;" },600)
                setTimeout( () => { this.divTop3 = 'top:' + (-(window.innerHeight) - 100) + "px;" },700)
                setTimeout( () => { this.divTop4 = 'top:' + (-(window.innerHeight) - 100) + "px;" },800)
                divPlace = 0
            }
        }
    },
    mounted()
    {
        window.addEventListener('resize',() =>
            this.imageTop = 'top:' + ((window.innerHeight - 512) / 2) + "px;",
            this.carouselTop = 'top:' + ((window.innerHeight - 150) / 2) + "px;",
        )
    },
    created()
    {
        setTimeout( () => { this.imageTop = 'top:' + ((window.innerHeight - 512) / 2) + "px;" },100)
        setTimeout( () => { this.carouselTop = 'top:' + ((window.innerHeight - 150) / 2) + "px;" },100)
    },
}
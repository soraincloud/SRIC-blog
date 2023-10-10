let divPlace = 0;

export default
{
    name: 'FunctionHead',
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
                    text: 'mua fa 辫 + 短发'
                }
            ],
        }
    },
    methods:
    {
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
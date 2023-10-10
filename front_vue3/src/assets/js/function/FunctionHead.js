export default
{
    name: 'FunctionHead',
    data() 
    {
        return {
            head: 'head-front.webp',
            imageTop: 'top:' + (-512) + "px;",
            carouselTop: 'top:' + (window.innerHeight) + "px;",
            opacity: 'opacity: 1',
            carousel:
            [
                {
                    webp: 'head-front.webp',
                    text: '只有前面的 mua fa 辨',
                },
                {
                    webp: 'head-four.webp',
                    text: '有四条 mua fa 辨',
                },
            ]
        }
    },
    methods:
    {
        carouselChange(e) 
        {
            if (e == 0) 
            {
                this.head = 'head-front.webp'
            }
            else if(e == 1)
            {
                this.head = 'head-four.webp'
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
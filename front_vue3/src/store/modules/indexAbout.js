export default
{
    state:
    {
        indexAboutZh: '',
        indexAboutEn: '',
        indexAboutWarma: '',
    },
    getters:
    {
        getIndexAboutZh(state)
        {
            return state.indexAboutZh;
        },
        getIndexAboutEn(state)
        {
            return state.indexAboutEn;
        },
        getIndexAboutWarma(state)
        {
            return state.indexAboutWarma;
        },
    },
    mutations:
    {
        setIndexAboutZh(state,indexAboutZh)
        {
            state.indexAboutZh = indexAboutZh;
        },
        setIndexAboutEn(state,indexAboutEn)
        {
            state.indexAboutEn = indexAboutEn;
        },
        setIndexAboutWarma(state,indexAboutWarma)
        {
            state.indexAboutWarma = indexAboutWarma;
        },
    },
}
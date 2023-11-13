export default
{
    state:
    {
        indexHeadZh: '',
        indexHeadEn: '',
        indexHeadWarma: '',
        indexHeadTitleZh: '',
        indexHeadTitleEn: '',
        indexHeadTitleWarma: '',
    },
    getters:
    {
        getIndexHeadZh(state)
        {
            return state.indexHeadZh;
        },
        getIndexHeadEn(state)
        {
            return state.indexHeadEn;
        },
        getIndexHeadWarma(state)
        {
            return state.indexHeadWarma;
        },
        getIndexHeadTitleZh(state)
        {
            return state.indexHeadTitleZh;
        },
        getIndexHeadTitleEn(state)
        {
            return state.indexHeadTitleEn;
        },
        getIndexHeadTitleWarma(state)
        {
            return state.indexHeadTitleWarma;
        },
    },
    mutations:
    {
        setIndexHeadZh(state,indexHeadZh)
        {
            state.indexHeadZh = indexHeadZh;
        },
        setIndexHeadEn(state,indexHeadEn)
        {
            state.indexHeadEn = indexHeadEn;
        },
        setIndexHeadWarma(state,indexHeadWarma)
        {
            state.indexHeadWarma = indexHeadWarma;
        },
        setIndexHeadTitleZh(state,indexHeadTitleZh)
        {
            state.indexHeadTitleZh = indexHeadTitleZh;
        },
        setIndexHeadTitleEn(state,indexHeadTitleEn)
        {
            state.indexHeadTitleEn = indexHeadTitleEn;
        },
        setIndexHeadTitleWarma(state,indexHeadTitleWarma)
        {
            state.indexHeadTitleWarma = indexHeadTitleWarma;
        },
    },
}
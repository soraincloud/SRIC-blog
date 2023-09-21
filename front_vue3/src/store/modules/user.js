export default
{
    state:
    {
        username: '',
        password: '',
        mark: '',
        phonenumber: '',
        email: '',
        tags:[],
        status: '',
    },
    getters:
    {
        getUsername(state)
        {
            return state.username;
        },
        getPassword(state)
        {
            return state.password;
        },
        getMark(state)
        {
            return state.mark;
        },
        getPhonenumber(state)
        {
            return state.phonenumber;
        },
        getEmail(state)
        {
            return state.email;
        },
        getTags(state)
        {
            return state.tags;
        },
        getStatus(state)
        {
            return state.status;
        },
    },
    mutations:
    {
        setUsername(state,username)
        {
            state.username = username;
        },
        setPassword(state,password)
        {
            state.password = password;
        },
        setMark(state,mark)
        {
            state.mark = mark;
        },
        setPhonenumber(state,phonenumber)
        {
            state.phonenumber = phonenumber;
        },
        setEmail(state,email)
        {
            state.email = email;
        },
        setTags(state,tags)
        {
            state.tags = tags;
        },
        setStatus(state,status)
        {
            state.status = status;
        },
    },
}
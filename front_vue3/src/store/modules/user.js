export default
{
    state:
    {
        username: '',
        password: '',
        avatar: '',
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
        getAvatar(state)
        {
            return state.avatar;
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
        setAvatar(state,avatar)
        {
            state.avatar = avatar;
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
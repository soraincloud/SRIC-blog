package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.userMapper;
import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements userService
{
    @Autowired
    userMapper mapper;

    @Override
    public user GetUserById(int id)
    {
        return mapper.GetUserById(id);
    }

    @Override
    public user GetUserByName(String username)
    {
        return mapper.GetUserByName(username);
    }

    @Override
    public int UpdateNameById(String username,int id)
    {
        return mapper.UpdateNameById(username,id);
    }
}

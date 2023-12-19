package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.userMapper;
import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServiceImpl implements userService
{
    @Autowired
    userMapper mapper;

    @Override
    public user getUserById(int id)
    {
        return mapper.getUserById(id);
    }

    @Override
    public user getUserByName(String username)
    {
        return mapper.getUserByName(username);
    }

    @Override
    public void updateNameById(String username, int id)
    {
        mapper.updateNameById(username,id);
    }

    @Override
    public void updateMarkById(String mark,int id)
    {
        mapper.updateMarkById(mark,id);
    }

    @Override
    public void updateAvatarById(int avatar,int id)
    {
        mapper.updateAvatarById(avatar,id);
    }

    @Override
    public int getUserCount()
    {
        return mapper.getUserCount();
    }

    @Override
    public List<String> getAllUsername()
    {
        return mapper.getAllUsername();
    }
}

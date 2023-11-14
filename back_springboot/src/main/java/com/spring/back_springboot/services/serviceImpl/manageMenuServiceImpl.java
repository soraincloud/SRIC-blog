package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.manageMenuMapper;
import com.spring.back_springboot.pojo.manageMenuList;
import com.spring.back_springboot.services.service.manageMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class manageMenuServiceImpl implements manageMenuService
{
    @Autowired
    manageMenuMapper mapper;

    @Override
    public List<manageMenuList> getAllManageMenu()
    {
        return mapper.getAllManageMenu();
    }
}

package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.statusMapper;
import com.spring.back_springboot.pojo.status;
import com.spring.back_springboot.services.service.statusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class statusServiceImpl implements statusService
{
    @Autowired
    statusMapper mapper;

    @Override
    public List<status> getAllStatus()
    {
        return mapper.getAllStatus();
    }
}

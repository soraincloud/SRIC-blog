package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.indexTimeMapper;
import com.spring.back_springboot.pojo.indexTime;
import com.spring.back_springboot.services.service.indexTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class indexTimeServiceImpl implements indexTimeService
{
    @Autowired
    indexTimeMapper mapper;

    @Override
    public List<indexTime> GetAllIndexTime()
    {
        return mapper.GetAllIndexTime();
    }
}

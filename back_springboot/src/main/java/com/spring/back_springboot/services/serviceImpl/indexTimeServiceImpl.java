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
    public List<indexTime> getAllIndexTime()
    {
        List<indexTime> list = mapper.getAllIndexTime();
        list.sort((t1, t2) -> t2.getTimestmap().compareTo(t1.getTimestmap()));
        return list;
    }

    @Override
    public void updateTimeById(indexTime time)
    {
        mapper.updateTimeById(time.getContent(),time.getTimestmap(),time.getType(),time.getColor(),time.getId());
    }

    @Override
    public void deleteTimeById(int id)
    {
        mapper.deleteTimeById(id);
    }

    @Override
    public List<indexTime> getTimeByText(String text)
    {
        return mapper.getTimeByText(text);
    }

    @Override
    public List<indexTime> getTimeByTime(String time)
    {
        return mapper.getTimeByTime(time);
    }

    @Override
    public List<indexTime> getTimeByYear(String year)
    {
        return mapper.getTimeByTime(year);
    }

    @Override
    public void addIndexTime(indexTime time)
    {
        mapper.addIndexTime(time.getContent(),time.getTimestmap(),time.getType(),time.getColor());
    }
}

package com.spring.back_springboot.services.serviceImpl;
import com.spring.back_springboot.mapper.pageVisitedMapper;
import com.spring.back_springboot.pojo.pageVisited;
import com.spring.back_springboot.pojo.pageVisitedChart;
import com.spring.back_springboot.services.service.pageVisitedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class pageVisitedServiceImpl implements pageVisitedService
{
    @Autowired
    pageVisitedMapper mapper;

    @Override
    public List<pageVisited> getAllPageVisited()
    {
        return mapper.getAllPageVisited();
    }

    @Override
    public void updateVisitedByPage(String page)
    {
        mapper.updateVisitedByPage(page);
    }

    @Override
    public List<pageVisitedChart> getAllPageVisitedChart()
    {
        return mapper.getAllPageVisitedChart();
    }
}

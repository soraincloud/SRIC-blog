package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.pageVisited;
import com.spring.back_springboot.pojo.pageVisitedChart;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface pageVisitedService
{
    List<pageVisited> getAllPageVisited();
    void updateVisitedByPage(String page);
    List<pageVisitedChart> getAllPageVisitedChart();
}

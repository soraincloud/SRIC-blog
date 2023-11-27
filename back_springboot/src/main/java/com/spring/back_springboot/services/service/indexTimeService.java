package com.spring.back_springboot.services.service;
import com.spring.back_springboot.pojo.indexTime;

import java.util.List;

public interface indexTimeService
{
    List<indexTime> getAllIndexTime();
    void updateTimeById(indexTime time);
    void deleteTimeById(int id);
    List<indexTime> getTimeByText(String text);
    List<indexTime> getTimeByTime(String time);
    List<indexTime> getTimeByYear(String year);
    void addIndexTime(indexTime time);
}

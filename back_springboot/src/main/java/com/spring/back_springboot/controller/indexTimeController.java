package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.indexTime;
import com.spring.back_springboot.services.service.indexTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/home")//此Controller中所有api前缀路径为/api
public class indexTimeController
{
    @Autowired
    indexTimeService service;

    @GetMapping("/indexTimeList")
    public List<indexTime> getAllIndexTime() throws Exception
    {
        return service.getAllIndexTime();
    }

    @PostMapping("/updateTimeById")
    public void updateTimeById(@RequestBody indexTime time)
    {
        service.updateTimeById(time);
    }

    @PostMapping("/deleteTimeById")
    public void deleteTimeById(@RequestBody indexTime time)
    {
        service.deleteTimeById(time.getId());
    }

    @GetMapping("/getTimeByText")
    public List<indexTime> getTimeByText(String text)
    {
        return service.getTimeByText(text);
    }

    @GetMapping("/getTimeByTime")
    public List<indexTime> getTimeByTime(String time)
    {
        return service.getTimeByTime(time);
    }

    @GetMapping("/getTimeByYear")
    public List<indexTime> getTimeByYear(String year)
    {
        return service.getTimeByYear(year);
    }

    @PostMapping("/addIndexTime")
    public int addIndexTime(@RequestBody indexTime time)
    {
        return service.addIndexTime(time);
    }
}

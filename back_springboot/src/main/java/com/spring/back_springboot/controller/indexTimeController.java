package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.indexTime;
import com.spring.back_springboot.services.service.indexTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class indexTimeController
{
    @Autowired
    indexTimeService service;

    @CrossOrigin
    @GetMapping("/home/indexTimeList")
    public List<indexTime> getAllIndexTime() throws Exception
    {
        return service.getAllIndexTime();
    }

    @CrossOrigin
    @PostMapping("/home/updateTimeById")
    public void updateTimeById(@RequestBody indexTime time)
    {
        service.updateTimeById(time);
    }

    @CrossOrigin
    @PostMapping("/home/deleteTimeById")
    public void deleteTimeById(@RequestBody indexTime time)
    {
        service.deleteTimeById(time.getId());
    }

    @CrossOrigin
    @GetMapping("/home/getTimeByText")
    public List<indexTime> getTimeByText(String text)
    {
        return service.getTimeByText(text);
    }
}

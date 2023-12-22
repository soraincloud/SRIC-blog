package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.status;
import com.spring.back_springboot.services.service.statusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/user")//此Controller中所有api前缀路径为/api
public class statusController
{
    @Autowired
    statusService service;

    @GetMapping("/getAllStatus")
    public List<status> getAllStatus()
    {
        return service.getAllStatus();
    }
}

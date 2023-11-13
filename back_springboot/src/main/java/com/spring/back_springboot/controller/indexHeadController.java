package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.languageText;
import com.spring.back_springboot.services.service.indexHeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class indexHeadController
{
    @Autowired
    indexHeadService service;

    @CrossOrigin
    @GetMapping("/home/getAllIndexHead")
    public List<languageText> getAllIndexHead()
    {
        return service.getAllIndexHead();
    }

    @CrossOrigin
    @GetMapping("/home/getAllIndexHeadTitle")
    public List<languageText> getAllIndexHeadTitle()
    {
        return service.getAllIndexHeadTitle();
    }
}

package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.languageText;
import com.spring.back_springboot.services.service.indexHeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/home")//此Controller中所有api前缀路径为/api
public class indexHeadController
{
    @Autowired
    indexHeadService service;

    @GetMapping("/getAllIndexHead")
    public List<languageText> getAllIndexHead()
    {
        return service.getAllIndexHead();
    }

    @GetMapping("/getAllIndexHeadTitle")
    public List<languageText> getAllIndexHeadTitle()
    {
        return service.getAllIndexHeadTitle();
    }

    @PostMapping("/setIndexHead")
    public void setIndexHead(@RequestBody List<languageText> list)
    {
        service.setIndexHead(list);
    }

    @PostMapping("/setIndexHeadTitle")
    public void setIndexHeadTitle(@RequestBody List<languageText> list)
    {
        service.setIndexHeadTitle(list);
    }
}

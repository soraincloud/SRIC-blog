package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.languageText;
import com.spring.back_springboot.services.service.indexAboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home")//此Controller中所有api前缀路径为/api
public class indexAboutController
{
    @Autowired
    indexAboutService service;

    @CrossOrigin
    @GetMapping("/getAllIndexAbout")
    public List<languageText> getAllIndexAbout()
    {
        return service.getAllIndexAbout();
    }

    @CrossOrigin
    @PostMapping("/setIndexAbout")
    public void setIndexAbout(@RequestBody List<languageText> list)
    {
        service.setIndexAbout(list);
    }
}

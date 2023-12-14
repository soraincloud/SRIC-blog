package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.languageText;
import com.spring.back_springboot.services.service.indexAboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/home")//此Controller中所有api前缀路径为/api
public class indexAboutController
{
    @Autowired
    indexAboutService service;

    @GetMapping("/getAllIndexAbout")
    public List<languageText> getAllIndexAbout()
    {
        return service.getAllIndexAbout();
    }

    @PostMapping("/setIndexAbout")
    public void setIndexAbout(@RequestBody List<languageText> list)
    {
        service.setIndexAbout(list);
    }
}

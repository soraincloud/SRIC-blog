package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.dictionary;
import com.spring.back_springboot.services.service.dictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class dictionaryController
{
    @Autowired
    dictionaryService service;

    @CrossOrigin
    @GetMapping("/dict/getDictElColorType")
    public List<dictionary> getDictElColorType()
    {
        return service.getDictElColorType();
    }
}

package com.spring.back_springboot.controller;
import com.spring.back_springboot.pojo.pageVisited;
import com.spring.back_springboot.services.service.pageVisitedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/visited")//此Controller中所有api前缀路径为/api
public class pageVisitedController
{
    @Autowired
    pageVisitedService service;

    @GetMapping("/getAllPageVisited")
    public List<pageVisited> getAllPageVisited()
    {
        return service.getAllPageVisited();
    }

    @GetMapping("/visitPage")
    public void visitPage(String page)
    {
        service.updateVisitedByPage(page);
    }
}

package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class userController
{
    @Autowired
    userService service;

    @CrossOrigin
    @GetMapping("/getUserById")
    public user GetUserById(int id)
    {
        return service.GetUserById(id);
    }
}

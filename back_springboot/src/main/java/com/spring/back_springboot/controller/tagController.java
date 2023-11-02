package com.spring.back_springboot.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.spring.back_springboot.pojo.tag;
import com.spring.back_springboot.services.service.tagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class tagController
{
    @Autowired
    tagService service;

    @CrossOrigin
    @GetMapping("/user/getTagByToken")
    public List<tag> GetTagByToken(String tokenValue)
    {
        int uid = Integer.parseInt(StpUtil.getLoginIdByToken(tokenValue).toString());
        return service.GetTagByUid(uid);
    }
}

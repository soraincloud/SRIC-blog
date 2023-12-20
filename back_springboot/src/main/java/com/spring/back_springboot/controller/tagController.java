package com.spring.back_springboot.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.spring.back_springboot.pojo.tag;
import com.spring.back_springboot.pojo.userToken;
import com.spring.back_springboot.result.code;
import com.spring.back_springboot.services.service.tagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/user")//此Controller中所有api前缀路径为/api
public class tagController
{
    @Autowired
    tagService service;

    @GetMapping("/getTagByToken")
    public List<tag> getTagByToken(String tokenValue)
    {
        int uid = Integer.parseInt(StpUtil.getLoginIdByToken(tokenValue).toString());
        List<tag> tagList = service.getTagByUid(uid);
        for(int i = 0;i < tagList.size();i++)
        {
            tagList.get(i).setUid(0);
        }
        return tagList;
    }

    @PostMapping("/deleteTagById")
    public void deleteTagById(@RequestBody tag tag)
    {
        service.deleteTagById(tag.getId());
    }

    @PostMapping("/addTagByToken")
    public code addTagByToken(@RequestBody userToken userToken)
    {
        int uid = Integer.parseInt(StpUtil.getLoginIdByToken(userToken.getTokenValue()).toString());
        List<tag> tagList = service.getTagByUid(uid);
        if(tagList.size() >= 5)
        {
            return new code(400);
        }
        tag tag = new tag();
        tag.setUid(uid);
        tag.setContent(userToken.getMark());
        service.addTagById(tag);
        return new code(200);
    }
}

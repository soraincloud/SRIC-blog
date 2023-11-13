package com.spring.back_springboot.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.pojo.userToken;
import com.spring.back_springboot.result.code;
import com.spring.back_springboot.result.login;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class userController
{
    @Autowired
    userService service;

    @CrossOrigin
    @GetMapping("/user/getUserByToken")
    public user getUserByToken(String tokenValue)
    {
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(tokenValue).toString());
        user u = service.getUserById(id);
        u.setId(0);
        u.setPassword("");
        u.markPhoneNumber();
        u.markEmail();
        //不发送密码 id 电话和邮件
        return u;
    }

    @CrossOrigin
    @PostMapping("/user/login")
    public login login(@RequestBody user user)
    {
        user u = service.getUserByName(user.getUsername()); //根据用户名查询
        if(u == null) //用户名不存在
        {
            return new login(401,null);
        }
        else //用户名存在
        {
            if(u.getPassword().equals(user.getPassword())) //密码正确
            {
                StpUtil.login(u.getId());
                return new login(200,StpUtil.getTokenValue());
            }
            else //密码错误
            {
                return new login(400,null);
            }
        }
    }

    @CrossOrigin
    @PostMapping("/user/updateNameByToken")
    public code updateNameByToken(@RequestBody userToken userToken)
    {
        user getUser = service.getUserByName(userToken.getUsername());
        if(getUser != null)
        {
            return new code(400);
        }
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(userToken.getTokenValue()).toString());
        service.updateNameById(userToken.getUsername(),id);
        return new code(200);
    }

    @CrossOrigin
    @PostMapping("/user/updateMarkByToken")
    public code UpdateMarkByToken(@RequestBody userToken userToken)
    {
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(userToken.getTokenValue()).toString());
        service.updateMarkById(userToken.getMark(),id);
        return new code(200);
    }
}

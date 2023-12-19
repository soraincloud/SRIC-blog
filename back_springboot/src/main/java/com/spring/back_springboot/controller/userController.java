package com.spring.back_springboot.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.pojo.userToken;
import com.spring.back_springboot.result.code;
import com.spring.back_springboot.result.login;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/user")//此Controller中所有api前缀路径为/api
public class userController
{
    @Autowired
    userService service;

    @GetMapping("/getUserByToken")
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

    @PostMapping("/login")
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

    @PostMapping("/updateNameByToken")
    public code updateNameByToken(@RequestBody userToken userToken)
    {
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(userToken.getTokenValue()).toString());
        user u = service.getUserById(id);
        if(u.getPassword().equals(userToken.getPassword()))//密码正确
        {
            user getUser = service.getUserByName(userToken.getUsername());
            if(getUser != null)//用户名重复
            {
                return new code(401);
            }
            service.updateNameById(userToken.getUsername(),id);//修改用户名
            service.updatePasswordById(userToken.getNewPassword(),id);//修改密码
            return new code(200);
        }
        else//密码错误
        {
            return new code(400);
        }
    }

    @PostMapping("/updateMarkByToken")
    public code updateMarkByToken(@RequestBody userToken userToken)
    {
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(userToken.getTokenValue()).toString());
        service.updateMarkById(userToken.getMark(),id);
        return new code(200);
    }

    @PostMapping("/updateAvatarByToken")
    public code updateAvatarByToken(@RequestBody userToken userToken)
    {
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(userToken.getTokenValue()).toString());
        service.updateAvatarById(userToken.getAvatar(),id);
        return new code(200);
    }

    @GetMapping("/getAllUsername")
    public List<String> getAllUsername()
    {
        return service.getAllUsername();
    }
}

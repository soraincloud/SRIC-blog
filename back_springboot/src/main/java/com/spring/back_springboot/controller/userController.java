package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.user;
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
    @GetMapping("/getUserById")
    public user GetUserById(int id)
    {
        return service.GetUserById(id);
    }

    @CrossOrigin
    @PostMapping("/login")
    public login login(@RequestBody user user)
    {
        user u = service.GetUserByName(user.getUsername());
        if(u == null)
        {
            return new login(401,0);
        }
        else
        {
            if(u.getPassword().equals(user.getPassword()))
            {
                return new login(200,u.getId());
            }
            else
            {
                return new login(400,0);
            }
        }
    }

    @CrossOrigin
    @PostMapping("/updateNameById")
    public code UpdateNameById(@RequestBody user user)
    {
        user getUser = service.GetUserByName(user.getUsername());
        if(getUser != null)
        {
            return new code(400);
        }
        service.UpdateNameById(user.getUsername(),user.getId());
        return new code(200);
    }

    @CrossOrigin
    @PostMapping("/updateMarkById")
    public code UpdateMarkById(@RequestBody user user)
    {
        service.UpdateMarkById(user.getMark(),user.getId());
        return new code(200);
    }
}

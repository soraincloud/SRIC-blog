package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.user;
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
    public int UpdateNameById(@RequestBody user user)
    {
        service.UpdateNameById(user.getUsername(),user.getId());
        return 0;
    }
}

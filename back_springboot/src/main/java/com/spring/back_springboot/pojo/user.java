package com.spring.back_springboot.pojo;

import lombok.Data;

@Data
public class user
{
    private int id;
    private String username;
    private String password;
    private String avatar;
    private String phonenumber;
    private String email;
    private String mark;
    private int status;
}

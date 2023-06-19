package com.spring.back_springboot.result;

import lombok.Data;

@Data
public class login
{
    private int code;
    private int id;
    public login(int c,int i){code = c;id = i;}
}

package com.spring.back_springboot.result;

import lombok.Data;

@Data
public class login
{
    private int code;
    private String tokenValue;
    public login(int c,String t){code = c;tokenValue = t;}
}

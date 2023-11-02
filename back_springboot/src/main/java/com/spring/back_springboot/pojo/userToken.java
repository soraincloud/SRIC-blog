package com.spring.back_springboot.pojo;

import lombok.Data;

@Data
public class userToken
{
    private String tokenValue;
    private String username;
    private String avatar;
    private String mark;
    private int status;
}

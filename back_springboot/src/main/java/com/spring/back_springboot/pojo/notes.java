package com.spring.back_springboot.pojo;

import lombok.Data;

@Data
public class notes
{
    private int id;
    private String title;
    private String description;
    private String category;
    private String md;
    private int visited;
    private int uid;
    private String username;
    private String date;
}

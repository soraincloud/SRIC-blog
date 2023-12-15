package com.spring.back_springboot.pojo;

import lombok.Data;

@Data
public class notes
{
    private int id;
    private String title;
    private String description;
    private int category;
    private int md;
    private int visited;
    private String username;
    private String date;
}

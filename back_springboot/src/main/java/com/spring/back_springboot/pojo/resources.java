package com.spring.back_springboot.pojo;

import lombok.Data;

@Data
public class resources
{
    private int id;
    private String title;
    private String description;
    private int category;
    private int file;
    private int visited;
    private String tag;
    private double size;
    private String username;
    private String date;
}

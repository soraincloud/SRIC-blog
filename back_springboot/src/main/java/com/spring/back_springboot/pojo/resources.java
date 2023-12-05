package com.spring.back_springboot.pojo;

import lombok.Data;

@Data
public class resources
{
    private int id;
    private String title;
    private String description;
    private String category;
    private String file;
    private int visited;
    private String tag;
    private double size;
    private int uid;
    private String date;
}

package com.spring.back_springboot.pojo;

import lombok.Data;

import java.util.List;

@Data
public class manageIndexData
{
    private int visits;
    private int users;
    private int days;
    private int pages;
    private List<pageVisitedChart> visitsList;

    public manageIndexData(int v,int u,int d,int p,List<pageVisitedChart> vi)
    {
        visits = v;
        users = u;
        days = d;
        pages = p;
        visitsList = vi;
    }
}

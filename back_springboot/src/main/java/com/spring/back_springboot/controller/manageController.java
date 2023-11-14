package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.manageIndexData;
import com.spring.back_springboot.pojo.manageMenuList;
import com.spring.back_springboot.pojo.pageVisitedChart;
import com.spring.back_springboot.services.service.indexTimeService;
import com.spring.back_springboot.services.service.manageMenuService;
import com.spring.back_springboot.services.service.pageVisitedService;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class manageController
{
    @Autowired
    pageVisitedService pageVisitedService;
    @Autowired
    userService userService;
    @Autowired
    indexTimeService indexTimeService;
    @Autowired
    manageMenuService manageMenuService;

    @CrossOrigin
    @GetMapping("/manage/getManageIndexData")
    public manageIndexData getManageIndexData()
    {
        List<pageVisitedChart> pvc = pageVisitedService.getAllPageVisitedChart();
        int visits = pvc.get(0).getValue();
        pvc.remove(0);
        int pages = 0;
        for(int i = 0;i < pvc.size();i++)
        {
            pages += pvc.get(i).getValue();
        }
        int users = userService.getUserCount();
        int days = 0;
        try
        {
            DateFormat dft = new SimpleDateFormat("yyyy-MM-dd");
            Date start = dft.parse("2023-06-12");
            Long startTime = start.getTime();
            Long endTime = System.currentTimeMillis();
            Long num = endTime - startTime;
            days = (int)(num/24/60/60/1000);
        }catch(ParseException e) {e.printStackTrace();}
        return new manageIndexData(visits,users,days,pages,pvc);
    }

    @CrossOrigin
    @GetMapping("/manage/getAllManageMenu")
    public List<manageMenuList> getAllManageMenu()
    {
        return manageMenuService.getAllManageMenu();
    }
}

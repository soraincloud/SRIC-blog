package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.user;

import java.util.List;

public interface userService
{
    user getUserById(int id);
    user getUserByName(String username);
    void updateNameById(String username, int id);
    void updateMarkById(String mark,int id);
    int getUserCount();
    List<String> getAllUsername();
}

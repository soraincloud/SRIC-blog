package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.user;

public interface userService
{
    user getUserById(int id);
    user getUserByName(String username);
    void updateNameById(String username, int id);
    void updateMarkById(String mark,int id);
    int getUserCount();
}

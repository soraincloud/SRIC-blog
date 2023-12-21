package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.result.code;

import java.util.List;

public interface userService
{
    user getUserById(int id);
    user getUserByName(String username);
    void updateNameById(String username, int id);
    void updatePasswordById(String password,int id);
    void updateMarkById(String mark,int id);
    void updateAvatarById(int avatar,int id);
    int getUserCount();
    List<String> getAllUsername();
    List<user> getAllUserData();
    List<user> getUserListByName(String username);
    void updateStatus(user user);
    code visitManage(String tokenValue);
}

package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.languageText;

import java.util.List;

public interface indexAboutService
{
    List<languageText> getAllIndexAbout();
    void setIndexAbout(List<languageText> list);
}

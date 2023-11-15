package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.languageText;

import java.util.List;

public interface indexHeadService
{
    List<languageText> getAllIndexHead();
    List<languageText> getAllIndexHeadTitle();
    void setIndexHead(List<languageText> list);
    void setIndexHeadTitle(List<languageText> list);
}

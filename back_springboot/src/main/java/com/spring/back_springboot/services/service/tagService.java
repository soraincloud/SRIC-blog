package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.tag;

import java.util.List;

public interface tagService
{
    List<tag> getTagByUid(int uid);
    void deleteTagById(int id);
    void addTagById(tag tag);
}

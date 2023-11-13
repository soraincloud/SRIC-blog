package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.tagMapper;
import com.spring.back_springboot.pojo.tag;
import com.spring.back_springboot.services.service.tagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class tagServiceImpl implements tagService
{
    @Autowired
    tagMapper mapper;

    @Override
    public List<tag> getTagByUid(int uid)
    {
        return mapper.getTagByUid(uid);
    }
}

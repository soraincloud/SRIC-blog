package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.dictionaryMapper;
import com.spring.back_springboot.pojo.dictionary;
import com.spring.back_springboot.services.service.dictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class dictionaryServiceImpl implements dictionaryService
{
    @Autowired
    dictionaryMapper mapper;

    @Override
    public List<dictionary> getDictElColorType()
    {
        return mapper.getDictElColorType();
    }
}

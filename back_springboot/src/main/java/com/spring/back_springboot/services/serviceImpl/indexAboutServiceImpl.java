package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.indexAboutMapper;
import com.spring.back_springboot.pojo.languageText;
import com.spring.back_springboot.services.service.indexAboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class indexAboutServiceImpl implements indexAboutService
{
    @Autowired
    indexAboutMapper mapper;

    @Override
    public List<languageText> getAllIndexAbout()
    {
        return mapper.getAllIndexAbout();
    }

    @Override
    public void setIndexAbout(List<languageText> list)
    {
        for(int i = 0;i < list.size();i++)
        {
            mapper.setIndexAboutById(list.get(i).getText(),i + 1);
        }
    }
}

package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.indexHeadMapper;
import com.spring.back_springboot.pojo.languageText;
import com.spring.back_springboot.services.service.indexHeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class indexHeadServiceImpl implements indexHeadService
{
    @Autowired
    indexHeadMapper mapper;

    @Override
    public List<languageText> getAllIndexHead()
    {
        List<languageText> list = mapper.getAllIndexHead();
        for(int i = 0;i < list.size();i++)
        {
            list.get(i).setText(list.get(i).getText().replace("\\n","\n"));
        }
        return list;
    }

    @Override
    public List<languageText> getAllIndexHeadTitle()
    {
        return mapper.getAllIndexHeadTitle();
    }
}

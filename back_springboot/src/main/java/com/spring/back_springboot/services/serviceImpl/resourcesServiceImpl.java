package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.resourcesMapper;
import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.services.service.notesService;
import com.spring.back_springboot.services.service.resourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class resourcesServiceImpl implements resourcesService
{
    @Autowired
    resourcesMapper mapper;

    @Override
    public List<resources> GetAllResources()
    {
        return mapper.GetAllResources();
    }

    @Override
    public List<resources> GetResourcesByCategory(String category)
    {
        return mapper.GetResourcesByCategory(category);
    }

    @Override
    public resources GetResourceById(int id)
    {
        return mapper.GetResourceById(id);
    }

    @Override
    public void addResourceVisit(int id)
    {
        mapper.addResourceVisit(id);
    }
}

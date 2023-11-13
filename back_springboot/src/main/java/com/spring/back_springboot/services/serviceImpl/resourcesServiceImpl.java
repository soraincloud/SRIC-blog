package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.resourcesMapper;
import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.pojo.resourcesCategory;
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
    public List<resources> getAllResources()
    {
        return mapper.getAllResources();
    }

    @Override
    public List<resources> getResourcesByCategory(String category)
    {
        return mapper.getResourcesByCategory(category);
    }

    @Override
    public resources getResourceById(int id)
    {
        return mapper.getResourceById(id);
    }

    @Override
    public void addResourceVisit(int id)
    {
        mapper.addResourceVisit(id);
    }

    @Override
    public List<resourcesCategory> getAllResourcesCategory()
    {
        return mapper.getAllResourcesCategory();
    }
}

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
    public List<resources> getResourcesByText(String text)
    {
        return mapper.getResourcesByText(text);
    }

    @Override
    public void addResourceVisit(int id)
    {
        mapper.addResourceVisit(id);
    }

    @Override
    public void addResource(resources resources)
    {
        mapper.addResource(resources);
    }

    @Override
    public void updateResource(resources resources)
    {
        mapper.updateResource(resources);
    }

    @Override
    public void deleteResourceById(int id)
    {
        mapper.deleteResourceById(id);
    }

    @Override
    public List<resourcesCategory> getAllResourcesCategory()
    {
        return mapper.getAllResourcesCategory();
    }

    @Override
    public void addResourcesCategory(resourcesCategory category)
    {
        mapper.addResourcesCategory(category);
    }

    @Override
    public void updateResourcesCategoryById(resourcesCategory category)
    {
        mapper.updateResourcesCategoryById(category);
    }

    @Override
    public void deleteResourcesCategoryById(int id)
    {
        mapper.deleteResourcesCategoryById(id);
    }
}

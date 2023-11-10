package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.pojo.resourcesCategory;
import com.spring.back_springboot.services.service.resourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class resourcesController
{
    @Autowired
    resourcesService service;

    @CrossOrigin
    @GetMapping("/resources/getResourcesList")
    public List<resources> GetAllResources()
    {
        return service.GetAllResources();
    }

    @CrossOrigin
    @GetMapping("/resources/getResourcesListByCategory")
    public List<resources> GetResourcesListByCategory(String category) throws Exception
    {
        return service.GetResourcesByCategory(category);
    }

    @CrossOrigin
    @GetMapping("/resources/getResourcesById")
    public resources GetResourceById(int id)
    {
        service.addResourceVisit(id);
        return service.GetResourceById(id);
    }

    @CrossOrigin
    @GetMapping("/resources/getAllResourcesCategory")
    public List<resourcesCategory> getAllResourcesCategory()
    {
        return service.getAllResourcesCategory();
    }
}

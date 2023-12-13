package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.pojo.resourcesCategory;
import com.spring.back_springboot.services.service.resourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/resources")//此Controller中所有api前缀路径为/api
public class resourcesController
{
    @Autowired
    resourcesService service;

    @GetMapping("/getResourcesList")
    public List<resources> getAllResources()
    {
        return service.getAllResources();
    }

    @GetMapping("/getResourcesListByCategory")
    public List<resources> getResourcesListByCategory(String category) throws Exception
    {
        return service.getResourcesByCategory(category);
    }

    @GetMapping("/getResourcesById")
    public resources getResourceById(int id)
    {
        service.addResourceVisit(id);
        return service.getResourceById(id);
    }

    @GetMapping("/getResourcesByText")
    public List<resources> getResourcesByText(String text)
    {
        return service.getResourcesByText(text);
    }

    @PostMapping("/addResource")
    public void addResource(@RequestBody resources resource)
    {
        service.addResource(resource);
    }

    @PostMapping("/updateResource")
    public void updateResource(@RequestBody resources resource)
    {
        service.updateResource(resource);
    }

    @PostMapping("/deleteResourceById")
    public void deleteResourceById(@RequestBody resources resource)
    {
        service.deleteResourceById(resource.getId());
    }

    @GetMapping("/getAllResourcesCategory")
    public List<resourcesCategory> getAllResourcesCategory()
    {
        return service.getAllResourcesCategory();
    }

    @PostMapping("/addResourcesCategory")
    public void addResourcesCategory(@RequestBody resourcesCategory category)
    {
        service.addResourcesCategory(category);
    }

    @PostMapping("/updateResourcesCategoryById")
    public void updateResourcesCategoryById(@RequestBody resourcesCategory category)
    {
        service.updateResourcesCategoryById(category);
    }

    @PostMapping("/deleteResourcesCategoryById")
    public void deleteResourcesCategoryById(@RequestBody resourcesCategory category)
    {
        service.deleteResourcesCategoryById(category.getId());
    }
}

package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.pojo.resourcesCategory;

import java.util.List;

public interface resourcesService
{
    List<resources> getAllResources();
    List<resources> getResourcesByCategory(String category);
    resources getResourceById(int id);
    void addResourceVisit(int id);
    List<resourcesCategory> getAllResourcesCategory();
}

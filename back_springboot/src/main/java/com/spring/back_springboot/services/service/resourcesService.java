package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.pojo.resourcesCategory;

import java.util.List;

public interface resourcesService
{
    List<resources> getAllResources();
    List<resources> getResourcesByCategory(String category);
    resources getResourceById(int id);
    List<resources> getResourcesByText(String text);
    void addResourceVisit(int id);
    void addResource(resources resources);
    void updateResource(resources resources);
    void deleteResourceById(int id);
    List<resourcesCategory> getAllResourcesCategory();
    void addResourcesCategory(resourcesCategory category);
    void updateResourcesCategoryById(resourcesCategory category);
    void deleteResourcesCategoryById(int id);
}

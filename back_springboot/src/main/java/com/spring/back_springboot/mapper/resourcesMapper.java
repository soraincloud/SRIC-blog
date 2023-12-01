package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.resources;
import com.spring.back_springboot.pojo.resourcesCategory;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface resourcesMapper
{
    @Select(value = "SELECT * FROM resources")
    List<resources> getAllResources();

    @Select(value = "SELECT * FROM resources WHERE category = #{category}")
    List<resources> getResourcesByCategory(@Param(value = "category") String category);

    @Select(value = "SELECT * FROM resources WHERE id = #{id}")
    resources getResourceById(@Param(value = "id")int id);

    @Update(value = "UPDATE resources SET VISITED = VISITED + 1 WHERE id = #{id}")
    void addResourceVisit(@Param(value = "id")int id);

    @Select(value = "SELECT * FROM `resources-category`")
    List<resourcesCategory> getAllResourcesCategory();

    @Insert(value = "INSERT INTO `resources-category` values (null, #{content}, #{icon})")
    void addResourcesCategory(resourcesCategory category);

    @Update(value = "UPDATE `resources-category` SET CONTENT = #{content}, ICON = #{icon} WHERE ID = #{id}")
    void updateResourcesCategoryById(resourcesCategory category);

    @Delete(value = "DELETE FROM `resources-category` WHERE ID = #{id}")
    void deleteResourcesCategoryById(@Param(value = "id")int id);
}

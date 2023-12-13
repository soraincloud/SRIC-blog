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

    @Select(value = "SELECT DISTINCT * FROM resources WHERE title LIKE concat('%',#{text},'%') or description LIKE concat('%',#{text},'%')")
    List<resources> getResourcesByText(@Param(value = "text")String text);

    @Update(value = "UPDATE resources SET VISITED = VISITED + 1 WHERE id = #{id}")
    void addResourceVisit(@Param(value = "id")int id);

    @Insert(value = "INSERT INTO resources values (null, #{title}, #{description}, #{category}, #{file}, #{visited}, #{tag}, #{size}, #{username}, #{date})")
    void addResource(resources resources);

    @Update(value = "UPDATE resources SET TITLE = #{title}, DESCRIPTION = #{description}, CATEGORY = #{category}, FILE = #{file}, VISITED = #{visited}, TAG = #{tag}, SIZE = #{size}, USERNAME = #{username}, DATE = #{date} WHERE ID = #{id}")
    void updateResource(resources resources);

    @Delete(value = "DELETE FROM resources WHERE ID = #{id}")
    void deleteResourceById(@Param(value = "id")int id);

    @Select(value = "SELECT * FROM `resources-category`")
    List<resourcesCategory> getAllResourcesCategory();

    @Insert(value = "INSERT INTO `resources-category` values (null, #{content}, #{icon})")
    void addResourcesCategory(resourcesCategory category);

    @Update(value = "UPDATE `resources-category` SET CONTENT = #{content}, ICON = #{icon} WHERE ID = #{id}")
    void updateResourcesCategoryById(resourcesCategory category);

    @Delete(value = "DELETE FROM `resources-category` WHERE ID = #{id}")
    void deleteResourcesCategoryById(@Param(value = "id")int id);
}

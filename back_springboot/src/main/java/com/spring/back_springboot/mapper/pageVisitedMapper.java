package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.pageVisited;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface pageVisitedMapper
{
    @Select(value="SELECT * FROM `page-visited`")
    List<pageVisited> getAllPageVisited();

    @Update(value="UPDATE `page-visited` SET VISITED = VISITED + 1 WHERE page = #{page}")
    void updateVisitedByPage(@Param(value = "page")String page);
}

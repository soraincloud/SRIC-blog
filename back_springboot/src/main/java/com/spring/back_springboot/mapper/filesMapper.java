package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.files;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface filesMapper
{
    @Select(value = "SELECT * FROM FILES")
    List<files> getAllFiles();

    @Insert(value = "INSERT INTO FILES values (null, #{file}, #{name}, #{type})")
    void AddFile(files files);

    @Select(value = "SELECT * FROM FILES WHERE ID = #{id}")
    files getFileById(@Param(value = "id")int id);
}

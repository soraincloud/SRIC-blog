package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.files;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface filesMapper
{
    @Select(value = "SELECT * FROM FILES")
    List<files> getAllFiles();

    @Select(value = "SELECT * FROM FILES WHERE name LIKE concat('%',#{text},'%')")
    List<files> getFilesByText(@Param(value = "text")String text);

    @Select(value = "SELECT id,name FROM FILES")
    List<files> getFilesNameList();

    @Insert(value = "INSERT INTO FILES values (null, #{file}, #{name}, #{type})")
    @SelectKey(keyProperty = "id",keyColumn = "id",before = false,resultType = Integer.class,statement = "select last_insert_id()")
    void AddFile(files files);

    @Select(value = "SELECT * FROM FILES WHERE ID = #{id}")
    files getFileById(@Param(value = "id")int id);
}

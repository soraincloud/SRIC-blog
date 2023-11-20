package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.languageText;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface indexAboutMapper
{
    @Select(value = "SELECT * FROM `index-about`")
    List<languageText> getAllIndexAbout();

    @Update(value = "UPDATE `index-about` SET text = #{text} WHERE ID = #{id}")
    void setIndexAboutById(@Param(value = "text") String text, @Param(value = "id") int id);
}

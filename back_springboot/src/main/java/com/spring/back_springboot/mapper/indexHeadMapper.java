package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.languageText;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface indexHeadMapper
{
    @Select(value = "SELECT * FROM `index-head`")
    List<languageText> getAllIndexHead();

    @Select(value = "SELECT * FROM `index-head-title`")
    List<languageText> getAllIndexHeadTitle();

    @Update(value = "UPDATE `index-head-title` SET text = #{text} WHERE ID = #{id}")
    void setIndexHeadById(@Param(value = "text") String text, @Param(value = "id") int id);

    @Update(value = "UPDATE `index-head` SET text = #{text} WHERE ID = #{id}")
    void setIndexHeadTitleById(@Param(value = "text") String text, @Param(value = "id") int id);

}

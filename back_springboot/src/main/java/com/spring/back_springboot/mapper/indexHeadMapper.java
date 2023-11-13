package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.languageText;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface indexHeadMapper
{
    @Select(value = "SELECT * FROM `index-head`")
    List<languageText> getAllIndexHead();

    @Select(value = "SELECT * FROM `index-head-title`")
    List<languageText> getAllIndexHeadTitle();
}

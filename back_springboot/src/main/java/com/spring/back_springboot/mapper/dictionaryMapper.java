package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.dictionary;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface dictionaryMapper
{
    @Select(value = "SELECT * FROM `dict_el_color_type`")
    List<dictionary> getDictElColorType();
}

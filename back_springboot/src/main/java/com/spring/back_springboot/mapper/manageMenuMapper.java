package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.manageMenuList;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface manageMenuMapper
{
    @Select(value = "SELECT * FROM `manage-navlist`")
    List<manageMenuList> getAllManageMenu();
}

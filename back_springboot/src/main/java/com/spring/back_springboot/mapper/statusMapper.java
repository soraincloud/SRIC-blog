package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.status;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface statusMapper
{
    @Select(value="SELECT * FROM STATUS")
    List<status> getAllStatus();
}

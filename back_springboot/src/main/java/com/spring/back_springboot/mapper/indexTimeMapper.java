package com.spring.back_springboot.mapper;
import com.spring.back_springboot.pojo.indexTime;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface indexTimeMapper
{
    @Select(value = "SELECT * FROM `index-time`")
    List<indexTime> getAllIndexTime();
}

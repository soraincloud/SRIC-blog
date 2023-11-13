package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.tag;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface tagMapper
{
    @Select(value="SELECT * FROM TAG WHERE UID = #{uid}")
    List<tag> getTagByUid(@Param(value = "uid") int uid);
}

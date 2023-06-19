package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.user;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface userMapper
{
    @Select(value="SELECT * FROM USER WHERE ID = #{id}")
    user GetUserById(@Param(value = "id") int id);

    @Select(value="SELECT * FROM USER WHERE USERNAME = #{username}")
    user GetUserByName(@Param(value = "username") String username);
}

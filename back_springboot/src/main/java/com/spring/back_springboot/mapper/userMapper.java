package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.user;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface userMapper
{
    @Select(value="SELECT * FROM USER WHERE ID = #{id}")
    user GetUserById(@Param(value = "id") int id);

    @Select(value="SELECT * FROM USER WHERE USERNAME = #{username}")
    user GetUserByName(@Param(value = "username") String username);

    @Update(value="UPDATE USER SET USERNAME = #{username} WHERE ID = #{id}")
    int UpdateNameById(@Param(value = "username") String username,@Param(value = "id") int id);
}

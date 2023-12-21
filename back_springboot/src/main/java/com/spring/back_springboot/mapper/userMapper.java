package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.user;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface userMapper
{
    @Select(value="SELECT * FROM USER WHERE ID = #{id}")
    user getUserById(@Param(value = "id") int id);

    @Select(value="SELECT * FROM USER WHERE USERNAME = #{username}")
    user getUserByName(@Param(value = "username") String username);

    @Update(value="UPDATE USER SET USERNAME = #{username} WHERE ID = #{id}")
    void updateNameById(@Param(value = "username") String username, @Param(value = "id") int id);

    @Update(value = "UPDATE USER SET PASSWORD = #{password} WHERE ID = #{id}")
    void updatePasswordById(@Param(value = "password") String password, @Param(value = "id") int id);

    @Update(value="UPDATE USER SET MARK = #{mark} WHERE ID = #{id}")
    void updateMarkById(@Param(value = "mark")String mark,@Param(value = "id") int id);

    @Update(value = "UPDATE USER SET AVATAR = #{avatar} WHERE ID = #{id}")
    void updateAvatarById(@Param(value = "avatar")int avatar,@Param(value = "id") int id);

    @Select(value="SELECT COUNT(*) FROM USER")
    int getUserCount();

    @Select(value="SELECT USERNAME FROM USER")
    List<String> getAllUsername();

    @Select(value = "SELECT USERNAME,AVATAR,MARK,STATUS FROM USER")
    List<user> getAllUserData();

    @Select(value = "SELECT * FROM USER WHERE USERNAME LIKE concat('%',#{username},'%')")
    List<user> getUserListByName(@Param(value = "username") String username);

    @Update(value = "UPDATE USER SET STATUS = #{status} WHERE USERNAME = #{username}")
    void updateStatus(user user);

    @Select(value = "SELECT STATUS FROM USER WHERE ID = #{id}")
    int getStatusById(@Param(value = "id") int id);
}

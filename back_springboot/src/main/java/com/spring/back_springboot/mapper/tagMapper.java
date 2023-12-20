package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.tag;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface tagMapper
{
    @Select(value="SELECT * FROM TAG WHERE UID = #{uid}")
    List<tag> getTagByUid(@Param(value = "uid") int uid);

    @Delete(value = "DELETE FROM TAG WHERE ID = #{id}")
    void deleteTagById(@Param(value = "id") int id);

    @Insert(value = "INSERT INTO TAG values (null, #{uid}, #{content})")
    void addTagById(tag tag);
}

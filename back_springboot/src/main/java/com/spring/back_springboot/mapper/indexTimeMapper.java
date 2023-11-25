package com.spring.back_springboot.mapper;
import com.spring.back_springboot.pojo.indexTime;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface indexTimeMapper
{
    @Select(value = "SELECT * FROM `index-time`")
    List<indexTime> getAllIndexTime();

    @Update(value = "UPDATE `index-time` SET CONTENT = #{content}, TIMESTMAP = #{timestmap}, TYPE = #{type}, COLOR = #{color} WHERE ID = #{id}")
    void updateTimeById(
            @Param(value = "content") String content,
            @Param(value = "timestmap") String timestmap,
            @Param(value = "type") String type,
            @Param(value = "color") String color,
            @Param(value = "id") int id
    );

    @Delete(value = "DELETE FROM `index-time` WHERE ID = #{id}")
    void deleteTimeById(@Param(value = "id") int id);

    @Select(value = "SELECT * FROM `index-time` WHERE CONTENT LIKE '%#{text}%'")
    List<indexTime> getTimeByText(@Param(value = "text")String text);
}

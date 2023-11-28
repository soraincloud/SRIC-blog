package com.spring.back_springboot.mapper;
import com.spring.back_springboot.pojo.indexTime;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface indexTimeMapper
{
    @Select(value = "SELECT * FROM `index-time`")
    List<indexTime> getAllIndexTime();

    @Update(value = "UPDATE `index-time` SET CONTENT = #{content}, TIMESTAMP = #{timestamp}, TYPE = #{type}, COLOR = #{color} WHERE ID = #{id}")
    void updateTimeById(indexTime time);

    @Delete(value = "DELETE FROM `index-time` WHERE ID = #{id}")
    void deleteTimeById(@Param(value = "id") int id);

    @Select(value = "SELECT * FROM `index-time` WHERE CONTENT LIKE concat('%',#{text},'%')")
    List<indexTime> getTimeByText(@Param(value = "text")String text);

    @Select(value = "SELECT * FROM `index-time` WHERE TIMESTAMP LIKE concat('%',#{time},'%')")
    List<indexTime> getTimeByTime(@Param(value = "time")String time);

    @Select(value = "SELECT * FROM `index-time` WHERE DATE_FORMAT(timestamp,'%Y') = #{year}")
    List<indexTime> getTimeByYear(@Param(value = "year")String year);

    @Insert(value = "INSERT INTO `index-time` values (null, #{content}, #{timestamp}, #{type}, #{color})")
    @SelectKey(keyProperty = "id",keyColumn = "id",before = false,resultType = Integer.class,statement = "select last_insert_id()")
    void addIndexTime(indexTime time);
}

package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.notes;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface notesMapper
{
    @Select(value = "SELECT * FROM notes")
    List<notes> GetAllNotes();
}

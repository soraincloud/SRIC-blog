package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface notesMapper
{
    @Select(value = "SELECT * FROM notes")
    List<notes> GetAllNotes();

    @Select(value = "SELECT * FROM notes WHERE category = #{category}")
    List<notes> GetNotesByCategory(@Param(value = "category") String category);

    @Select(value = "SELECT * FROM notes WHERE id = #{id}")
    notes GetNoteById(@Param(value = "id")int id);

    @Update(value = "UPDATE NOTES SET VISITED = VISITED + 1 WHERE id = #{id}")
    void addNoteVisit(@Param(value = "id")int id);

    @Select(value = "SELECT * FROM `notes-category`")
    List<notesCategory> getAllNotesCategory();
}

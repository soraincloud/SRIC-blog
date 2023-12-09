package com.spring.back_springboot.mapper;

import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface notesMapper
{
    @Select(value = "SELECT * FROM notes")
    List<notes> getAllNotes();

    @Select(value = "SELECT * FROM notes WHERE category = #{category}")
    List<notes> getNotesByCategory(@Param(value = "category") String category);

    @Select(value = "SELECT * FROM notes WHERE id = #{id}")
    notes getNoteById(@Param(value = "id")int id);

    @Select(value = "SELECT DISTINCT * FROM notes WHERE title LIKE concat('%',#{text},'%') or description LIKE concat('%',#{text},'%')")
    List<notes> getNotesByText(@Param(value = "text")String text);

    @Update(value = "UPDATE NOTES SET VISITED = VISITED + 1 WHERE id = #{id}")
    void addNoteVisit(@Param(value = "id")int id);

    @Insert(value = "INSERT INTO notes values (null, #{title}, #{description}, #{category}, #{md}, #{visited}, #{uid}, #{username}, #{date})")
    void addNote(notes note);

    @Update(value = "UPDATE notes SET TITLE = #{title}, DESCRIPTION = #{description}, CATEGORY = #{category}, MD = #{md}, VISITED = #{visited}, UID = #{uid}, USERNAME = #{username}, DATE = #{date} WHERE ID = #{id}")
    void updateNote(notes note);

    @Delete(value = "DELETE FROM notes WHERE ID = #{id}")
    void deleteNoteById(@Param(value = "id")int id);

    @Select(value = "SELECT * FROM `notes-category`")
    List<notesCategory> getAllNotesCategory();

    @Insert(value = "INSERT INTO `notes-category` values (null, #{content}, #{icon})")
    void addNotesCategory(notesCategory category);

    @Update(value = "UPDATE `notes-category` SET CONTENT = #{content}, ICON = #{icon} WHERE ID = #{id}")
    void updateNotesCategoryById(notesCategory category);

    @Delete(value = "DELETE FROM `notes-category` WHERE ID = #{id}")
    void deleteNotesCategoryById(@Param(value = "id")int id);
}

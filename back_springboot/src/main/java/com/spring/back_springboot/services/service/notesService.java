package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;

import java.util.List;

public interface notesService
{
    List<notes> getAllNotes();
    List<notes> getNotesByCategory(String category);
    notes getNoteById(int id);
    List<notes> getNotesByText(String text);
    void addNoteVisit(int id);
    void addNote(notes note);
    void updateNote(notes note);
    void deleteNoteById(int id);
    List<notesCategory> getAllNotesCategory();
    void addNotesCategory(notesCategory category);
    void updateNotesCategoryById(notesCategory category);
    void deleteNotesCategoryById(int id);
}

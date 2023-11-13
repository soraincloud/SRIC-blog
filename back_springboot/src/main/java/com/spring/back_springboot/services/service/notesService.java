package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;

import java.util.List;

public interface notesService
{
    List<notes> GetAllNotes();
    List<notes> GetNotesByCategory(String category);
    notes GetNoteById(int id);
    void addNoteVisit(int id);
    List<notesCategory> getAllNotesCategory();
}

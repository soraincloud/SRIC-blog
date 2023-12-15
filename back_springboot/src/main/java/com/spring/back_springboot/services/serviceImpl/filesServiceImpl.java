package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.filesMapper;
import com.spring.back_springboot.pojo.files;
import com.spring.back_springboot.services.service.filesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class filesServiceImpl implements filesService
{
    @Autowired
    filesMapper mapper;

    @Override
    public List<files> getAllFiles()
    {
        return mapper.getAllFiles();
    }

    @Override
    public void AddFile(files files)
    {
        mapper.AddFile(files);
    }

    @Override
    public files saveFile(MultipartFile file)
    {
        String dir = System.getProperty("user.dir");
        dir += "\\files";
        File saveDir = new File(dir);

        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");
        String dateString = formatter.format(date);
        int num = (int)(Math.random()*9000)+1000;//1000-9999
        dateString += "-";
        dateString += String.valueOf(num);
        String fileName = file.getOriginalFilename();
        String type = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        dateString += ".";
        dateString += type;

        try {
            FileOutputStream fileOutputStream = new FileOutputStream(saveDir + "/" + dateString);
            fileOutputStream.write(file.getBytes());
            fileOutputStream.flush();
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        files files = new files();
        files.setName(fileName);
        files.setFile(dateString);
        files.setType(type);
        return files;
    }

    @Override
    public String readMd(String direc)
    {
        String dir = System.getProperty("user.dir");
        dir += "\\files\\";
        dir += direc;
        String mdText = "";
        try
        {
            mdText = Files.readString(Paths.get(dir));
        }
        catch(IOException e)
        {
            e.printStackTrace();
        }
        return mdText;
    }

    @Override
    public files getFileById(int id)
    {
        return mapper.getFileById(id);
    }
}

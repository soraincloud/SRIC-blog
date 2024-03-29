package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.filesMapper;
import com.spring.back_springboot.pojo.files;
import com.spring.back_springboot.services.service.filesService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import static com.spring.back_springboot.tools.tools.imageToBase64;

@Service
public class filesServiceImpl implements filesService
{
    @Autowired
    filesMapper mapper;

    @Override
    public List<files> getAllFiles()
    {
        List<files> fileList;
        fileList = mapper.getAllFiles();
        for(int i = 0;i < fileList.size();i++)
        {
            String file =  fileList.get(i).getFile();
            String date = file.substring(0,10);
            fileList.get(i).setFile(date);
        }
        return fileList;
    }

    @Override
    public List<files> getFilesByText(String text)
    {
        return mapper.getFilesByText(text);
    }

    @Override
    public List<files> getFilesNameList()
    {
        return mapper.getFilesNameList();
    }

    @Override
    public int AddFile(files files)
    {
        mapper.AddFile(files);
        return files.getId();
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
    public void writeMd(files files)
    {
        String dir = System.getProperty("user.dir");
        dir += "\\files";
        File saveDir = new File(dir);

        try {
            FileOutputStream fileOutputStream = new FileOutputStream(saveDir + "/" + files.getFile());
            fileOutputStream.write(files.getMarkdownText().getBytes());
            fileOutputStream.flush();
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public files getFileById(int id)
    {
        return mapper.getFileById(id);
    }

    @Override
    public String getAvatarById(int id)
    {
        files files = mapper.getFileById(id);
        String dir = System.getProperty("user.dir");
        dir += "\\files\\";
        dir += files.getFile();
        String base64Str = "data:image/webp;base64,";
        base64Str += imageToBase64(dir);
        return base64Str;
    }
}

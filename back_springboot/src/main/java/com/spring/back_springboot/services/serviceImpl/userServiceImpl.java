package com.spring.back_springboot.services.serviceImpl;

import cn.dev33.satoken.stp.StpUtil;
import com.spring.back_springboot.mapper.filesMapper;
import com.spring.back_springboot.mapper.userMapper;
import com.spring.back_springboot.pojo.files;
import com.spring.back_springboot.pojo.user;
import com.spring.back_springboot.result.code;
import com.spring.back_springboot.services.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.spring.back_springboot.tools.tools.imageToBase64;

@Service
public class userServiceImpl implements userService
{
    @Autowired
    userMapper mapper;

    @Autowired
    filesMapper filesMapper;

    @Override
    public user getUserById(int id)
    {
        return mapper.getUserById(id);
    }

    @Override
    public user getUserByName(String username)
    {
        return mapper.getUserByName(username);
    }

    @Override
    public void updateNameById(String username, int id)
    {
        mapper.updateNameById(username,id);
    }

    @Override
    public void updatePasswordById(String password,int id)
    {
        mapper.updatePasswordById(password,id);
    }

    @Override
    public void updateMarkById(String mark,int id)
    {
        mapper.updateMarkById(mark,id);
    }

    @Override
    public void updateAvatarById(int avatar,int id)
    {
        mapper.updateAvatarById(avatar,id);
    }

    @Override
    public int getUserCount()
    {
        return mapper.getUserCount();
    }

    @Override
    public List<String> getAllUsername()
    {
        return mapper.getAllUsername();
    }

    @Override
    public List<user> getAllUserData()
    {
        List<user> userList = mapper.getAllUserData();
        userList = getAvatarForListAndAddBool(userList);
        return userList;
    }

    @Override
    public List<user> getUserListByName(String username)
    {
        List<user> userList = mapper.getUserListByName(username);
        userList = getAvatarForListAndAddBool(userList);
        return userList;
    }

    public List<user> getAvatarForListAndAddBool(List<user> userList)
    {
        for(int i = 0;i < userList.size();i++)
        {
            int avatar = userList.get(i).getAvatar();
            if(avatar != 0)
            {
                files files = filesMapper.getFileById(avatar);
                String dir = System.getProperty("user.dir");
                dir += "\\files\\";
                dir += files.getFile();
                String base64Str = "data:image/webp;base64,";
                base64Str += imageToBase64(dir);
                userList.get(i).setAvatarBase64(base64Str);
            }
            if(userList.get(i).getStatus() == 0)
            {
                userList.get(i).setStatusBool(false);
            }
            else
            {
                userList.get(i).setStatusBool(true);
            }
        }
        return userList;
    }

    @Override
    public void updateStatus(user user)
    {
        mapper.updateStatus(user);
    }

    @Override
    public code visitManage(String tokenValue)
    {
        int id = Integer.parseInt(StpUtil.getLoginIdByToken(tokenValue).toString());
        int status = mapper.getStatusById(id);
        if(status == 1)
        {
            return new code(200);
        }
        else
        {
            return new code(400);
        }
    }
}

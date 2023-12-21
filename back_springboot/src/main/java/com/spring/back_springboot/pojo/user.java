package com.spring.back_springboot.pojo;

import lombok.Data;
import java.lang.String;

@Data
public class user
{
    private int id;
    private String username;
    private String password;
    private int avatar;
    private String avatarBase64;
    private String phonenumber;
    private String email;
    private String mark;
    private int status;
    private boolean statusBool;

    public void markPhoneNumber()
    {
        int length = phonenumber.length();
        String markPhoneNumber = "";
        markPhoneNumber += phonenumber.substring(0,3);
        markPhoneNumber += "****";
        markPhoneNumber += phonenumber.substring(length - 4,length);
        phonenumber = markPhoneNumber;
    }

    public void markEmail()
    {
        int length = email.length();
        String markEmail = "";
        markEmail += email.substring(0,3);
        markEmail += "****";
        markEmail += email.substring(length - 8,length);
        email = markEmail;
    }
}

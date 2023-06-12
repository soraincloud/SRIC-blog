package com.spring.back_springboot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value={"com.spring.back_springboot.mapper"})
public class BackSpringbootApplication
{

    public static void main(String[] args) {
        SpringApplication.run(BackSpringbootApplication.class, args);
    }

}

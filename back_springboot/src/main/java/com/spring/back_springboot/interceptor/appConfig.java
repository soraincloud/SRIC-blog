package com.spring.back_springboot.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class appConfig implements WebMvcConfigurer
{
    @Autowired
    private intercept intercept;

    @Override
    public void addInterceptors(InterceptorRegistry registry)
    {
        registry.addInterceptor(intercept)
                .addPathPatterns("/**");
    }
}

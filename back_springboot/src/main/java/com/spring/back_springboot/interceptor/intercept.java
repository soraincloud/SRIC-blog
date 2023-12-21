package com.spring.back_springboot.interceptor;

import cn.dev33.satoken.stp.StpUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class intercept implements HandlerInterceptor
{
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,Object handler) throws Exception
    {
        String tokenValue = request.getHeader("token");
        if(tokenValue == null)//未登录
        {

        }
        else
        {
            Object loginId = StpUtil.getLoginIdByToken(tokenValue);
            if(loginId == null)//token过期
            {
                return false;
            }
        }
        return true;
    }
}

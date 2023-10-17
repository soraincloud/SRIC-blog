# **SRIC-blog**
 **soraincloud's blog**

------

# 0.项目本地部署

## 0.环境需求

需要以下支持

```
Node.js (需要npm下载器)
vsCode (便于前端代码编辑和查看)
intellij idea (后端java) 
--|maven (引入到idea 用于依赖引入)
mysql
```

> **注意**  请尽量选择兼容的软件版本

```
mysql 版本为 5.7.42.0
SDK 使用 corretto-1.8 openjdk-19.0.1
```

如果启动项目失败可以尝试更改版本

## 1.前端部署

使用 **vsCode** 打开 front_vue3 文件夹 并新建终端

使用指令：

```
npm install
```

安装所需依赖

使用指令：

```
npm run serve
```

运行前端

访问：

```
localhost:8080/index
```

访问主页面

## 2.后端部署

使用 idea 打开 back_springboot 文件夹

> **注意** idea 需要安装 maven

打开 pom.xml 配置文件 使用 maven 更新依赖

可能还需要配置 数据库相关设置

## 3.数据库配置

安装 mysql 记住 **端口 用户名 密码**

在 后端 ( back_springboot ) 找到

```
src/main/resources/application.properties
```

修改其中配置

默认：

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sric-blog?characterEncoding=UTF-8
spring.datasource.username=root
spring.datasource.password=admin
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.hibernate.ddl-auto = none
```

修改：

```properties
spring.datasource.url=jdbc:mysql://localhost:[数据库端口]/sric-blog?characterEncoding=UTF-8
spring.datasource.username=[用户名]
spring.datasource.password=[密码]
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.hibernate.ddl-auto = none
```

> **注意** 端口 用户名 密码 是 mysql 安装时 设置的

配置完成

打开 sql_mysql 文件夹

在 mysql 中运行查询 **sric-blog.sql**

完成配置

------

# **ε= ε= ε= (ノ≧ ∇ ≦ )ノ**
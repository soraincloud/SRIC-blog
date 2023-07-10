# SRIC-blog
 soraincloud's blog



you need **npm** to run front_vue3

just download Node.js



if you want to run the serve,use

```
npm install
```

to download models

and use

```
npm run serve
```

to run the serve

------

if you want to run back_springboot

you need **maven**



run your maven by the file **pom.xml**

then run **BackSpringbootApplication**

------

you may need to download **mysql**

set your name and password of **mysql**

and set them in **application.properties**,like

```
spring.datasource.url=jdbc:mysql://localhost:3306/sric-blog?characterEncoding=UTF-8
spring.datasource.username=root
spring.datasource.password=admin
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.hibernate.ddl-auto = none
```

**3306** is your mysql port

**spring.datasource.username** is your username

**spring.datasource.password** is your password

------

*my mysql version is* **5.7.42.0**

if you cant run the springboot serve

try to change the version

------

awa
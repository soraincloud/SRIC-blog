/*
 Navicat Premium Data Transfer

 Source Server         : test-connect
 Source Server Type    : MySQL
 Source Server Version : 80035
 Source Host           : localhost:3306
 Source Schema         : sric-blog

 Target Server Type    : MySQL
 Target Server Version : 80035
 File Encoding         : 65001

 Date: 20/12/2023 10:29:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dict_el_color_type
-- ----------------------------
DROP TABLE IF EXISTS `dict_el_color_type`;
CREATE TABLE `dict_el_color_type`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '显示文字',
  `value` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '值',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of dict_el_color_type
-- ----------------------------
INSERT INTO `dict_el_color_type` VALUES (1, 'primary', 'primary');
INSERT INTO `dict_el_color_type` VALUES (2, 'success', 'success');
INSERT INTO `dict_el_color_type` VALUES (3, 'info', 'info');
INSERT INTO `dict_el_color_type` VALUES (4, 'warning', 'warning');
INSERT INTO `dict_el_color_type` VALUES (5, 'danger', 'danger');

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `file` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '文件',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '名称',
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '文件格式',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES (1, '2023-12-15-15-37-09-1610.md', 'NULL.md', 'md');
INSERT INTO `files` VALUES (2, '2023-12-15-15-37-22-8162.md', 'SPRING001.md', 'md');
INSERT INTO `files` VALUES (3, '2023-12-15-15-37-27-5315.md', 'C001.md', 'md');
INSERT INTO `files` VALUES (4, '2023-12-15-15-37-51-7191.md', 'VUE001.md', 'md');
INSERT INTO `files` VALUES (5, '2023-12-15-15-37-57-6526.md', 'VUE002.md', 'md');
INSERT INTO `files` VALUES (6, '2023-12-15-15-38-04-6311.md', 'VUE003.md', 'md');
INSERT INTO `files` VALUES (7, '2023-12-15-15-38-10-4057.md', 'VUE004.md', 'md');
INSERT INTO `files` VALUES (8, '2023-12-15-15-38-14-8395.md', 'VUE005.md', 'md');
INSERT INTO `files` VALUES (9, '2023-12-15-15-38-21-9804.md', 'COOK001.md', 'md');
INSERT INTO `files` VALUES (10, '2023-12-15-15-38-26-9469.md', 'COOK002.md', 'md');
INSERT INTO `files` VALUES (11, '2023-12-20-02-38-05-4267.webp', '  (3).webp', 'webp');
INSERT INTO `files` VALUES (12, '2023-12-20-10-28-26-1062.webp', '  (2).webp', 'webp');

-- ----------------------------
-- Table structure for index-about
-- ----------------------------
DROP TABLE IF EXISTS `index-about`;
CREATE TABLE `index-about`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `language` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '语言',
  `text` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '对应文字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '主页关于文字' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of index-about
-- ----------------------------
INSERT INTO `index-about` VALUES (1, 'zh', '欢迎来到我的博客 ! ( ＾∀＾)/\r\n它由 VUE3 与 springboot 实现\r\n应该会写一些小文章在这里, 记录一下\r\n不过或许我想多做一些东西在博客里面\r\n所以关于文章的内容并不会出现在这个首页 ~\r\n这里就是一些展示和很多奇奇怪怪的东西\r\n新功能应该会不断出现在顶部的导航栏\r\n快逛逛吧 ~ (>▽');
INSERT INTO `index-about` VALUES (2, 'en', 'welcome to my blog ! ( ＾∀＾)/\nit is implenented by VUE3 and springboot\nI will write some note here to have a record\nbut maybe i want to put more things in it\nso all things about note will not be put in here ~\nthis place is just for showing some interesting things\nnew things will come right in navMenu\njust have fun ~ (>▽');
INSERT INTO `index-about` VALUES (3, 'warma', '欢营来到沃的展示地 ! ( ＾∀＾)/\r\n它用 VUE3 与 springboot 做真\r\n鹰该会写一些小记字在这里, 划标一下\r\n不过货许我想多做一些西东在展示地里面\r\n所以有意思与文章的容内并不会出现在这个初见页 ~\r\n这里就世一些示出和很多齐齐怪怪的西东\r\n新工能应该会不断出现在头上的指路栏\r\n快咣咣吧 ~ (>▽');

-- ----------------------------
-- Table structure for index-head
-- ----------------------------
DROP TABLE IF EXISTS `index-head`;
CREATE TABLE `index-head`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `language` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '语言',
  `text` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '对应文字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '主页标题下文字' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of index-head
-- ----------------------------
INSERT INTO `index-head` VALUES (1, 'zh', '欢迎来到我的博客 ! ( ＾∀＾)/\n或许会有很多有意思的东西, 现在就开始吧 !');
INSERT INTO `index-head` VALUES (2, 'en', 'welcome to my blog ! ( ＾∀＾)/\nMaybe we have a lot of interesting stuff, so lets start now !');
INSERT INTO `index-head` VALUES (3, 'warma', '欢赢来到我的展示地 ! ( ＾∀＾)/\n或栩会有多多有意思的西东, 现在就开使吧 !');

-- ----------------------------
-- Table structure for index-head-title
-- ----------------------------
DROP TABLE IF EXISTS `index-head-title`;
CREATE TABLE `index-head-title`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `language` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '语言',
  `text` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '对应文字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '主页标题文字' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of index-head-title
-- ----------------------------
INSERT INTO `index-head-title` VALUES (1, 'zh', 'SRIC \'s BLOG');
INSERT INTO `index-head-title` VALUES (2, 'en', 'SRIC \'s BLOG');
INSERT INTO `index-head-title` VALUES (3, 'warma', 'SRIC \'s BLOG');

-- ----------------------------
-- Table structure for index-time
-- ----------------------------
DROP TABLE IF EXISTS `index-time`;
CREATE TABLE `index-time`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `content` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '内容',
  `timestamp` date NULL DEFAULT NULL COMMENT '时间',
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '外圈颜色',
  `color` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '内部颜色',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '主页活动时间轴' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of index-time
-- ----------------------------
INSERT INTO `index-time` VALUES (1, 'create', '2023-06-12', 'danger', '#ffffff');
INSERT INTO `index-time` VALUES (2, 'add more pages', '2023-07-13', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (3, 'pack css', '2023-07-13', 'danger', '#ffffff');
INSERT INTO `index-time` VALUES (4, 'add personal page', '2023-07-16', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (5, 'add login', '2023-07-19', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (6, 'pack js', '2023-08-07', 'danger', '#ffffff');
INSERT INTO `index-time` VALUES (7, 'add language change', '2023-08-13', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (8, 'add back to top button', '2023-09-14', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (9, 'add change name and mark', '2023-09-15', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (10, 'add safety page', '2023-09-19', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (11, 'add some transition', '2023-09-22', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (12, 'add sign up page', '2023-09-26', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (13, 'add note show page', '2023-09-28', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (14, 'change images to webp', '2023-10-07', 'danger', '#ffffff');
INSERT INTO `index-time` VALUES (15, 'add change head page', '2023-10-10', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (16, 'add forun page', '2023-10-11', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (17, 'update README', '2023-10-17', 'warning', '#ffffff');
INSERT INTO `index-time` VALUES (18, 'Register All Icons', '2023-10-20', 'danger', '#ffffff');
INSERT INTO `index-time` VALUES (19, 'add resources category', '2023-10-23', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (20, 'add copy clipboard', '2023-10-24', 'success', '#ffffff');
INSERT INTO `index-time` VALUES (21, 'use interceptors and promise', '2023-10-25', 'danger', '#ffffff');
INSERT INTO `index-time` VALUES (22, 'add loading transition', '2023-10-26', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (23, 'add vue3-puzzle-vcode to intercept login', '2023-10-26', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (24, 'add manage page', '2023-10-27', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (25, 'add manage bar', '2023-10-31', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (26, 'import sa-token', '2023-11-02', 'warning', '#FFFFFF');
INSERT INTO `index-time` VALUES (27, 'add manage menu', '2023-11-02', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (28, 'add collapse menu', '2023-11-03', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (29, 'fix manage page flex style', '2023-11-07', 'danger', '#FFFFFF');
INSERT INTO `index-time` VALUES (30, 'add page visited count', '2023-11-08', 'warning', '#FFFFFF');
INSERT INTO `index-time` VALUES (31, 'add resources show page to download files', '2023-11-09', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (32, 'let language save in local storage', '2023-11-10', 'danger', '#FFFFFF');
INSERT INTO `index-time` VALUES (33, 'delete some useless components and fix some bugs', '2023-11-13', 'danger', '#FF8F8F');
INSERT INTO `index-time` VALUES (34, 'add manage home page', '2023-11-14', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (35, 'add changing index head and title', '2023-11-14', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (36, 'fix index head manage page', '2023-11-20', 'warning', '#FFFFFF');
INSERT INTO `index-time` VALUES (37, 'update mysql to 8.0.35', '2023-11-21', 'primary', '#FF5F5F');
INSERT INTO `index-time` VALUES (38, 'add manage index time page', '2023-11-22', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (39, 'fix index time edit', '2023-11-23', 'danger', '#FFFFFF');
INSERT INTO `index-time` VALUES (40, 'fix index time delete', '2023-11-23', 'danger', '#FFFFFF');
INSERT INTO `index-time` VALUES (41, 'update loading transitions and some components', '2023-11-24', 'warning', '#FFFFFF');
INSERT INTO `index-time` VALUES (42, 'add search and refresh for time manage page', '2023-11-25', 'success', '#FFFFFF');
INSERT INTO `index-time` VALUES (43, 'add index time add', '2023-11-28', 'success', '#FFFFFF');

-- ----------------------------
-- Table structure for manage-navlist
-- ----------------------------
DROP TABLE IF EXISTS `manage-navlist`;
CREATE TABLE `manage-navlist`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '' COMMENT '菜单名',
  `navItem` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '菜单文字',
  `icon` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '对应图标',
  `zh` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '中文文字',
  `en` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '英文文字',
  `warma` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '沃沃文字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '管理页面动态菜单' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of manage-navlist
-- ----------------------------
INSERT INTO `manage-navlist` VALUES (1, 'manageHome', '', 'HomeFilled', '主页管理', 'manage home', '主面管管');
INSERT INTO `manage-navlist` VALUES (2, 'manageTime', '', 'InfoFilled', '日志管理', 'manage log', '时表管管');
INSERT INTO `manage-navlist` VALUES (3, 'manageNotesCategory', '', 'List', '笔记分类', 'notes category', '记纸类类');
INSERT INTO `manage-navlist` VALUES (4, 'manageNotes', '', 'Checked', '笔记管理', 'manage notes', '记纸管管');
INSERT INTO `manage-navlist` VALUES (5, 'manageResourcesCategory', '', 'List', '资源分类', 'resources category', '材源类类');
INSERT INTO `manage-navlist` VALUES (6, 'manageResources', '', 'Checked', '资源管理', 'manage resources', '材源管管');

-- ----------------------------
-- Table structure for notes
-- ----------------------------
DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'NULL TYTLE' COMMENT '标题',
  `description` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'NO DESCRIPTION' COMMENT '描述',
  `category` int NOT NULL DEFAULT 1 COMMENT '类别',
  `md` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '对应文件ID',
  `visited` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '访问次数',
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '提供者用户名',
  `date` date NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '笔记' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of notes
-- ----------------------------
INSERT INTO `notes` VALUES (1, 'NULL TYTLE', 'NO DESCRIPTION', -1, 1, 31, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (2, '后端四层架构', 'SPRINGBOOT 与 MYBATIS 后端四层架构的主要构建方法 （一种）', 3, 2, 9, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (3, '二叉树', '这是一篇关于二叉树的笔记，非常的基础，如果你忘记了关于二叉树的内容，可以瞅瞅', 1, 3, 2, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (4, 'vue3项目的创建', '@vuecli对vue3项目的创建与依赖的引入', 2, 4, 1, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (5, 'vue-axios', 'VUE中前后端数据传输axios', 2, 5, 0, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (6, 'vue-router', 'VUE中的路由vue-router', 2, 6, 0, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (7, 'VUE传值', 'VUE中组件间的传值与VUEX', 2, 7, 4, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (8, 'VUE动画效果', 'VUE中的简单动画效果', 2, 8, 0, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (9, '红烧肉', '简易的红烧肉 做法', 4, 9, 1, 'SRIC', '2023-12-05');
INSERT INTO `notes` VALUES (10, '番茄牛腩', '不加水的番茄牛腩 怎么做', 4, 10, 0, 'SRIC', '2023-12-05');

-- ----------------------------
-- Table structure for notes-category
-- ----------------------------
DROP TABLE IF EXISTS `notes-category`;
CREATE TABLE `notes-category`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `content` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '内容',
  `icon` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '对应图标',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '笔记类别' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of notes-category
-- ----------------------------
INSERT INTO `notes-category` VALUES (1, '算法', 'Opportunity');
INSERT INTO `notes-category` VALUES (2, '前端', 'Platform');
INSERT INTO `notes-category` VALUES (3, '后端', 'Histogram');
INSERT INTO `notes-category` VALUES (4, '做饭', 'KnifeFork');

-- ----------------------------
-- Table structure for page-visited
-- ----------------------------
DROP TABLE IF EXISTS `page-visited`;
CREATE TABLE `page-visited`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `page` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '页面',
  `visited` int UNSIGNED NOT NULL COMMENT '访问次数',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '页面访问次数' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of page-visited
-- ----------------------------
INSERT INTO `page-visited` VALUES (1, 'main', 932);
INSERT INTO `page-visited` VALUES (2, 'index', 209);
INSERT INTO `page-visited` VALUES (3, 'notes', 123);
INSERT INTO `page-visited` VALUES (4, 'resources', 86);
INSERT INTO `page-visited` VALUES (5, 'forum', 10);
INSERT INTO `page-visited` VALUES (6, 'personal', 70);
INSERT INTO `page-visited` VALUES (7, 'function', 20);

-- ----------------------------
-- Table structure for resources
-- ----------------------------
DROP TABLE IF EXISTS `resources`;
CREATE TABLE `resources`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'NULL TYTLE' COMMENT '标题',
  `description` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'NO DESCRIPTION' COMMENT '描述',
  `category` int NOT NULL DEFAULT -1 COMMENT '类别',
  `file` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '对应文件ID',
  `visited` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '访问次数',
  `tag` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'NULL' COMMENT '标签',
  `size` double NULL DEFAULT NULL COMMENT '文件大小',
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '提供者用户名',
  `date` date NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '资源' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of resources
-- ----------------------------
INSERT INTO `resources` VALUES (1, 'C001.md', '二叉树文档的md文件', 1, 3, 95, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (2, 'NULL.md', '为未分类的笔记提供默认显示的md文件', -1, 1, 12, 'NULL', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (3, 'COOK001.md', '红烧肉文档的md文件', 1, 9, 1, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (4, 'COOK002.md', '番茄牛腩文档的md文件', 1, 10, 0, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (5, 'VUE005.md', 'VUE动画效果文档的md文件', 1, 8, 0, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (6, 'SPRING001.md', '后端四层架构文档的md文件', 1, 2, 1, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (7, 'VUE001.md', 'vue3项目的创建文档的md文件', 1, 4, 0, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (8, 'VUE002.md', 'vue-axios文档的md文件', 1, 5, 0, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (9, 'VUE003.md', 'vue-router文档的md文件', 1, 6, 0, 'markdown', 0, 'SRIC', '2023-12-05');
INSERT INTO `resources` VALUES (10, 'VUE004.md', 'VUE传值文档的md文件', 1, 7, 0, 'markdown', 0, 'SRIC', '2023-12-05');

-- ----------------------------
-- Table structure for resources-category
-- ----------------------------
DROP TABLE IF EXISTS `resources-category`;
CREATE TABLE `resources-category`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `content` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '类别',
  `icon` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'Menu' COMMENT '对应图标',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '资源类别' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of resources-category
-- ----------------------------
INSERT INTO `resources-category` VALUES (1, 'markdown', 'EditPen');
INSERT INTO `resources-category` VALUES (2, 'png', 'Picture');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `uid` int UNSIGNED NOT NULL COMMENT '对应用户ID',
  `content` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '用户标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 1, 'nia');
INSERT INTO `tag` VALUES (2, 1, 'neko');
INSERT INTO `tag` VALUES (3, 1, 'qwq');
INSERT INTO `tag` VALUES (4, 1, 'awa');
INSERT INTO `tag` VALUES (5, 2, 'homo');
INSERT INTO `tag` VALUES (6, 2, '114514');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '密码',
  `avatar` int UNSIGNED NULL DEFAULT NULL COMMENT '头像',
  `phonenumber` varchar(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '电话号码',
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '邮箱',
  `mark` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'NULL' COMMENT '个人描述',
  `status` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '权限',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '用户' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'SRIC', 'abe4618871b8413bdfb1777f1db128b6', 11, '11451419198', '114514@qq.com', 'SORAINCLOUD YEAH！！！', 1);
INSERT INTO `user` VALUES (2, 'homo', '46cdf9fce44f17b47ef33cd4d9bd99f4', 12, '11451419198', '1919810@homo.com', '114514', 0);

SET FOREIGN_KEY_CHECKS = 1;

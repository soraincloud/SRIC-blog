/*
 Navicat Premium Data Transfer

 Source Server         : test-connect
 Source Server Type    : MySQL
 Source Server Version : 50742
 Source Host           : localhost:3306
 Source Schema         : sric-blog

 Target Server Type    : MySQL
 Target Server Version : 50742
 File Encoding         : 65001

 Date: 19/10/2023 20:08:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for indextime
-- ----------------------------
DROP TABLE IF EXISTS `indextime`;
CREATE TABLE `indextime`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `timestmap` date NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of indextime
-- ----------------------------
INSERT INTO `indextime` VALUES (1, 'create', '2023-06-12', 'danger', 'white');
INSERT INTO `indextime` VALUES (2, 'add more pages', '2023-07-13', 'danger', 'white');
INSERT INTO `indextime` VALUES (3, 'pack css', '2023-07-13', 'danger', 'white');
INSERT INTO `indextime` VALUES (4, 'add personal page', '2023-07-16', 'danger', 'white');
INSERT INTO `indextime` VALUES (5, 'add login', '2023-07-19', 'danger', 'white');
INSERT INTO `indextime` VALUES (6, 'pack js', '2023-08-07', 'danger', 'white');
INSERT INTO `indextime` VALUES (7, 'add language change', '2023-08-13', 'danger', 'white');
INSERT INTO `indextime` VALUES (8, 'add back to top button', '2023-09-14', 'danger', 'white');
INSERT INTO `indextime` VALUES (9, 'add change name and mark', '2023-09-15', 'danger', 'white');
INSERT INTO `indextime` VALUES (10, 'add safety page', '2023-09-19', 'danger', 'white');

-- ----------------------------
-- Table structure for notes
-- ----------------------------
DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NULL TYTLE',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NO DESCRIPTION',
  `category` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `md` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NULL.md',
  `visited` int(12) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notes
-- ----------------------------
INSERT INTO `notes` VALUES (1, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 3);
INSERT INTO `notes` VALUES (2, '后端四层架构', 'SPRINGBOOT 与 MYBATIS 后端四层架构的主要构建方法 （一种）', 4, 'SPRING001.md', 4);
INSERT INTO `notes` VALUES (3, '二叉树', '这是一篇关于二叉树的笔记，非常的基础，如果你忘记了关于二叉树的内容，可以瞅瞅', 2, 'C001.md', 0);
INSERT INTO `notes` VALUES (4, 'vue3项目的创建', '@vuecli对vue3项目的创建与依赖的引入', 3, 'VUE001.md', 0);
INSERT INTO `notes` VALUES (5, 'vue-axios', 'VUE中前后端数据传输axios', 3, 'VUE002.md', 0);
INSERT INTO `notes` VALUES (6, 'vue-router', 'VUE中的路由vue-router', 3, 'VUE003.md', 0);
INSERT INTO `notes` VALUES (7, 'VUE传值', 'VUE中组件间的传值与VUEX', 3, 'VUE004.md', 0);
INSERT INTO `notes` VALUES (8, 'VUE动画效果', 'VUE中的简单动画效果', 3, 'VUE005.md', 0);
INSERT INTO `notes` VALUES (9, '红烧肉', '简易的红烧肉 做法', 5, 'COOK001.md', 0);
INSERT INTO `notes` VALUES (10, '番茄牛腩', '不加水的番茄牛腩 怎么做', 5, 'COOK002.md', 0);

-- ----------------------------
-- Table structure for resources
-- ----------------------------
DROP TABLE IF EXISTS `resources`;
CREATE TABLE `resources`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NULL TYTLE',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NO DESCRIPTION',
  `category` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NULL',
  `visited` int(12) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of resources
-- ----------------------------
INSERT INTO `resources` VALUES (1, '222', 'NO DESCRIPTION', 2, 'NULL', 0);
INSERT INTO `resources` VALUES (2, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL', 0);

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'head-main.webp',
  `phonenumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NULL',
  `status` int(10) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'SRIC', 'abe4618871b8413bdfb1777f1db128b6', 'head-main.webp', '11451419198', '114514@qq.com', 'soraincloud here', 1);
INSERT INTO `user` VALUES (2, 'homo', '46cdf9fce44f17b47ef33cd4d9bd99f4', 'head-main.webp', NULL, NULL, '114514', 0);

SET FOREIGN_KEY_CHECKS = 1;

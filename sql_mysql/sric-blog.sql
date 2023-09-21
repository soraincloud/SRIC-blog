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

 Date: 21/09/2023 15:47:54
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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notes
-- ----------------------------
INSERT INTO `notes` VALUES (1, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 0);
INSERT INTO `notes` VALUES (2, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 0);
INSERT INTO `notes` VALUES (3, '二叉树', '这是一篇关于二叉树的笔记，非常的基础，如果你忘记了关于二叉树的内容，可以瞅瞅', 2, 'NULL.md', 0);
INSERT INTO `notes` VALUES (4, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 0);
INSERT INTO `notes` VALUES (5, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 0);
INSERT INTO `notes` VALUES (6, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 0);
INSERT INTO `notes` VALUES (7, 'NULL TYTLE', 'NO DESCRIPTION', 1, 'NULL.md', 0);

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
  `phonenumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NULL',
  `status` int(10) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'SRIC', 'soraincloud', '11451419198', '114514@qq.com', 'soraincloud here', 1);
INSERT INTO `user` VALUES (2, 'homo', 'homo', NULL, NULL, '114514', 0);

SET FOREIGN_KEY_CHECKS = 1;

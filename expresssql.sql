-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.1.22-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 express 的数据库结构
CREATE DATABASE IF NOT EXISTS `express` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `express`;

-- 导出  表 express.functions 结构
CREATE TABLE IF NOT EXISTS `functions` (
  `FID` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) COLLATE utf8_bin NOT NULL,
  `url` char(50) COLLATE utf8_bin NOT NULL,
  `withCtree` int(1) NOT NULL,
  `authlevel` int(11) NOT NULL,
  `treelevel` int(11) NOT NULL,
  `treeID` char(50) COLLATE utf8_bin NOT NULL,
  `FtreeID` char(50) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`FID`),
  UNIQUE KEY `url` (`url`),
  UNIQUE KEY `treeID` (`treeID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  express.functions 的数据：~8 rows (大约)
DELETE FROM `functions`;
/*!40000 ALTER TABLE `functions` DISABLE KEYS */;
INSERT INTO `functions` (`FID`, `name`, `url`, `withCtree`, `authlevel`, `treelevel`, `treeID`, `FtreeID`) VALUES
	(2, '按钮', 'buttons', 0, 9, 0, '1', ''),
	(3, '程序3', 'url3', 1, 9, 0, '2', ''),
	(4, '子程序1', 'curl1', 0, 9, 1, '3', '2'),
	(5, '子程序2', 'curl2', 0, 9, 1, '4', '2'),
	(6, '图标', 'icons', 0, 9, 0, '5', ''),
	(8, '表格', 'tables', 0, 9, 0, '7', ''),
	(16, '密钥解密', 'desc', 0, 9, 0, '8', '');
/*!40000 ALTER TABLE `functions` ENABLE KEYS */;

-- 导出  表 express.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `authlevel` int(11) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  express.users 的数据：~3 rows (大约)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`UID`, `account`, `password`, `authlevel`) VALUES
	(0, 'admin', '123456', 0),
	(1, '1', '1', 9),
	(2, '2', '2', 9);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

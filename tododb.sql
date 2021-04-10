-- Adminer 4.8.0 MySQL 5.5.5-10.5.9-MariaDB-1:10.5.9+maria~focal dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `tododb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tododb`;

DROP TABLE IF EXISTS `Rewards`;
CREATE TABLE `Rewards` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `task` int(11) NOT NULL,
  `amount` double NOT NULL,
  `total` double DEFAULT NULL,
  `goal` varchar(100) NOT NULL,
  PRIMARY KEY (`r_id`),
  UNIQUE KEY `r_id` (`r_id`),
  KEY `task` (`task`),
  KEY `user` (`user`),
  CONSTRAINT `rewards_task_fk` FOREIGN KEY (`task`) REFERENCES `Tasks` (`t_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rewards_user_fk` FOREIGN KEY (`user`) REFERENCES `Users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `Tasks`;
CREATE TABLE `Tasks` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `date_set` date NOT NULL DEFAULT curdate(),
  `due` date DEFAULT NULL,
  `completed` date DEFAULT NULL,
  `to_do` varchar(100) NOT NULL,
  `count` int(4) NOT NULL,
  `reward` int(11) NOT NULL,
  PRIMARY KEY (`t_id`),
  UNIQUE KEY `t_id` (`t_id`),
  KEY `user` (`user`),
  CONSTRAINT `task_user_fk` FOREIGN KEY (`user`) REFERENCES `Users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `task_reward_fk` FOREIGN KEY (`reward`) REFERENCES `Rewards` (`r_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `git_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `registered` date NOT NULL DEFAULT curdate(),
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `u_id` (`u_id`),
  UNIQUE KEY `git_id` (`git_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 2021-04-09 02:32:30
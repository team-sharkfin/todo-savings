-- Adminer 4.8.0 MySQL 5.5.5-10.5.9-MariaDB-1:10.5.9+maria~focal dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `rewards`;
CREATE TABLE `rewards` (
  `reward_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `goal` double NOT NULL,
  `amount_per_task` double NOT NULL,
  `created_at` date NOT NULL DEFAULT curdate(),
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`reward_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rewards_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `task_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` date NOT NULL DEFAULT curdate(),
  `completed_at` date DEFAULT NULL,
  `reward_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`task_id`),
  KEY `reward_id` (`reward_id`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`reward_id`) REFERENCES `rewards` (`reward_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `github_id` int(10) unsigned NOT NULL,
  `registered_at` date NOT NULL DEFAULT curdate(),
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `github_id` (`github_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2021-04-11 16:47:20

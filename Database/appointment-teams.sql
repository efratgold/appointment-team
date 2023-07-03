-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 08:26 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointment-teams`
--
CREATE DATABASE IF NOT EXISTS `appointment-teams` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `appointment-teams`;

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointmentId` int(11) NOT NULL,
  `teamId` int(11) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `endDateTime` datetime NOT NULL,
  `description` varchar(50) NOT NULL,
  `room` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`appointmentId`, `teamId`, `startDateTime`, `endDateTime`, `description`, `room`) VALUES
(1, 1, '2023-03-27 16:55:53', '2023-03-27 17:53:53', 'weekly task planning', 'blue room'),
(2, 2, '2023-03-29 12:53:53', '2023-03-29 13:40:53', 'application development and updating', 'new york room'),
(3, 3, '2023-04-01 16:53:53', '2023-04-01 16:53:53', 'daily planning', 'large board room'),
(4, 2, '2023-03-27 16:53:53', '2023-03-27 17:20:53', 'daily planning', 'pink room'),
(5, 4, '2023-03-29 09:53:53', '2023-03-29 10:40:53', 'Version update', 'large board room'),
(6, 2, '2023-05-28 11:00:00', '2023-05-28 11:30:00', 'daily conversation', 'new york room'),
(7, 1, '2023-03-27 09:53:53', '2023-03-27 10:40:53', 'Version update', 'blue room'),
(8, 1, '2023-05-20 12:00:00', '2023-05-20 12:45:00', 'daily conversation', 'pink room');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `teamId` int(11) NOT NULL,
  `teamName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`teamId`, `teamName`) VALUES
(1, 'UI team'),
(2, 'mobile team'),
(3, 'react team'),
(4, 'angular team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointmentId`),
  ADD KEY `teamId` (`teamId`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`teamId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `teamId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `team` (`teamId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

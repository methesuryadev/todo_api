-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2023 at 08:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo_list`
--

CREATE TABLE `todo_list` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `todo_desc` longtext DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todo_list`
--

INSERT INTO `todo_list` (`id`, `title`, `todo_desc`, `date`, `created_at`, `updated_at`) VALUES
(24, 'asdsa', 'asdasd', '2023-01-01 18:30:00', '2023-01-02 03:20:59', '2023-01-02 03:20:59'),
(28, 'asdsa', 'dsadsa', '2023-01-01 18:30:00', '2023-01-02 03:39:27', '2023-01-02 03:39:27'),
(31, 'asd', 'sadsa', '2023-01-01 18:30:00', '2023-01-02 03:52:46', '2023-01-02 03:52:46'),
(32, 'asdsa', 'asdsad', '2023-01-01 18:30:00', '2023-01-02 03:56:17', '2023-01-02 03:56:17'),
(33, 'asdsad', 'sadsadsa', '2023-01-01 18:30:00', '2023-01-02 03:57:41', '2023-01-02 03:57:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_list`
--
ALTER TABLE `todo_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

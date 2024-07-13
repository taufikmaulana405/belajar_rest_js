-- phpMyAdmin SQL Dump
-- version 6.0.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: mariadb.mhsshopid.my.id
-- Generation Time: Jul 13, 2024 at 12:14 PM
-- Server version: 10.4.34-MariaDB-1:10.4.34+maria~ubu2004
-- PHP Version: 8.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_mahasiswa`
--

-- --------------------------------------------------------

--
-- Table structure for table `biodata`
--

CREATE TABLE `biodata` (
  `id` int(10) NOT NULL,
  `nama` varchar(256) NOT NULL,
  `nim` varchar(12) NOT NULL,
  `email` varchar(256) NOT NULL,
  `fakultas` varchar(256) NOT NULL,
  `prodi` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `biodata`
--

INSERT INTO `biodata` (`id`, `nama`, `nim`, `email`, `fakultas`, `prodi`) VALUES
(2, 'bentor', '13232564367', 'mail@example.com', 'Ekonom', 'Bisnis'),
(4, 'cup', '11', 'uhuuy@yahoo.com', 'Masak', 'Tataboga'),
(5, 'cup', '11', 'uhuuy@yahoo.com', 'Masak', 'Tataboga'),
(6, 'string', '999999999999', 'string', 'string', 'string'),
(11, 'string', '999999999999', 'string', 'string', 'string'),
(12, 'string', '999999999999', 'string', 'string', 'string'),
(13, 'string', '999999999999', 'string', 'string', 'string');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biodata`
--
ALTER TABLE `biodata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biodata`
--
ALTER TABLE `biodata`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

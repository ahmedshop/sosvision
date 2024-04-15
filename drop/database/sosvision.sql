-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 15 avr. 2024 à 03:19
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sosvision`
--

-- --------------------------------------------------------

--
-- Structure de la table `slides`
--

CREATE TABLE `slides` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `slides`
--

INSERT INTO `slides` (`id`, `title`, `description`, `image`) VALUES
(2, 'khtek.17 - BIZZARE 2', '( Directed by @alaaeddinerais.sos )', '../assets/2.jpg'),
(3, 'Neo Elegance 3', '( ES 9342 084F )', '../assets/3.jpg'),
(4, 'Neo Elegance 4', '( ES 9342 084F )', '../assets/4.jpg'),
(5, 'Neo Elegance 5', '( ES 9342 084F )', '../assets/5.jpg'),
(6, 'Neo Elegance 6', '( ES 9342 084F )', '../assets/6.jpg'),
(7, 'Neo Elegance 7', '( ES 9342 084F )', '../assets/7.jpg'),
(8, 'Neo Elegance 8', '( ES 9342 084F )', '../assets/8.jpg'),
(9, 'Neo Elegance 9', '( ES 9342 084F )', '../assets/9.jpg'),
(10, 'Neo Elegance 10', '( ES 9342 084F )', '../assets/10.jpg'),
(11, 'Neo Elegance 10', '( ES 9342 084F )', '../assets/11.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

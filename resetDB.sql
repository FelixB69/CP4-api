DROP TABLE IF EXISTS `phone`;

CREATE TABLE `phone` (
 `id` int NOT NULL AUTO_INCREMENT,
 `nom` VARCHAR(250) NOT NULL,
 `marque` VARCHAR(50) NOT NULL,
 `note` VARCHAR(50) NOT NULL,
 `prix` VARCHAR(10) NOT NULL,
 `ecran` VARCHAR(50) NOT NULL,
 `image` VARCHAR(200) NOT NULL,
 `photo` VARCHAR(300),
 `indice` VARCHAR(30) NOT NULL,
 `commentaire` TEXT,
 `utilisation` VARCHAR(100) NOT NULL,
 `eco` VARCHAR(60) NOT NULL,

 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `phone` (nom, marque, note, prix, ecran, image, photo, indice, commentaire, utilisation, eco)
VALUES ('Apple Iphone 13 Pro', 'Apple', '5', '1100€', 'Amoled', 'https://www.zupimages.net/up/22/29/99zo.png', '3* 12Mpx grand angle', '6.1', '', 'Pour prendre des storys', 'Riche'),
('Samsung A03', 'Samsung', '3', '159€', 'Super LCD', 'https://www.zupimages.net/up/22/29/6pbf.png', '48mpx', '8', '', 'Juste pour appeler', 'Entre les deux'),
('Samsung E1150i', 'Samsung', '4', '100€', '1.43 pouces', 'https://www.zupimages.net/up/22/29/iend.png', '', '10', '', 'Juste pour appeler', 'Pauvre'),
('Samsung M12', 'Samsung', '3', '200€', 'IPS', 'https://www.zupimages.net/up/22/29/r8xj.png', '48mpx grand angle + 5 mpx ultra', '8', '', 'Pour travailler', 'Entre les deux'),
('Samsung S21 Ultra', 'Samsung', '5', '1000€', 'Amoled', 'https://www.zupimages.net/up/22/29/b0nc.png', '108 mpx + 3* 12mpx', '8.2', '', 'Pour prendre des storys', 'Riche'),
('Iphone SE', 'Apple', '2', '400€', 'IPS', 'https://www.zupimages.net/up/22/29/66lx.png', '12Mpx grand angle', '6.2', '', 'Pour travailler', 'Riche'),
('Huawei P50 Pro', 'Huawei', '4', '800€', 'OLED', 'https://www.zupimages.net/up/22/29/2yxa.png', '50Mpx grand angle', '7.2', '', 'Pour prendre des storys', 'Riche'),
('Huawei P40 Lite', 'Huawei', '3', '450€', 'IPS', 'https://www.zupimages.net/up/22/29/rwhl.png', '64Mpx grand angle, f/1.8', '6.7', 'Un très bon outil pour travailler alliant performance & photo', 'Pour travailler', 'Riche'),
('Huawei P30', 'Huawei', '2', '300€', 'LTPS', 'https://www.zupimages.net/up/22/29/ux4i.png', '30Mpx', '5.5', '', 'Pour prendre des storys', 'Pauvre');

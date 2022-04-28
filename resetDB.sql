DROP TABLE IF EXISTS `quotes`;

CREATE TABLE `quotes` (
 `id` int NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50) NOT NULL,
 `comment` Text(300) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `quotes` (name, comment)
VALUES ('Pierre', 'Bonjour le groupe 3 du P2'), ('Nicko', 'Bienvenu à la Wild'), ('Thomas', 'I like programming on PHP');
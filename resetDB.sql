/* RESET FOR QUOTES */

DROP TABLE IF EXISTS `quotes`;

CREATE TABLE `quotes` (
 `id` int NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50) NOT NULL,
 `comment` Text(300) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `quotes` (name, comment)
VALUES ('Nono_69', `“I'll be back.” Terminator`), ('BeerPong', '
“Carpe diem. Seize the day, boys. Make your lives extraordinary.” Dead Poets Society, 1989'), ('Loulou95', '“Keep your friends close, but your enemies closer.” The Godfather Part II, 1974');

/* RESET FOR GIFS */

DROP TABLE IF EXISTS `gifs`;

CREATE TABLE `gifs` (
 `id` int NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50) NOT NULL,
 `gif` VARCHAR(200) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `quotes` (name, gif)
VALUES ('Nono_69', 'https://media2.giphy.com/media/641arBi22PAty/giphy.gif?cid=ecf05e472b1vki7kxpwb4pq78v9imsp1zulyvyqd601e2pej&rid=giphy.gif&ct=g'), ('BeerPong', 'https://media3.giphy.com/media/YO5e7gmuBuwFygt3g9/giphy.gif?cid=ecf05e47f2i4bi53iknki2hrwuyts4gj6i2wiok7kbw1r4qf&rid=giphy.gif&ct=g'), ('Loulou95', 'https://media2.giphy.com/media/8ytDUrlW9JbG0/giphy.gif?cid=ecf05e47owvwuqcz7ka8hprqf4qvv7xw57g4rvnjccv8spfz&rid=giphy.gif&ct=g');
CREATE DATABASE IF NOT EXISTS athletesdb CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE athletesdb;

CREATE TABLE IF NOT EXISTS athletes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  nickname VARCHAR(100) DEFAULT NULL,
  birth_date DATE NOT NULL,
  weight_kg DECIMAL(5,2) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  sport VARCHAR(100) NOT NULL,
  achievements TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO athletes
(first_name, last_name, nickname, birth_date, weight_kg, image_url, sport, achievements)
VALUES
('Lauri','Markkanen',NULL,'1997-05-22',109.0,
 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628374.png',
 'Koripallo','NBA All-Star, NBA Most Improved Player, Suomen Vuoden urheilija 2023'),
('Teemu','Pukki',NULL,'1990-03-29',81.2,
 'https://images.cdn.yle.fi/image/upload/ar_1.718889439762023,c_fill,g_faces,h_698,w_1200/dpr_2.0/q_auto:eco/f_auto/fl_lossy/v1747054992/39-14639396821f1775ca45',
 'Jalkapallo','Huuhkajien hyökkääjä, Norwich Cityn maalitykki'),
('Patrik','Laine',NULL,'1998-04-19',94.3,
 'https://assets.nhle.com/mugs/nhl/20242025/MTL/8479339.png',
 'Jääkiekko','NHL-hyökkääjä, varaustilaisuuden 2. varaus 2016'),
('Iivo','Niskanen',NULL,'1992-01-12',80.0,
 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Iivo_Niskanen_2019.jpg',
 'Maastohiihto','3× olympiakultaa, MM-kulta 2017 15 km');
('Kiira','Korpi','Kiki','1988-09-26',55.0,
 'https://upload.wikimedia.org/wikipedia/commons/3/35/Kiira_KORPI_Nebelhorn_Trophy_2009_Podium.jpg',
 'Taitoluistelu','EM-pronssit 2007, 2011, 2012; 3× Suomen mestari; olympiaedustaja 2006 ja 2010');
-- Varmistetaan, että oikeudet on annettu kehityskäyttäjälle
GRANT ALL PRIVILEGES ON athletesdb.* TO 'sampleuser1'@'localhost' IDENTIFIED BY 'oranges';
FLUSH PRIVILEGES;

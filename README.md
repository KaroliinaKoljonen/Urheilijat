# Urheilijat – Web-ohjelmoinnin harjoitustehtävä

Tässä projektissa toteutetaan urheilijoiden hallintaan tarkoitettu REST-rajapinta (backend) ja React-pohjainen käyttöliittymä (frontend).  
Sovellus käyttää MariaDB-tietokantaa.

---

## 1. Tietokannan luonti

Tietokannan luontiskripti löytyy kansiosta:
athletes-backend/sql/luonti.sql


Suorita skripti HeidiSQL:ssä tai komentorivillä.  
Se luo tietokannan `athletesdb` ja taulun `athletes`, sekä lisää testidataa suomalaisista urheilijoista.


## 2. Backendin käynnistys

cd athletes-backend
npm install
node server.js

## 3. Frontendin käynnistys

cd athletes-frontend
npm install
npm run dev


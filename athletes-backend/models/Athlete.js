// models/Athlete.js
const db = require("../config/db");

class Athlete {
  constructor({
    first_name,
    last_name,
    nickname,
    birth_date,
    weight_kg,
    image_url,
    sport,
    achievements,
  }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.nickname = nickname;
    this.birth_date = birth_date;
    this.weight_kg = weight_kg;
    this.image_url = image_url;
    this.sport = sport;
    this.achievements = achievements;
  }

  async save() {
    const sql = `
      INSERT INTO athletes 
      (first_name, last_name, nickname, birth_date, weight_kg, image_url, sport, achievements)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(sql, [
      this.first_name,
      this.last_name,
      this.nickname,
      this.birth_date,
      this.weight_kg,
      this.image_url,
      this.sport,
      this.achievements,
    ]);
    return result;
  }

  static findAll() {
    const sql = "SELECT * FROM athletes ORDER BY id DESC;";
    return db.execute(sql);
  }

  static findById(id) {
    const sql = "SELECT * FROM athletes WHERE id = ?";
    return db.execute(sql, [id]);
  }

  static updateById(id, data) {
    const fields = [];
    const values = [];
    for (const [key, value] of Object.entries(data)) {
      if (value === undefined) continue; // ohitetaan undefined-arvot
      fields.push(`${key} = ?`);
      values.push(value);
    }

    const sql = `UPDATE athletes SET ${fields.join(", ")} WHERE id = ?`;
    values.push(id);
    return db.execute(sql, values);
  }

  static deleteById(id) {
    const sql = "DELETE FROM athletes WHERE id = ?";
    return db.execute(sql, [id]);
  }
}

module.exports = Athlete;

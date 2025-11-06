import React, { useState } from "react";
import Sefer from "./Sefer";

const Sfarim = () => {
  const sfarim = [
    {
      name: "Torah (Chumash / Five Books of Moses)",
      author: "Moses (traditionally)",
    },
    { name: "Tanakh (Hebrew Bible)", author: "Multiple prophets and scribes" },
    {
      name: "Talmud (Bavli & Yerushalmi)",
      author: "Ravina, Rav Ashi, and others",
    },
    { name: "Mishnah", author: "Rabbi Yehuda HaNasi" },
    { name: "Midrash Rabbah", author: "Various Sages" },
    { name: "Zohar", author: "Rabbi Shimon bar Yochai (traditionally)" },
    {
      name: "Pirkei Avot (Ethics of the Fathers)",
      author: "Sages of the Mishnah",
    },
    { name: "Shulchan Aruch", author: "Rabbi Yosef Karo" },
    { name: "Mishneh Torah", author: "Maimonides (Rambam)" },
    {
      name: "Guide for the Perplexed (Moreh Nevuchim)",
      author: "Maimonides (Rambam)",
    },
    { name: "Kuzari", author: "Rabbi Yehuda HaLevi" },
    { name: "Sefer HaChinuch", author: "Rabbi Aharon HaLevi (attributed)" },
    {
      name: "Mesillat Yesharim (Path of the Just)",
      author: "Rabbi Moshe Chaim Luzzatto (Ramchal)",
    },
    {
      name: "Derech Hashem (The Way of God)",
      author: "Rabbi Moshe Chaim Luzzatto (Ramchal)",
    },
    {
      name: "Chovot HaLevavot (Duties of the Heart)",
      author: "Rabbi Bahya ibn Paquda",
    },
    {
      name: "Shaarei Teshuvah (Gates of Repentance)",
      author: "Rabbi Yonah of Gerona",
    },
    {
      name: "Orchot Tzaddikim (Ways of the Righteous)",
      author: "Anonymous (15th century)",
    },
    { name: "Tanya", author: "Rabbi Shneur Zalman of Liadi" },
    { name: "Likutei Moharan", author: "Rabbi Nachman of Breslov" },
    { name: "Nefesh HaChaim", author: "Rabbi Chaim of Volozhin" },
  ];

  const [arr, setArr] = useState(sfarim);
  const deleteBook = (name) => {
    setArr(arr.filter((item) => item.name != name));
  };

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <Sefer
            key={index}
            name={item.name}
            author={item.author}
            delFunction={deleteBook}
          />
        );
      })}
    </div>
  );
};

export default Sfarim;

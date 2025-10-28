import React, { useState } from "react";
import Student2 from "./Student2";

const StudentList2 = () => {
  const [text, setText] = useState("");
  const students = [
    { firstName: "Idan", lastName: "Hadad", grade: 99 },
    { firstName: "Noa", lastName: "Cohen", grade: 88 },
    { firstName: "Daniel", lastName: "Levi", grade: 76 },
    { firstName: "Maya", lastName: "Regev", grade: 92 },
    { firstName: "Lior", lastName: "Shachar", grade: 1 },
    { firstName: "Eden", lastName: "Ben-David", grade: 90 },
    { firstName: "Omer", lastName: "Azulay", grade: 27 },
    { firstName: "Yael", lastName: "Moyal", grade: 50 },
    { firstName: "Amit", lastName: "Peretz", grade: 15 },
    { firstName: "Nadav", lastName: "Barak", grade: 38 },
  ];
  const [arr, setArr] = useState(students);
  function findName(value) {
    setArr(
      students.filter((stud) =>
        stud.firstName.toLowerCase().includes(text.toLowerCase())
      )
    );
  }
  return (
    <div>
      <input
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
          findName(value);
        }}
        type="text"
        placeholder="search by first name"
      />
      <ul>
        {arr.map((stud, index) => (
          <Student2
            key={index}
            name={stud.firstName}
            fName={stud.lastName}
            grade={stud.grade}
          />
        ))}
      </ul>
    </div>
  );
};

export default StudentList2;

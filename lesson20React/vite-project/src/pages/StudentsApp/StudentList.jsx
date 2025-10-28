import React from "react";
import Student from "./Student";

const StudentList = () => {
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

  return (
    <ul>
      {students.map((item, index) => {
        return (
          <Student
            key={index}
            name={item.firstName}
            fName={item.lastName}
            grade={item.grade}
          />
        );
      })}
    </ul>
  );
};

export default StudentList;

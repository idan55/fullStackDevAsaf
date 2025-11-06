import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./pages/Counter/Q1";
import Message from "./pages/Message/Q2";
import Header from "./pages/Header";
import HideText from "./pages/HideText/Q3";
import Q4 from "./pages/ChangeText/Q4";
import Q5 from "./pages/SumNumbers/Q5";
import Q6 from "./pages/AgeChecker/Q6";
import Q7 from "./pages/PasswordVerifier/Q7";
import Q8 from "./pages/UserNameDisplay/Q8";
import Q9 from "./pages/Sum/Q9";
import Q10 from "./pages/AgeChecker2/Q10";
import Q11 from "./pages/PasswordVerifier2/q11";
import Q12 from "./pages/StudentList/Q12";
import Q13 from "./pages/ProductList/Q13";
import Q14 from "./pages/TaskList/Q14";
import Q15 from "./pages/ProductsInStock/Q15";
import Q16 from "./pages/FavoriteColors/Q16";
import Q17 from "./pages/MovieRatings/Q17";
import Q18 from "./pages/OnlineUsers/Q18";
import Tasks from "./pages/Tasking/Tasks";
import StudentList from "./pages/StudentsApp/StudentList";
import ProductList from "./pages/Products2/ProductList";
import BooksList from "./pages/Book/BooksList";
import Sfarim from "./pages/Sefer/Sfarim";
import StudentList2 from "./pages/Students2/StudentList2";
import MoviesList from "./pages/MoviesList/MoviesList";

function App() {
  const name = "John";

  return (
    <div className="center">
      <h1>Hello {name}</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Counter name="Idan" age={20} school="Ort" />}
          ></Route>
          <Route path="/q2" element={<Message />}></Route>
          <Route path="/q3" element={<HideText />}></Route>
          <Route path="/q4" element={<Q4 />}></Route>
          <Route path="/q5" element={<Q5 />}></Route>
          <Route path="/q6" element={<Q6 />}></Route>
          <Route path="/q7" element={<Q7 />}></Route>
          <Route path="/q8" element={<Q8 msg="Enter your name" />}></Route>
          <Route path="/q9" element={<Q9 buttonText="Lugassi" />}></Route>
          <Route
            path="/q10"
            element={
              <Q10
                buttonText={"Click to check"}
                minorMessage={"you're young"}
                adultMessage={"you're old"}
              />
            }
          ></Route>
          <Route
            path="/q11"
            element={
              <Q11
                buttonText={"verify password"}
                matchChecker={"Matching"}
                noMatchChecker={"Not matching"}
              />
            }
          ></Route>
          <Route path="/q12" element={<Q12 />}></Route>
          <Route path="/q13" element={<Q13 />}></Route>
          <Route path="/q14" element={<Q14 />}></Route>
          <Route path="/q15" element={<Q15 />}></Route>
          <Route path="/q16" element={<Q16 />}></Route>
          <Route path="/q17" element={<Q17 />}></Route>
          <Route path="/q18" element={<Q18 />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/studentList" element={<StudentList />}></Route>
          <Route path="/productList" element={<ProductList />}></Route>
          <Route path="/bookList" element={<BooksList />}></Route>
          <Route path="/sfarimList" element={<Sfarim />}></Route>
          <Route path="/student2List" element={<StudentList2 />}></Route>
          <Route path="/moviesList" element={<MoviesList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

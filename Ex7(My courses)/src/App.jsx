import { useState } from "react";
import { courses } from "./Data";

import "./App.css";
import Header from "./Component/Header";
import Course from "./Component/Course";
import "./css/Course.css";

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;

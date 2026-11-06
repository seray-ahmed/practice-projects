import React from "react";
import "../css/Course.css";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h4 className="course-title">{title}</h4>
        <h5 className="course-desc">{description}</h5>
        <h3 className="course-price">{price} €</h3>
        <a href={link} className="enroll-btn">
          Enroll
        </a>
      </div>
    </div>
  );
}

export default Course;

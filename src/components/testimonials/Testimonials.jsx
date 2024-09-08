import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Manish Sutar",
      position: "Student At NIT Trichy",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
      "https://u-static.fotor.com/images/text-to-image/result/PRO-4ef84a0b4674420f8aae0d2d6ea955d4.jpg"    },
    {
      id: 2,
      name: "Atiksha",
      position: "Student At NIT Bhopal",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Arun Pratap",
      position: "Student At NIT Agartala",
      message:
        " I've gained more knowledge here than elsewhere, thanks to the platform's engaging and thorough approach.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Sourabh",
      position: "Student At JNU",
      message:
        "The interactive lessons and quizzes on CodeInspire make learning both enjoyable and effective.",
      image:
        "https://u-static.fotor.com/images/text-to-image/result/PRO-166f652592b8429b973b47d358596db1.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

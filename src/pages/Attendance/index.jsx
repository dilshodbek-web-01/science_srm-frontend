import React from "react";
import InputSearch from "../../UI/InputSearch";
import Card from "../../UI/Card";
import PersonImage from "../../assets/images/somebody.webp";

const index = () => {
  return (
    <>
      <div className="attendance px-3">
        <div className="attendance__up py-4 d-flex align-items-center justify-content-between ">
          <h3 className="text-primary">Davomat olinadigan guruhni tanlang</h3>
          <InputSearch pl={"Guruh nomini kiriting"} />
        </div>

        <ul
          className="cards list-unstyled d-flex align-items-center 
          justify-content-between flex-wrap gap-3"
        >
          <Card
            title={"Matematika"}
            image={PersonImage}
            teacherName={"Muxamadaliyev Ibrohim"}
            teacherPhone={"+998901234567"}
            lessonDays={"DU-CHOR-JUMA"}
            lessonTime={"14:00-15:30"}
            studentsCount={"25ta"}
            whoPaid={"10ta"}
          />

          <Card
            title={"Arab-Tili"}
            image={PersonImage}
            teacherName={"Muxamadaliyev Ibrohim"}
            teacherPhone={"+998901234567"}
            lessonDays={"DU-CHOR-JUMA"}
            lessonTime={"14:00-15:30"}
            studentsCount={"25ta"}
            whoPaid={"10ta"}
          />

          <Card
            title={"English"}
            image={PersonImage}
            teacherName={"Muxamadaliyev Ibrohim"}
            teacherPhone={"+998901234567"}
            lessonDays={"DU-CHOR-JUMA"}
            lessonTime={"14:00-15:30"}
            studentsCount={"25ta"}
            whoPaid={"10ta"}
          />

          <Card
            title={"English"}
            image={PersonImage}
            teacherName={"Muxamadaliyev Ibrohim"}
            teacherPhone={"+998901234567"}
            lessonDays={"DU-CHOR-JUMA"}
            lessonTime={"14:00-15:30"}
            studentsCount={"25ta"}
            whoPaid={"10ta"}
          />

          <Card
            title={"English"}
            image={PersonImage}
            teacherName={"Muxamadaliyev Ibrohim"}
            teacherPhone={"+998901234567"}
            lessonDays={"DU-CHOR-JUMA"}
            lessonTime={"14:00-15:30"}
            studentsCount={"25ta"}
            whoPaid={"10ta"}
          />

          <Card
            title={"English"}
            image={PersonImage}
            teacherName={"Muxamadaliyev Ibrohim"}
            teacherPhone={"+998901234567"}
            lessonDays={"DU-CHOR-JUMA"}
            lessonTime={"14:00-15:30"}
            studentsCount={"25ta"}
            whoPaid={"10ta"}
          />
        </ul>
      </div>
    </>
  );
};

export default index;

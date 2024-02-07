import React from "react";
import "./style.scss";

const index = ({
  title,
  image,
  teacherName,
  teacherPhone,
  lessonDays,
  lessonTime,
  studentsCount,
  whoPaid,
}) => {
  return (
    <>
      <li className="groupCard card shadow">
        <div className="groupCard--up bg-primary w-100 text-center p-2">
          <strong className="text-white">{title}</strong>
        </div>
        <div className="groupCard__body p-2">
          <div className="groupCard__body--up d-flex justify-content-between">
            <div>
              <img
                style={{ width: 80, height: 80,  borderRadius: 1000}}
                className="shadow"
                src={image}
                alt="teacher"
              />
            </div>
            <div className="card__body--up__content text-end">
              <p>
                <strong className="">O’qituvchi: </strong>
                {teacherName}
              </p>
              <p>
                <strong className="">Tell raqam: </strong>
                {teacherPhone}
              </p>
            </div>
          </div>

          <ul className="card__body--down list-unstyled">
            <li className="d-flex justify-content-between">
              <strong className="text-primary">Dars kunlari:</strong>
              <p>{lessonDays}</p>
            </li>
            <li className="d-flex justify-content-between ">
              <strong className="text-primary ">Dars vaqti:</strong>
              <p>{lessonTime}</p>
            </li>
            <li className="d-flex justify-content-between ">
              <strong className="text-primary ">O’quvchilar soni</strong>
              <p>{studentsCount}</p>
            </li>
            <li className="d-flex justify-content-between ">
              <strong className="text-primary ">To’lov qilganlar</strong>
              <p>{whoPaid}</p>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default index;

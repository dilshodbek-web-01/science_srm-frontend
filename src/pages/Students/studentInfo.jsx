import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";

const index = () => {
  const [student, setStudent] = useState({});
  const [load, setLoad] = useState(false);

  const { id } = useParams();
  const goBack = useNavigate();

  useEffect(() => {
    api.getOneStudent(id).then((response) => setStudent(response.data));
    setLoad(true);
  }, []);

  const {
    student_name,
    student_phone,
    student_group,
    parent_name,
    parent_phone,
    teacher_name,
  } = student;
  console.log(student);

  return (
    <>
      <div className="p-5 m-5 w-75 mx-auto shadow-lg">
        <ol className="">
          {load ? (
            <>
              <li><strong>Student Name:</strong> {student_name}</li>
              <li><strong>Student Phone:</strong> {student_phone}</li>
              <li><strong>Student Group:</strong> {student_group}</li>
              <li><strong>Parent Name:</strong> {parent_name}</li>
              <li><strong>Parent Phone:</strong> {parent_phone}</li>
              <li><strong>Teacher Name:</strong> {teacher_name}</li>
            </>
          ) : (
            <>
              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>

              <p className="placeholder-wave">
                <span className="placeholder col-12"></span>
              </p>

              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>

              <p className="placeholder-wave">
                <span className="placeholder col-12"></span>
              </p>

              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>

              <p className="placeholder-wave">
                <span className="placeholder col-12"></span>
              </p>
            </>
          )}
        </ol>
        <button className="btn btn-primary w-100" onClick={() => goBack(-1)}>
          go back
        </button>
      </div>
    </>
  );
};

export default index;

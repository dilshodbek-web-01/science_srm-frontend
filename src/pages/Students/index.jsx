import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { toast } from "react-toastify";
import { api } from "../../api";
import FormInput from "../../UI/FormInput";
import Select from "../../UI/Select";
import Button from "../../UI/Button";
import InputSearch from "../../UI/InputSearch";

const index = () => {
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentGroup, setStudentGroup] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [students, setStudents] = useState();
  const [teachers, setTeachers] = useState();

  const createStudentFunction = (e) => {
    e.preventDefault();

    const studentForm = {
      student_name: studentName,
      student_phone: studentPhone,
      student_group: studentGroup,
      parent_name: parentName,
      parent_phone: parentPhone,
      teacher_name: teacherName,
    };

    const check = {
      student_name: studentName.length === 0,
    };

    if (check.student_name) {
      toast.error("Please fill the name and surname");
    } else {
      api
        .createStudent(studentForm)
        .then((response) => {
          if (response.status === 201) {
            toast.success("New student succesfully created", {
              autoClose: 3000,
            });
          }
        })
        .catch((error) => {});
      setStudentName("");
      setStudentPhone("");
      setStudentGroup("");
      setParentName("");
      setParentPhone("");
      setTeacherName("");
    }
  };

  useEffect(() => {
    api.getAllStudents().then((response) => setStudents(response.data));
  }, []);

  useEffect(() => {
    api
      .getAllTeachers()
      .then((response) => setTeachers(response.data))
      .catch((error) => {});
  }, []);

  console.log(teachers);

  const updateStudentFunction = (id) => {
    api.updateStudent(id);
  };

  const deleteStudentFunction = (id) => {
    api
      .deleteStudent(id)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Student successfully deleted !", {
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        if (error.response.statusText === "Not Found") {
          toast.error("Student not found !");
        }
      });
  };

  return (
    <>
      <div className="students">
        <div className="new__students--create mt-4 px-5">
          <h3 className="text-primary">Yangi o’quvchi qo’shish</h3>
          <form
            onSubmit={(e) => createStudentFunction(e)}
            action=""
            className="form-group d-flex align-items-center justify-content-between
             flex-wrap row-gap-3 column-gap-1 mt-3"
          >
            <FormInput
              id={"student_name"}
              type={"text"}
              pl={"O`quvchi ismini kiriting"}
              labelText={"O’quvchi ismi familyasi"}
              value={studentName}
              setValue={setStudentName}
            />

            <FormInput
              id={"student_phone"}
              type={"tel"}
              pl={"+998 xx xxx xx xx"}
              labelText={"Telefon raqami"}
              value={studentPhone}
              setValue={setStudentPhone}
            />

            <Select
              id={"student_group"}
              text={"Guruh yo’nalishi"}
              value={studentGroup}
              setValue={setStudentGroup}
            />

            <FormInput
              id={"parent_name"}
              type={"text"}
              pl={"Ota-Onasi ismini kiriting"}
              labelText={"Ota-Onasi ismi familyasi"}
              value={parentName}
              setValue={setParentName}
            />

            <FormInput
              id={"parent_phone"}
              type={"tel"}
              pl={"+998 xx xxx xx xx"}
              labelText={"Ota-Ona telefon raqami"}
              value={parentPhone}
              setValue={setParentPhone}
            />

            <Select
              text={"O`qituvchi ismi"}
              id={"teacher_name"}
              value={
                teachers?.length > 0 ? (
                  teachers?.map((el) => {
                    return <option key={el.id}>{el.teacher_name}</option>;
                  })
                ) : (
                  <option>O`qituvchi qo`shing</option>
                )
              }
              setValue={setTeacherName}
            />

            <div className="w-100 d-flex align-items-center justify-content-end">
              <Button
                type={"submit"}
                text={"Qo`shish"}
                btnClass={"btn bg-primary text-white w-25 mt-3"}
              />
            </div>
          </form>
        </div>

        <div className="our__students mt-5">
          <div className="our__students--up d-flex align-items-center justify-content-between px-5">
            <h3 className="text-primary">Bizning o’quvchilar</h3>
            <InputSearch id={"studentSearch"} pl={"O`quvchi ismini kiriting"} />
          </div>

          <div className="students__list mt-3 px-4">
            <table className="table table-borderless table-striped table-hover">
              <thead className="bg-primary table-primary">
                <tr>
                  <th>№</th>
                  <th>O’quvchi ismi</th>
                  <th>Telefon nomer</th>
                  <th>Yo’nalish</th>
                  <th>Ota-ona (Tel)</th>
                  <th>U</th>
                  <th>D</th>
                </tr>
              </thead>
              <tbody>
                {students?.length > 0 ? (
                  students.map((el, i) => {
                    return (
                      <tr key={el.id}>
                        <td>{i + 1}</td>
                        <td className="cursor">
                          <Link to={`${el.id}`}>{el.student_name}</Link>
                        </td>
                        <td>{el.student_phone}</td>
                        <td>{el.student_group}</td>
                        <td>{el.parent_phone}</td>
                        <td className="text-primary pt-4">
                          <i
                            className="far fa-pen-to-square cursor"
                            onClick={() => updateStudentFunction(el.id)}
                          ></i>
                        </td>
                        <td className="text-danger pt-4">
                          <i
                            className="fas fa-trash-can cursor"
                            onClick={() => deleteStudentFunction(el.id)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="7">NOT FOUND INFORMATION</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

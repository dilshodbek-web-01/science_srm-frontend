import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../api";
import FormInput from "../../UI/FormInput";
import Button from "../../UI/Button";
import InputSearch from "../../UI/InputSearch";

const index = () => {
  const [teacherName, setTeacherName] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherAddress, setTeacherAddress] = useState("");
  const [teachers, setTeachers] = useState("");

  const createTeacherFunction = (e) => {
    e.preventDefault();

    const teacherForm = {
      teacher_name: teacherName,
      teacher_phone: teacherPhone,
      teacher_address: teacherAddress,
    };

    const check = {
      teacher_name: teacherName.length === 0,
    };

    if (check.teacher_name) {
      toast.error("Please fill the name and surname");
    } else {
      api
        .createTeacher(teacherForm)
        .then((response) => {
          if (response.status === 201) {
            toast.success("New teacher succesfully created", {
              autoClose: 3000,
            });
          }
        })
        .catch((error) => {});
      setTeacherName("");
      setTeacherPhone("");
      setTeacherAddress("");
    }
  };

  useEffect(() => {
    api
      .getAllTeachers()
      .then((response) => setTeachers(response.data))
      .catch((error) => {});
  }, []);

  const deleteTeacherFunction = (id) => {
    api
      .deleteTeacher(id)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Teacher successfully deleted !", {
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        if (error.response.statusText === "Not Found") {
          toast.error("Teacher not found !");
        }
      });
  };

  return (
    <>
      <div className="teachers">
        <div className="new__teachers--create mt-4 px-5">
          <h3 className="text-primary">Yangi o`qituvchi qo’shish</h3>
          <form
            onSubmit={(e) => createTeacherFunction(e)}
            action=""
            className="form-group d-flex align-items-center justify-content-between
             flex-wrap row-gap-3 column-gap-1 mt-3"
          >
            <FormInput
              id={"teacher_name"}
              type={"text"}
              pl={"O`qituvchi ismini kiriting"}
              labelText={"O’qituvchi ismi familyasi"}
              value={teacherName}
              setValue={setTeacherName}
            />

            <FormInput
              id={"teacher_phone"}
              type={"tel"}
              pl={"+998 xx xxx xx xx"}
              labelText={"Telefon raqami"}
              value={teacherPhone}
              setValue={setTeacherPhone}
            />

            <FormInput
              id={"parent_name"}
              type={"text"}
              pl={"Yashash manzilini kiriting"}
              labelText={"Yashash manzilini kiriting"}
              value={teacherAddress}
              setValue={setTeacherAddress}
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

        <div className="our__teachers mt-5">
          <div className="our__teachers--up d-flex align-items-center justify-content-between px-5">
            <h3 className="text-primary">Bizning O`qituvchilar</h3>
            <InputSearch
              id={"studentSearch"}
              pl={"O’qituvchi ismini kiriting"}
            />
          </div>

          <div className="students__list mt-3 px-4">
            <table className="table table-borderless table-striped table-hover">
              <thead className="bg-primary table-primary">
                <tr>
                  <th>№</th>
                  <th>O`qituvchi ismi</th>
                  <th>Telefon nomer</th>
                  <th>Yashash manzili</th>
                  <th>U</th>
                  <th>D</th>
                </tr>
              </thead>
              <tbody>
                {teachers?.length > 0 ? (
                  teachers.map((el, i) => {
                    return (
                      <tr key={el.id}>
                        <td>{i + 1}</td>
                        <td>{el.teacher_name}</td>
                        <td>{el.teacher_phone}</td>
                        <td>{el.teacher_address}</td>
                        <td className="text-primary pt-4">
                          <i
                            className="far fa-pen-to-square cursor"
                            // onClick={() => updateStudentFunction(el.id)}
                          ></i>
                        </td>
                        <td className="text-danger pt-4">
                          <i
                            className="fas fa-trash-can cursor"
                            onClick={() => deleteTeacherFunction(el.id)}
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

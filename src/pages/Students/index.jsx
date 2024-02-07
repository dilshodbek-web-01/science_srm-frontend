import React from "react";
import FormInput from "../../UI/FormInput";
import Select from "../../UI/Select";
import Button from "../../UI/Button";
import InputSearch from "../../UI/InputSearch";

const index = () => {
  return (
    <>
      <div className="students">
        <div className="new__students--create mt-4 px-5">
          <h3 className="text-primary">Yangi o’quvchi qo’shish</h3>
          <form
            action=""
            className="form-group d-flex align-items-center justify-content-between
             flex-wrap row-gap-3 column-gap-1 mt-3"
          >
            <FormInput
              id={"userName"}
              type={"text"}
              pl={"Enter student name"}
              labelText={"O’quvchi ismi familyasi"}
            />

            <FormInput
              id={"userPhone"}
              type={"tel"}
              pl={"Enter phone number"}
              labelText={"Telefon raqami"}
            />

            <Select text={"Yo’nalish"} id={"direction"} value={"matematika"} />

            <FormInput
              id={"parentsName"}
              type={"text"}
              pl={"Enter student parents name"}
              labelText={"Ota-Onasi ismi"}
            />

            <FormInput
              id={"parentsPhone"}
              type={"tel"}
              pl={"Enter parents phone number"}
              labelText={"Ota-Ona telefon raqami"}
            />

            <FormInput
              id={"userPhoto"}
              type={"file"}
              pl={"Yuklash"}
              labelText={"Rasm 3x4"}
            />

            <div className="w-100 d-flex align-items-center justify-content-end ">
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
            <InputSearch id={"studentSearch"} />
          </div>

          <div className="students__list mt-3 px-4">
            <table className="table table-borderless table-striped">
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
                <tr>
                  <td>1</td>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>+998900113861</td>
                  <td className="text-primary pt-4">
                    <i class="far fa-pen-to-square"></i>
                  </td>
                  <td className="text-danger pt-4">
                    <i class="fas fa-trash-can"></i>
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>+998900113861</td>
                  <td className="text-primary">
                    <i class="far fa-pen-to-square"></i>
                  </td>
                  <td className="text-danger ">
                    <i class="fas fa-trash-can"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

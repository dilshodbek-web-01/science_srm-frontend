import React from "react";
import FormInput from "../../UI/FormInput";
import Select from "../../UI/Select";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InputSearch from "../../UI/InputSearch";
import PersonImage from "../../assets/images/somebody.webp";

const index = () => {
  return (
    <>
      <div className="groups">
        <div className="new__groups--create mt-4 px-5">
          <h3 className="text-primary">Yangi guruh qo’shish</h3>
          <form
            action=""
            className="form-group d-flex align-items-center justify-content-between
             flex-wrap row-gap-3 column-gap-1 mt-3"
          >
            <Select
              text={"Guruh yo’nalishi"}
              id={"title"}
              value={"matematika"}
            />

            <FormInput
              id={"days"}
              type={"text"}
              pl={"Dush-Chor-Juma"}
              labelText={"Dars kunlari"}
            />

            <FormInput
              id={"time"}
              type={"text"}
              pl={"14:00-16:00"}
              labelText={"Dars vaqti"}
            />

            <FormInput
              id={"teacher"}
              type={"text"}
              pl={"Dilshodbek Komilov"}
              labelText={"O`qituvchi"}
            />

            <FormInput
              id={"teacherPhone"}
              type={"tel"}
              pl={"+998 xx xxx xx xx"}
              labelText={"O`qituvchi tell raqami"}
            />

            <FormInput
              id={"teacherPhoto"}
              type={"file"}
              pl={"Yuklash"}
              labelText={"O`qituvchi rasmi 3x4"}
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

        <div className="available__groups mt-5">
          <div className="available__groups--up d-flex align-items-center justify-content-between px-5">
            <h3 className="text-primary">Mavjud guruhlar</h3>
            <InputSearch id={"groupSearch"} pl={"Guruh nomini kiriting"} />
          </div>

          <ul
            className="cards mt-3 px-3 list-unstyled d-flex align-items-center 
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;

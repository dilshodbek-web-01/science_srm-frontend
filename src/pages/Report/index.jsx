import React from "react";
import "./index.scss";
import Icon from "../../assets/images/diagram.webp";

const index = () => {
  return (
    <>
      <div className="report bg-body-secondary p-4">
        <ul className="card__list list-unstyled w-100 d-flex align-items-center justify-content-between flex-wrap row-gap-4">
          <li className="card box-shadow p-3 d-flex justify-content-between ">
            <div className="card__content">
              <h4>Jami o’quvchilar soni:</h4>
              <p className="fs-4 fw-bold">255 ta</p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <img src={Icon} style={{ width: 100, borderRadius: 50 }} />
            </div>
          </li>

          <li className="card box-shadow p-3 d-flex justify-content-between ">
            <div className="card__content">
              <h4>Jami o’quvchilar soni:</h4>
              <p className="fs-4 fw-bold">255 ta</p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <img src={Icon} style={{ width: 100, borderRadius: 50 }} />
            </div>
          </li>

          <li className="card box-shadow p-3 d-flex justify-content-between ">
            <div className="card__content">
              <h4>Jami o’quvchilar soni:</h4>
              <p className="fs-4 fw-bold">255 ta</p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <img src={Icon} style={{ width: 100, borderRadius: 50 }}/>
            </div>
          </li>

          <li className="card box-shadow p-3 d-flex justify-content-between ">
            <div className="card__content">
              <h4>Jami o’quvchilar soni:</h4>
              <p className="fs-4 fw-bold">255 ta</p>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <img src={Icon} style={{ width: 100, borderRadius: 50 }} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;

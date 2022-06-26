import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getInterns } from "../approve_hours/requests";
import { sendFile } from "./requests";
import styled from "styled-components";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import PopUp from "../../../components/popup";

const Dropdown = styled(Select)`
  width: 300px;
  margin: 20px 0 60px;
  z-index: 99;
`;

const UploadReportMentor = ({ username }) => {
  const [interns, setInterns] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState();
  const [file, setFile] = useState();
  const [isDisabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showFile, setShowFile] = useState([]);
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  let history = useHistory();

  useEffect(() => {
    getInterns(username, setInterns, formatInterns);
  }, []);

  const formatInterns = (interns) => {
    return interns.map((intern, index) => ({
      ...intern,
      value: index,
      label: intern.first_name + " " + intern.last_name,
    }));
  };

  useEffect(() => {
    if (file) {
      console.log(file);
      setDisabled(true);
      setShowFile(
        <div>
          <p>הקובץ שנבחר:</p>
          <h4>{file.name}</h4>
        </div>
      );
    }
  }, [file]);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const onFileUpload = (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("report", file);
    sendFile(username, formData, selectedIntern, setSubmitted);
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  // Showing success message
  const successMessage = () => {
    return (
      <PopUp
        trigger={submitted}
        setTrigger={() => {
          history.push("/njsw36/");
        }}
      >
        <h3>ההעלאה בוצעה בהצלחה!</h3>
        <button
          style={{
            background: "#DEEAE7",
            border: "10px",
            outline: "auto",
            padding: "3px",
          }}
          onClick={() => {
            history.push("/njsw36/");
          }}
        >
          אוקיי
        </button>
      </PopUp>
    );
  };

  return (
    <div className="font-rubik align-items-center justify-content-center">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="messages">{successMessage()}</div>
        <h2>הגשת משובים</h2>
        <img src="/njsw36/static/images/shape/line-shape-3.svg" alt="shape" />
        <p>בחר מתמחה על מנת להגיש משוב עבורו</p>
        <Dropdown
          options={interns}
          value={selectedIntern}
          onChange={setSelectedIntern}
          placeholder={"בחר מתמחה"}
        />

        {selectedIntern && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <form
              id="form-file-upload"
              onDragEnter={handleDrag}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                ref={inputRef}
                type="file"
                id="input-file-upload"
                onChange={handleChange}
              />
              <label
                id="label-file-upload"
                htmlFor="input-file-upload"
                className={dragActive ? "drag-active" : ""}
              >
                <div>
                  <p>גרור את הקובץ לכאן</p>
                  <button
                    className="font-rubik btn-link"
                    onClick={onButtonClick}
                  >
                    או לחץ לבחירת קובץ
                  </button>
                </div>
              </label>
              {dragActive && (
                <div
                  id="drag-file-element"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                ></div>
              )}
            </form>
            <br />
            {showFile}
            <button
              className="theme-btn-one mt-50 mb-50"
              onClick={onFileUpload}
              disabled={!isDisabled}
            >
              שלח קובץ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadReportMentor;

import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {getInterns} from "../approve_hours/requests";
import {sendFile} from "./requests";
import styled from "styled-components";
import Select from "react-select";

const Dropdown = styled(Select)`
  width: 300px;
  margin: 20px 0 50px;
`

const Label = styled.label`
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: 'בחר קובץ';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`

const StylesButton = styled.button`
  width: 100px;
`

const UploadReportMentor = ({ username }) => {
    const [file, setFile] = useState();
    const [interns, setInterns] = useState([]);
    const [selectedIntern, setSelectedIntern] = useState();

    useEffect(() => {
        getInterns(username, setInterns, formatInterns)
    }, [])

    const formatInterns = (interns) => {
        return interns.map((intern, index) => ({...intern, value: index, label: intern.first_name + " " +  intern.last_name})
        )
    }

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "report",
            file
        );
        sendFile(username, formData, selectedIntern);
    };

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };



    const UploadControl = ({ children, value, disabled }) => {
        return (
            <label htmlFor="contained-button-file" className="m-0 w-100">
                <input
                    value={value}
                    accept={"image/*"}
                    disabled={disabled}
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={onFileChange}
                />
                {children}
            </label>
        );
    };

    return (
        <>
            <Dropdown options={interns} value={selectedIntern} onChange={setSelectedIntern} placeholder={"בחר מתמחה"}/>
               <StylesButton>
                   <UploadControl />
               </StylesButton>
            <Button onClick={onFileUpload} disabled={!selectedIntern}>שלח קובץ</Button>
        </>
    )
}

export default UploadReportMentor;
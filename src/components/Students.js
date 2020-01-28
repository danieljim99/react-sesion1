import React from 'react';

const students = (props) => {
    return (
        <div className="students">
            <h2>Students</h2>
                <p onClick={props.clickStudent.bind(this, props.students[0].name)}>{props.students[0].name} - {props.students[0].view ? props.students[0].mark : ""}</p>
                <p onClick={props.clickStudent.bind(this, props.students[1].name)}>{props.students[1].name} - {props.students[1].view ? props.students[1].mark : ""}</p>
                <p onClick={props.clickStudent.bind(this, props.students[2].name)}>{props.students[2].name} - {props.students[2].view ? props.students[2].mark : ""}</p>
        </div>
    );
}

export default students;
import React from 'react';
import Teacher from './Teacher';
import Students from './Students';

const subject = (props) => {
    let result = null;

    if(props.subject.view){
        result = (
            <div className="subject">
                <h2 onClick={props.clickSubject.bind(this, props.subject.name)}>{props.subject.name}</h2>
                <Teacher name={props.teacherName}/>
                <Students students={props.students} clickStudent={props.clickStudent}/>
            </div>
        );
    } else {
        result = (
            <div className="subject">
                <h2 onClick={props.clickSubject.bind(this, props.subject.name)}>{props.subject.name}</h2>
            </div>
        );
    }
    return result;
}

export default subject;
import React, {Component} from 'react';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  state = {
    subjects: [{name: "Programacion II", view: false}, {name: "Estructuras de datos y algoritmos", view: false}],
    teachers: [{name: "Alberto Valero"}, {name: "Jorge"}],
    students: [{name: "Student 1", mark: 5, view: false}, {name: "Student 2", mark: 10, view: false}, {name: "Student 3", mark: 8, view: false}, {name: "Student 4", mark: 4, view: false}, {name: "Student 5", mark: 6, view: false}, {name: "Student 6", mark: 7, view: false}]
  };

  appearMarkHandler = (name) => {
    let array = this.state.students;

    array.map(obj => {
      if(obj.name === name){
        obj.view = !obj.view;
      }
      return obj;
    });

    this.setState({students: array});
  };

  appearSubjetHandler = (name) => {
    let array = this.state.subjects;

    array.map(obj => {
      if(obj.name === name){
        obj.view = !obj.view;
      }
      return obj;
    });

    this.setState({subjects: array});
  }

  render(){
    return (
      <div className="App">
        <Subject clickSubject={this.appearSubjetHandler} clickStudent={this.appearMarkHandler} subject={this.state.subjects[0]} teacherName="Alverto Valero" students={[this.state.students[0], this.state.students[1], this.state.students[2]]}/>
        <Subject clickSubject={this.appearSubjetHandler} clickStudent={this.appearMarkHandler} subject={this.state.subjects[1]} teacherName="Jorge" students={[this.state.students[3], this.state.students[4], this.state.students[5]]}/>
      </div>
    );
  }
}

export default App;
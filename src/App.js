import React, { Component } from 'react';
import './App.css';
import Table from './Table'
import persons from './dane.json'
import ludzie from "./icons/icon - pracownicy.svg"
import chilid from "./icons/chilid-logo.svg"

class App extends Component {

  tidyUp(){
  let opis = [];
  let months = ["styczeń", "luty", "marzec",
    "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień",
    "październik", "listopad", "grudzień"];
  let o = 0;
  for (o in persons) {
    if (persons[o].dateOfBirth) {

      let cleanDate = persons[o].dateOfBirth.slice(0, persons[o].dateOfBirth.indexOf(" "));

      if (cleanDate.charAt(0) === "0") {
        cleanDate = cleanDate.slice(1)
      }

      let monthCount = cleanDate.slice(0, cleanDate.indexOf(" ")).slice(cleanDate.indexOf(".") + 1, cleanDate.lastIndexOf("."));
      let monthString = months[monthCount - 1];
      let dateFinal = cleanDate.slice(0, cleanDate.indexOf(".")) + " " + monthString + " " + cleanDate.slice(cleanDate.lastIndexOf(".") + 1, cleanDate.lastIndexOf(".") + 5);
      let temp =
        {
          "id": persons[o].id,
          "firstName": persons[o].firstName,
          "lastName": persons[o].lastName,
          "dateOfBirth": dateFinal,
          "company": persons[o].company.toLowerCase(),
          "note": persons[o].note
        };
      opis.push(temp);
    }
  }
    let sortByNumber = function (number) {
      return function (x, y) {
        return ((x[number] === y[number]) ? 0 : ((x[number] > y[number]) ? 1 : -1));
      };
    };
    opis.sort(sortByNumber('id'));
    return opis;
  }


  render() {
    return (
      <div className="App">
        <img src={ludzie} alt="ludzie"/>
        <p className="Table-header">Lista Pracowników</p>
        <Table data={this.tidyUp()}/>
        <div className="DivLogo">
          <img src={chilid} alt="logo" className="Logo"/>
        </div>
      </div>
    );
  }
}

export default App;
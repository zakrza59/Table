import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './Table.css';



class Table extends Component {

  trClassFormat(row, rowIndex) {
    return rowIndex % 2 === 0 ? "tr-odd" : "tr-even";
  };

  // sorry for the length of this function, this sorts date column
  sortDates (a, b, order) {
    let r = a.dateOfBirth.slice(0,2);
    let q = parseInt(r);
    let w = a.dateOfBirth.slice(a.dateOfBirth.indexOf(" ")+1, a.dateOfBirth.lastIndexOf(" "));
    let e = a.dateOfBirth.slice(-4);

    switch (w) {
      case 'styczeń':
        w = 1;
        break;
      case 'luty':
        w = 2;
        break;
      case 'marzec':
        w = 3;
        break;
      case 'kwiecień':
        w = 4;
        break;
      case 'maj':
        w = 5;
        break;
      case 'czerwiec':
        w = 6;
        break;
      case 'lipiec':
        w = 7;
        break;
      case 'sierpień':
        w = 8;
        break;
      case 'wrzesień':
        w = 9;
        break;
      case 'październik':
        w = 10;
        break;
      case 'listopad':
        w = 11;
        break;
      case 'grudzień':
        w = 12;
        break;
    }

    let compareA = q + (30.4*w) + e*356;

     r = b.dateOfBirth.slice(0,2);
     q = parseInt(r);
     w = b.dateOfBirth.slice(b.dateOfBirth.indexOf(" ")+1, b.dateOfBirth.lastIndexOf(" "));
     e = b.dateOfBirth.slice(-4);

    switch (w) {
      case 'styczeń':
        w = 1;
        break;
      case 'luty':
        w = 2;
        break;
      case 'marzec':
        w = 3;
        break;
      case 'kwiecień':
        w = 4;
        break;
      case 'maj':
        w = 5;
        break;
      case 'czerwiec':
        w = 6;
        break;
      case 'lipiec':
        w = 7;
        break;
      case 'sierpień':
        w = 8;
        break;
      case 'wrzesień':
        w = 9;
        break;
      case 'październik':
        w = 10;
        break;
      case 'listopad':
        w = 11;
        break;
      case 'grudzień':
        w = 12;
        break;
    }

    let compareB = q + (30.4*w) + e*356;


    if (order === 'asc') {
      return compareA - compareB;
    } else {
      return compareB - compareA;
    }
  }

  render()
  {
    const options = {
      page: 1,
      sizePerPage: 5,
      pageStartIndex: 1,
      prePage: '< back',
      nextPage: 'next >',
      paginationShowsTotal: this.renderShowsTotal,
      paginationPosition: 'bottom',
      hideSizePerPage: true,
      alwaysShowAllBtn: true,
      defaultSortOrder: 'asc',
    };

    return (

      <BootstrapTable data={ this.props.data }
                      pagination
                      options={ options }
                      tableHeaderClass='my-header-class'
                      bordered={ true }
                      trClassName={ this.trClassFormat }>
        <TableHeaderColumn className='Column'
                           dataField='id'
                           isKey={ true }
                           dataSort
                           dataAlign='center'
                           headerAlign="center"
                           width="63px"
                           tdStyle={{fontWeight: 'bold'}}>
          iD
        </TableHeaderColumn>
        <TableHeaderColumn className='Column'
                           dataField='firstName'
                           dataSort
                           dataAlign='center'
                           headerAlign="center"
                           width="141px">
          First Name
        </TableHeaderColumn>
        <TableHeaderColumn className='Column'
                           dataField='lastName'
                           dataSort
                           dataAlign='center'
                           headerAlign="center"
                           width="139px"
                           tdStyle={{fontWeight: 'bold'}}>
          Last Name
        </TableHeaderColumn>
        <TableHeaderColumn className='Column'
                           dataField='dateOfBirth'
                           dataSort
                           dataAlign='center'
                           headerAlign="center"
                           width="185px"
                           sortFunc={this.sortDates}>
          Birth date
        </TableHeaderColumn>
        <TableHeaderColumn className='Column'
                           dataField='company'
                           dataSort
                           dataAlign='center'
                           headerAlign="center"
                           tdStyle={{fontWeight: 'bold'}}
                           width="133px">
          Company
        </TableHeaderColumn>
        <TableHeaderColumn className='Column'
                           dataField='note'
                           dataSort
                           dataAlign='center'
                           headerAlign="center"
                           width="134px">
          Note
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Table;

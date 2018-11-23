import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

export class TestContainer extends Component {
  render() {
    const data = [{
      firstName: "Suat",
      lastName: "ÖZÇELİK",
      age: 23,
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100)
    },
    {
      firstName: "Lorem",
      lastName: "Ipsum",
      age: 111,
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100)
    },
    {
      firstName: "Lorem",
      lastName: "ÖZÇELİK",
      age: 22223,
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100)
    }
  ];
    return (
      <div className="col-md-11 text-center">
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            },
            {
              Header: "Age",
              accessor: "age"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TestContainer;

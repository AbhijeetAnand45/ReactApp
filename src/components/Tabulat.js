import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css'; // default theme
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css'; // bootstrap theme

const data = [
  { id: 1, name: 'John', age: 29 },
  { id: 2, name: 'Jane', age: 32 },
  { id: 3, name: 'Peter', age: 24 },
];

const columns = [
  { title: 'ID', field: 'id', width: 150 },
  { title: 'Name', field: 'name', width: 150 },
  { title: 'Age', field: 'age', width: 150 },
];

const Tabulat = () => {
  return (
    <div>
      <ReactTabulator
        data={data}
        columns={columns}
        tooltips={true}
        layout={"fitColumns"}
      />
    </div>
  );
};

export default Tabulat;

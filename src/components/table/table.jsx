import React from 'react';
import './table.css';

const Table = () => {
  return (
    <div className="main-board__table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>id labore ex et quam laborum</td>
            <td>test@test.ru</td>
          </tr>
          <tr>
            <td>2</td>
            <td>quo vero reiciendis velit similique earu</td>
            <td>mock@mock.ru</td>
          </tr>
          <tr>
            <td>3</td>
            <td>simple text</td>
            <td>fake@fake.ru</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

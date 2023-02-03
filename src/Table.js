import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();

  const array = useSelector((state) => state.data); //
  console.log(array);
  return (
    <>
      <h1>Student datails</h1>
      <button
        onClick={() => {
          navigate("/addStudent");
        }}
      >
        Add New
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => (
            // each item is an object
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              {/* <td>{item.change}</td> */}
              <td>
                {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                <Link to="./editStudent" state={{ data: index }}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;

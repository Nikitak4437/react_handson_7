import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addData, editData } from "./Slice";

function Edit() {
  console.log("edut Index : ");
  const location = useLocation(); // returns the location object
  const navigate = useNavigate();
  const index = location.state?.data;

  console.log("edut Index : " + index);
  const dispatch = useDispatch();
  var array = useSelector((state) => state.data); //
  var data = {
    name: "",
    id: "",
    age: "",
    course: "",
    batch: "",
  };
  var newObj = {};
  // array of objects : context.entries
  // function         : context.updateFunction
  if (index || index !== "" || index === "undefined") {
    // array[index] = {
    //   name: "",
    //   id: "",
    //   age: "",
    //   course: "",
    //   batch: "",
    // };
  } else {
    newObj = {
      name: array[index].name,
      id: array[index].id,
    };
    data = array[index];
  }
  // the object in which the changes will be done

  const handleChange = (event) => {
    newObj[event.target.name] = event.target.value;
    // console.log(newObj);
  };

  const handleUpdate = (event) => {
    // console.log(context.entries[index])
    dispatch(editData({ newObj, index }));

    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj) //  updated prevObj is the new state
    //     }
    //    );
    navigate("/");
  };
  const handleAdd = (event) => {
    // console.log(context.entries[index])
    dispatch(addData({ newObj, index }));

    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj) //  updated prevObj is the new state
    //     }
    //    );
    navigate("/");
  };

  return (
    <>
      <input
        onChange={handleChange}
        name="name"
        placeholder="Name"
        defaultValue={data.name}
      ></input>

      <input
        onChange={handleChange}
        name="age"
        placeholder="Age"
        defaultValue={data.age}
      ></input>
      <br />
      <input
        onChange={handleChange}
        name="course"
        placeholder="course"
        defaultValue={data.course}
      ></input>
      <input
        onChange={handleChange}
        name="batch"
        placeholder="batch"
        defaultValue={data.batch}
      ></input>
      <br />

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Cancel
      </button>
      {data.name == "" ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      <br />
      <div></div>
    </>
  );
}

export default Edit;

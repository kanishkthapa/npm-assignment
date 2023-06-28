import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [packagesList, setPackagesList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/")
    .then((res) => {
      setPackagesList(res.data);
    })
  },[])
  const [description, setDescription] = useState("");
  console.log(state.name);
  const handleClick = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = () => {
    // Get the packagesList from localStorage

    // let packagesList; 
    // JSON.parse(localStorage.getItem("packagesList"));
    // axios.get("http://localhost:4000").then((res) => packagesList=res.data);

    // Find the index of the package to update
    // console.log(state);
    if (description.length !== 0) {
      state.description = description;
    }

    // Update the description of the package with the new value entered by the user
    
    // console.log(state.packageName);
    // Update the packagesList in localStorage
    // localStorage.setItem("packagesList", JSON.stringify(packagesList));
    console.log(state);
    axios.patch(`http://localhost:4000/edit/${state.packageName}`, { "description": description })
    .then(() => {
      axios.get("http://localhost:4000/")
        .then((res) => {
          setPackagesList(res.data);
          navigate("/");
        });
      });   
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className="w-[500px] h-[500px] bg-slate-400 rounded-lg p-5 relative">
        <div className="text-2xl">
          <span className="font-bold text-3xl">Name:</span> {state.packageName}
        </div>
        <div className="text-2xl mt-4">
          <span className="font-bold text-3xl">description:</span>{" "}
          {state.description}
        </div>
        <div className="text-3xl mt-4 font-bold">Update the Description</div>
        <textarea
          value={description}
          onChange={handleChange}
          type="text"
          className="px-4 py-2 rounded-lg w-full mt-3 mb-4 h-[9em]"
        />
        <button
          className="font-medium  px-4 py-2 hover:opacity-80 text-3xl text-center w-full bg-blue-400 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="font-medium mt-3 px-4 py-2 hover:opacity-80 text-3xl text-center w-full bg-blue-400 rounded"
          onClick={handleClick}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default Edit;

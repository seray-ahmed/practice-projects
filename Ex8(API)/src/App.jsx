import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserByID = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //POST: veri eklemek
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUSer) => {
    //PUT: veri guncellemek
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUSer);
  };

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse);
  };

  useEffect(() => {
    //getAllUsers()
    //getUserByID()
    // const newUser = {
    //   username: "fsdf",
    //   password: "3232",
    // };
    // createUser(newUser);
    // updateUser("bb23", {
    //   username: "yakup",
    //   password: "1212",
    // });

    deleteUserById("bb23");
  }, []);

  return <div></div>;
}

export default App;

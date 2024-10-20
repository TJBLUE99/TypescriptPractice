import React, { ChangeEventHandler, useState } from "react";

import Button from "./components/atomicComponents/Button/Button";
import AtomicInput from "./components/atomicComponents/TextField/TextField";
import { Box, Typography } from "@mui/material";

const test = () => {
  console.log("Test function");
};

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeInputField = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("On change event: ", e.target.value);
    setInputValue(e.target.value);
  };

  const handleGetPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("I am gettig password from text field: ", password);
    setPassword(event.target.value);
  };

  const handleGetEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("I am gettig password from text field: ", email);
    setEmail(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1"> Create New user: </Typography>
        <AtomicInput
          placeholder="search here..."
          type="text"
          label={"Enter username"}
          value={inputValue}
          onChange={handleChangeInputField}
        ></AtomicInput>
        <br></br>
        <AtomicInput
          placeholder="search here..."
          type="password"
          label={"Enter password"}
          value={password}
          onChange={handleGetPassword}
        ></AtomicInput>
        <AtomicInput
          placeholder="search here..."
          type="text"
          label={"Enter email Id"}
          value={email}
          onChange={handleGetEmail}
        ></AtomicInput>
        <br></br>
        <Button
          disabled={false}
          title="create new User"
          handleClick={test}
        ></Button>
      </Box>
    </>
  );
};

export default App;

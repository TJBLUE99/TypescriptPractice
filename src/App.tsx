import React, { useState } from "react";

import Button from "./components/atomicComponents/Button/Button";
import AtomicInput from "./components/atomicComponents/TextField/TextField";
import { Box, Typography } from "@mui/material";
import Modal from "./components/atomicComponents/Modal/Modal";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChangeInputField = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(e.target.value);
  };

  const handleGetPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleGetEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
          handleClick={handleModalOpen}
        ></Button>
      </Box>
      {showModal && (
        <Modal
          isOpen={showModal}
          title={"Create New user"}
          message={"Are you sure you want to add this user to the current list"}
          onClose={handleCloseModal}
          handleChange={function (): Promise<boolean> {
            throw new Error("Function not implemented.");
          }}
          modalType={""}
        ></Modal>
      )}
    </>
  );
};

export default App;

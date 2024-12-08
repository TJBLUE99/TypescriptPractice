import React, { useEffect, useState } from "react";

import Button from "./components/atomicComponents/Button/Button";
import AtomicInput from "./components/atomicComponents/TextField/TextField";
import { Box, Typography } from "@mui/material";
import Modal from "./components/atomicComponents/Modal/Modal";
import { fetchAllUsers } from "./services/user.service";
import { UserDetailsModal } from "./models/UserDetails";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [users, setUsers] = useState<UserDetailsModal[]>([]);
  const getallUserDetails = async () => {
    await fetchAllUsers()
      .then((res) => {
        setUsers(res.message);
        console.log(res.message);
      })
      .catch((err) => {
        console.log("Error fetching user details: ", err);
      });
  };

  useEffect(() => {
    getallUserDetails();
  }, []);

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
        <Typography sx={{ mt: 2 }} variant="body1">
          {" "}
          List of current users{" "}
        </Typography>
        <hr></hr>
        {users && users.length > 0 ? (
          <table
            style={{
              width: "100%",
              margin: "20px auto",
              borderCollapse: "collapse",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the table
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  Id
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  Username
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  Password
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "2px solid #ddd",
                  }}
                >
                  User Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr
                  key={item.userID}
                  style={{
                    borderBottom: "1px solid #f2f2f2",
                    cursor: "pointer", // Cursor change for better UX
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f5f5"; // Hover effect
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = ""; // Remove hover effect
                  }}
                >
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderLeft: "1px solid #f2f2f2",
                      borderRight: "1px solid #f2f2f2",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)", // Inset shadow
                    }}
                  >
                    {item.userID}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderLeft: "1px solid #f2f2f2",
                      borderRight: "1px solid #f2f2f2",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {item.userName}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderLeft: "1px solid #f2f2f2",
                      borderRight: "1px solid #f2f2f2",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {item.userPassword}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderLeft: "1px solid #f2f2f2",
                      borderRight: "1px solid #f2f2f2",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {item.userEmail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#888",
              fontWeight: "500",
            }}
          >
            No users found.
          </p>
        )}
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

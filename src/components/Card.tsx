import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import CustomizedProgressBars from "./Guage/LinearProgress";
import GaugeValueRangeNoSnap from "./Guage/Gauge";
import "./Card.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  borderRadius: "1rem",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  cursor: "pointer",
  "&hover": {},
}));

interface CardProps {
  title: string;
  deployed: number;
  available: number;
  total: number;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div>
      <Item>
        <div className="title" style={{ marginLeft: "1rem" }}>
          <Typography variant="h4"> {title}</Typography>
        </div>
        <div className="item_section">
          <div className="graphtile" style={{ marginTop: "2rem" }}>
            <GaugeValueRangeNoSnap />
          </div>
          <div
            className="statisticstile"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <CustomizedProgressBars label="test1" test1={21} test2={33} />
            <CustomizedProgressBars label="test2" test1={21} test2={33} />
            <CustomizedProgressBars label="test3" test1={22} test2={330} />
          </div>
        </div>
      </Item>
    </div>
  );
};

export default Card;

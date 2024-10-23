import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

interface CustomizedProgressBarsProps {
  test1: number;
  test2: number;
  label: string;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "24rem",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const CustomizedProgressBars: React.FC<CustomizedProgressBarsProps> = ({
  label,
  test1,
  test2,
}) => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="body1">{label}</Typography>
        <Typography variant="body1">
          <strong>{test1}</strong>/{test2}
        </Typography>
      </div>
      <BorderLinearProgress variant="determinate" value={50} />
    </Stack>
  );
};

export default CustomizedProgressBars;

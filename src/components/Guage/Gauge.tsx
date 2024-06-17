import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts";

const GaugeValueRangeNoSnap: React.FC = () => {
  return (
    <Gauge
      width={200}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 45,
          transform: "translate(0px, 0px)",
        },
      }}
      height={200}
      value={50}
    />
  );
};

export default GaugeValueRangeNoSnap;

import React from "react";
import Card from "./components/Card";
import { Grid } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card title="sample1" deployed={2} total={5} available={10} />
        </Grid>
        <Grid item xs={6}>
          <Card title="sample2" deployed={2} total={5} available={10} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

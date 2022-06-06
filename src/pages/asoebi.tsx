import PageLayout from "../components/layout";
import { Grid } from "@mui/material";

const AsoEbi = () => {
  return (
    <PageLayout title="AsoEbi - theBMWedding">
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="bg-red-900">
            1
          </Grid>
          <Grid item xs={6}>
            2
          </Grid>
        </Grid>
      </div>
    </PageLayout>
  );
};

export default AsoEbi;

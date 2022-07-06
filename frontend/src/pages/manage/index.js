import { Container } from "@mui/material";
import React from "react";
import ManageTable from "./manageTable";

const ManagePage = () => {
  return (
    <Container component="main" sx={{ pt: 6, pb: 6 }}>
      <ManageTable />
    </Container>
  );
};

export default ManagePage;

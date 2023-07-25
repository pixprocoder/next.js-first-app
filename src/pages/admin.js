import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

function AdminPage() {
  return <div>AdminPage</div>;
}

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

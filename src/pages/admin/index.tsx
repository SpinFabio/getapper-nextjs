import React, { memo } from "react";
import AdminDashboardSpa from "@/spas/admin-dashboard";

type AdminProps = {};

const Admin = memo(({}: AdminProps) => {
  return <AdminDashboardSpa />;
});
Admin.displayName = "Admin";

export default Admin;

import React from "react";
import dynamic from "next/dynamic";

const AdminDashboardSpa = dynamic(
  () => import("./AppWrapper").then((module) => module.default),
  {
    ssr: false,
    /*
  serve per poter evitare chw la SPA venga caricata server side
  e che crei quindi qualche problema con il routing client side

  */
  },
);

export default AdminDashboardSpa;

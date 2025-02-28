import React from "react";

import Badget from "../components/dashboard-components/Badget";
import Historial from "../components/dashboard-components/Historial";

export default function Dashboard() {
  return (
    <main>
      <Badget />
      <Historial />
    </main>
  );
}

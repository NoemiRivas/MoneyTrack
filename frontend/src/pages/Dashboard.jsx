import React from "react";

import Badget from "../components/dashboard-components/Badget";
import Historial from "../components/dashboard-components/Historial";
import RigthSidebar from "../components/RigthSidebar";



export default function Dashboard() {

  
  return (
    <main>
  
        <RigthSidebar />
        <Badget />
        <Historial />

    </main>
  );
}

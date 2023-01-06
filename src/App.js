import React from "react";

import AllRoutes from "./routes/Routes";

function App() {
  return (
    <AllRoutes/>
  )
}

export default App;

// Function to separate values in thousands
export const formatPrice = Intl.NumberFormat('es-ES')

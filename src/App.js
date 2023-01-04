// Import components
import Layout from "./components/Layout/Layout";

function App() {
  return <Layout />;
}

export default App;

// Function to separate values in thousands
export const priceFormat = Intl.NumberFormat('es-ES')

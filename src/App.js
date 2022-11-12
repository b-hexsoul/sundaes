import { Routes, Route } from "react-router-dom";
import "./App.css";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <div>
      <OrderEntry />
    </div>
    // <Routes>
    //   <Route path="/order" element={<OrderEntry />} />
    // </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
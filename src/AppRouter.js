import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Requests from './pages/Requests';
import Info from './pages/MoreInfo';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="requests" element={<Requests />} />
        <Route path="moreInfo" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
import { useState } from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="app dFlex">
      <Sidebar setIsActive={setIsActive} isActive={isActive} />
      <div className="main">
        <Content setIsActive={setIsActive} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import MainPart from "./components/main";
import ReactDOM from "react-dom/client";
import "../src/Css/App.css";
import "../src/Css/LogIn.css";
import "../src/Css/HistoryWindow.css";

import "bootstrap/dist/css/bootstrap.css";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<MainPart />);

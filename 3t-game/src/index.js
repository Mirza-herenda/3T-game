import MainPart from "./components/main";
import  ReactDOM  from "react-dom/client";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';

const root=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(root);
reactRoot.render(<MainPart/>);

import "./Portal.css";
import ReactDOM from "react-dom";

const Portal = ({children}) => {
  return ReactDOM.createPortal(
      children,
      document.body //document.getElementById('portal')
    )
}

export default Portal;
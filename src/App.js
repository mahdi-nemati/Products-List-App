import "./App.css";
import ProdutListApp from "./components/ProductListApp";
import { ToastProvider } from "react-toast-notifications";
function App() {
  return (
    <ToastProvider>
      <div>
        <ProdutListApp />
      </div>
    </ToastProvider>
  );
}

export default App;

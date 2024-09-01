import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Conponents/Header";
import Items from "./Conponents/Items";
import { Provider } from "react-redux";
import { store } from "./store";
import CartItem from "./Conponents/CartItem";
import DetailPage from "./Conponents/DetailPage";
import OrderedList from "./Conponents/OrderedList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/cartitem" element={<CartItem />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/order" element={<OrderedList />} />
        </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

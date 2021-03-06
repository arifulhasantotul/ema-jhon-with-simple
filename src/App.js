import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";

function App() {
   return (
      <div>
         <Router>
            <Header></Header>
            <Switch>
               <Route exact path="/">
                  <Shop></Shop>
               </Route>
               <Route path="/shop">
                  <Shop></Shop>
               </Route>
               <Route path="/order">
                  <OrderReview></OrderReview>
               </Route>
               <Route path="/inventory">
                  <Inventory></Inventory>
               </Route>
               <Route path="/contact">
                  <Contact></Contact>
               </Route>
               <Route path="/placeorder">
                  <PlaceOrder></PlaceOrder>
               </Route>
               <Route path="*">
                  <NotFound></NotFound>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;

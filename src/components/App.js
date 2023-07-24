import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Haeder";
import Main from "./Main";

function App() {

  const meal = useSelector(state => state.meal.meal);

  console.log(meal)
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

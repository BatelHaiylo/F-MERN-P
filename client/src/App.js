import "./App.css";
import Header from "./components/features/Header/Header.component";
import Router from "./router/Router.component";
import Footer from "./components/features/Footer/Footer.component";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br className="mt-5"></br>
      <br></br>
      <Router />
      <Footer />
    </div>
  );
}

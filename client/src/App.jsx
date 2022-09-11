import { Navbar, Welcome, Footer, Services, Transaction } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transaction />
        <Footer />
      </div>
    </div>
  );
};

export default App;

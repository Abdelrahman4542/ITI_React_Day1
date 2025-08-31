import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
// Make sure Home.jsx, About.jsx, and Contact.jsx exist in src/components/

function App() {
  return (
    <div>
      <h1>hello </h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;

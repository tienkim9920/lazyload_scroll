import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Component/Home")), 1000);
  });
});
const About = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Component/About")), 1000);
  });
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

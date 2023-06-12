import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./data/routes.json";
import Header from "./components/header/Header";
import './app.css'

const pageComponents = routes.reduce((components, page) => {
  components[page.component] = lazy(() => import(`./pages/${page.component}`));
  return components;
}, {});

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {routes.map((page, index) => {
            const PageComponent = pageComponents[page.component];
            return (
              <Route
                key={index}
                path={page.path}
                element={<PageComponent/>}
                />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

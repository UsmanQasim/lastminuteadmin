import React from "react";
import { useState, useEffect } from "react";

import { SECRET_KEY } from "./utils/secrets";

import { AnimatePresence } from "framer-motion";

import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import { authRoutes, appRoutes } from "./utils/routes";

const RouteHandler = () => {
  const [logged, setLogged] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("user_key")) {
      let st_user_val = localStorage.getItem("user_key");
      if (st_user_val.includes(SECRET_KEY)) {
        setLogged(true);
      }
    } else setLogged(false);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/notfound" component={NotFound} />
        <Route>
          <Switch>
            {logged === null ? (
              <>
                <h1>Loading...</h1>
              </>
            ) : !logged ? (
              authRoutes.map(({ destination, comp }, key) => (
                <Route key={key} path={destination} component={comp} exact />
              ))
            ) : (
              appRoutes.map(({ destination, comp }, key) => (
                <Route key={key} path={destination} component={comp} exact />
              ))
            )}
            <Redirect to="/notfound" />
          </Switch>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Smoothly Done</h1>
    </div>
  );
};

export default RouteHandler;

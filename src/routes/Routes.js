import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  LINK_BLOG,
  LINK_HOME,
  LINK_ABOUT,
  LINK_CONTACT,
  LINK_PRODUCT,
  LINK_ERROR,
} from "./../constants/utils";

import Layout from "./../layout/Layout";

import Home from "./../views/Home";
import About from "./../views/About";
import Blog from "./../views/Blog";
import Contact from "./../views/Contact";
import Product from "./../views/Product";
import Error404 from "./../views/Error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={LINK_HOME} component={Home} />
          <Route exact path={LINK_ABOUT} component={About} />
          <Route exact path={LINK_BLOG} component={Blog} />
          <Route exact path={LINK_CONTACT} component={Contact} />
          <Route exact path={LINK_PRODUCT} component={Product} />
          <Route path={LINK_ERROR} component={Error404} />
          {/* <Redirect from="*" to={LINK_ERROR} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  linkBlog,
  linkHome,
  linkAbout,
  linkContact,
  linkProduct,
} from "./../constants/utils";
import Home from "./../views/Home";
import About from "./../views/About";
import Blog from "./../views/Blog";
import Contact from "./../views/Contact";
import Product from "./../views/Product";
import Error404 from "../views/Error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={linkHome} component={Home} />
        <Route exact path={linkAbout} component={About} />
        <Route exact path={linkBlog} component={Blog} />
        <Route exact path={linkContact} component={Contact} />
        <Route exact path={linkProduct} component={Product} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

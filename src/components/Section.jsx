import React from "react";
import Homepage from "../components/HomePage";
import About from "../components/About";
import { Route } from "react-router-dom";
import Contact from "./Contact";
import ImageUploader from "./ImageUploader";
import Portfolio from "./Portfolio";
import Email from "../components/Email";

export class Section extends React.Component {
  render() {
    return (
      <section>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/upload" component={ImageUploader} />
        <Route path="/email" component={Email} />
      </section>
    );
  }
}
export default Section;

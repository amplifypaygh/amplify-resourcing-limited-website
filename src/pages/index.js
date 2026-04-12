import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Insight = lazy(() => import("./Insight"));
const Service = lazy(() => import("./Service"));
const NotFound = lazy(() => import("./NotFound"));


const Pages ={
  Home,
  About,
  Contact,
  Insight,
  Service,
  NotFound,
}

export default Pages;
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "./pages";

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import SeoManager from "./components/SeoManager";

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <SeoManager />
        <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/about" element={<Pages.About />} />
            <Route path="/services" element={<Pages.Service />} />
            <Route path="/insights" element={<Pages.Insight />} />
            <Route path="/contact" element={<Pages.Contact />} />
            <Route path="*" element={<Pages.NotFound />} />
        </Routes>
    </Suspense>
  );
}
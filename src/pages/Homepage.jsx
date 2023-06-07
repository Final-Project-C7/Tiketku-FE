import React, { useState } from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import BannerHomepage from "../components/BannerHomepage";
import FormFlight from "../components/Form/FormFlight";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <BannerHomepage />
      <FormFlight />
    </>
  );
}

export default Homepage;

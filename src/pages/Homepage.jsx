import React, { useState } from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import BannerHomepage from "../components/BannerHomepage";
import FormFlight from "../components/Form/FormFlight";
import DestinasiFav from "../components/DestinasiFav";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <BannerHomepage />
      <FormFlight />
      <DestinasiFav />
    </>
  );
}

export default Homepage;

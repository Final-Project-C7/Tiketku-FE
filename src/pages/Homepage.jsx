import React, { useState } from "react";
import NavbarHomepage from "../components/NavbarHomepage";
import FormFlight from "../components/Form/FormFlight";
import DestinasiFav from "../components/DestinasiFav";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <FormFlight />
      <DestinasiFav />
    </>
  );
}

export default Homepage;

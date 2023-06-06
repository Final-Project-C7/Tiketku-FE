import React, { useState } from "react";
import NavbarHomepage from "./NavbarHomepage";
import BannerHomepage from "./BannerHomepage";
import FormFlight from "./FormFlight";

function Main() {
  return (
    <>
      <NavbarHomepage />
      <BannerHomepage />
      <FormFlight />
    </>
  );
}

export default Main;

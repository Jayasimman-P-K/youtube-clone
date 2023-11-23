import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={"mx-2 " + (isMenuOpen ? " w-10/12" : " w-12/12")}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

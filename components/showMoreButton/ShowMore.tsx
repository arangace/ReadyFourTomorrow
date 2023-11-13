import React from "react";
import { Button } from "./ShowMoreStyles";

type ShowMoreButton = {
  showMore: boolean;
  handleClick: () => void;
};

const ShowMoreButton = ({ showMore, handleClick }: ShowMoreButton) => {
  const handleMoreClick = () => {
    handleClick();
  };

  return (
    <Button type="button" onClick={handleMoreClick}>
      <span> {showMore ? "Less detail" : "More detail"}</span>
      <i
        className={`fa-solid ${showMore ? "fa-chevron-up" : "fa-chevron-down"}`}
      ></i>
    </Button>
  );
};

export default ShowMoreButton;

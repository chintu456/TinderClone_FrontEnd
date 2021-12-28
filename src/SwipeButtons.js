import "./SwipeButtons.css";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavouriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/Button";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipebuttons__repeat">
        Replay
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebuttons__left">
        Left
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipebuttons__star">
        Star
        <StarRateIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipebuttons__right">
        Right
        <FavouriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="swipebuttons__lightning">
        Lighning
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default SwipeButtons;

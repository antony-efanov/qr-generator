import { FC } from "react";
import { useDispatch } from "react-redux";
import { Color } from "../../common/enums";
import {
  setBlueAction,
  setDarkAction,
  setRedAction,
} from "../../store/slices/colorSlice";
import { IColorButtonProps } from "./types";

const ColorButton: FC<IColorButtonProps> = ({ colorBG, colorQR, color }) => {
  const dispatch = useDispatch();

  const onChangeQrColor = () => {
    switch (colorBG) {
      case Color.White:
        return dispatch(setDarkAction());
      case Color.Yellow:
        return dispatch(setBlueAction());
      case Color.Red:
        return dispatch(setRedAction());
    }
  };

  return (
    <button
      aria-label="changeColor-button"
      onClick={onChangeQrColor}
      className={
        colorQR === color.dark && colorBG === color.light
          ? "qrCode__buttons--color active"
          : "qrCode__buttons--color"
      }
    >
      <svg
        width="26"
        height="7"
        viewBox="0 0 26 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.5C0 1.567 1.567 0 3.5 0H16L14 7H3.5C1.567 7 0 5.433 0 3.5V3.5Z"
          fill={colorBG}
        />
        <path
          d="M14 0H22.5C24.433 0 26 1.567 26 3.5V3.5C26 5.433 24.433 7 22.5 7H12L14 0Z"
          fill={colorQR}
        />
      </svg>
    </button>
  );
};

export default ColorButton;

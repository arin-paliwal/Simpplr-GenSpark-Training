import { useContext } from "react";
import { ColorContext } from "../../context/color-context";

const ColorSwatch = () => {
  const { state, dispatch } = useContext(ColorContext);
  return (
    <section className="flex flex-col items-center gap-2 h-80">
      <div
        className="w-full h-full border-2 border-slate-900"
        style={{ backgroundColor: state.hexColor }}
      />
    </section>
  );
};

export default ColorSwatch;

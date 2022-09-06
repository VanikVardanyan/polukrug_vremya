import { Link } from "react-router-dom";
import { Back, SemiCircle1, SemiCircle2, SemiHead } from "./styledComponents";

export const CircleHalf = () => {
  return (
    <>
      <Link to="/" style={{ display: "block", textDecoration: "none" }}>
        <Back>Back</Back>
      </Link>
      <SemiHead>Semicircle</SemiHead>
      <div>
        <SemiCircle1 />
        <SemiCircle2 />
      </div>
    </>
  );
};

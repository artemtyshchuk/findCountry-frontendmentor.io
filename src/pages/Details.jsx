import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Info } from "../components/Info/Info";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const currentCountry = null;
  return (
    <div>
      <button className="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { Info } from "../components/Info/Info";
import {
  selectCurrentCountry,
  selectDetails,
} from "../store/details/details-selectors";
import { useEffect } from "react";
import {
  clearDetails,
  loadCountryByName,
} from "../store/details/details-actions";

export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <div>
      <button className="button" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};

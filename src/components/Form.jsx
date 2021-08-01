import { useDispatch,useSelector } from "react-redux";
import { UpdateLocation,UpdateLocationData } from "../actions"; 

const Form = ()=>{
    const location=useSelector(state=>state.location);
    const dispatch=useDispatch();
    return(
        <div className="container">
            <div className="row">
            <div className="col-12 location-form">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                dispatch(UpdateLocation(e.target.value))
              }}
            ></input>
            <button
              className="btn btn-outline-info"
              onClick={() => {
                dispatch(UpdateLocationData(location))
              }}
            >
              Search
            </button>
          </div>
            </div>
        </div>
    )
}

export default Form;
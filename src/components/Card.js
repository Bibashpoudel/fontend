
import "./Card.scss";

export default function Card(props) {
  const {venue} = props;
  return (
    <div className="row align-items-center">
      <div className="col-12">
        <img
          src={venue.display_image} 
          alt ={venue.name}
          className="img-fluid"
         
          style={{ width: "100%" }}
        />
      </div>
      <div className="col pb-4 card-text ps-3">
        Place Name
        <div>Location</div>
      </div>
      <div className="col-auto text-center pb-4 pe-4 card-text">Price : {venue.display_price}</div>
    </div>
  );
}
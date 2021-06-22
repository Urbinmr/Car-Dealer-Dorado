function VehicleDetail(props) {
  return (
    <div>
      <div>
        <img src={props.value.image} />
      </div>
      {props.value.make}
      {props.value.model}
      {props.value.year}
      {props.value.color}
      {props.value.price}
    </div>
  );
}

export default VehicleDetail;

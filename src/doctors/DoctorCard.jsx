/* eslint-disable react/prop-types */
import Card from "../UI/Card";

const DoctorCard = ({ doctor, openModal }) => {
  return (
    <Card onClick={() => openModal(doctor)}>
      <h2>{doctor.name}</h2>
      <h3>{doctor.specialty}</h3>
      <p>{doctor.location}</p>
      <p>Rating: {doctor.rating}</p>
    </Card>
  );
};

export default DoctorCard;

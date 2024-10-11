/* eslint-disable react/prop-types */
import Modal from "../UI/Modal";

const DoctorDetails = ({ isOpen, onClose, title, selectedDoctor }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <h3>Specialty: {selectedDoctor.specialty}</h3>
      <p>Location: {selectedDoctor.location}</p>
      <p>Rating: {selectedDoctor.rating}</p>
      <p>Email: {selectedDoctor.email}</p>
      <p>Phone: {selectedDoctor.phone}</p>
    </Modal>
  );
};

export default DoctorDetails;

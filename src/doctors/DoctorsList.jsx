import { useEffect, useState, useMemo } from "react";
import { fakeFetch } from "../api/fakeFetch";
import DoctorCard from "./DoctorCard";
import DoctorDetails from "./DoctorDetails";
import SearchBox from "../UI/SearchBox";
import SpecialtyFilter from "../components/SpecialtyFilter";
import LocationFilter from "../components/LocationFilter";
import Shimmer from "../UI/Shimmer";
import "./DoctorsList.css";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [locations, setLocations] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fakeFetch("https://example.com/api/doctors");
      const { status, data } = res;
      if (status === 200) {
        setDoctors(data.doctors);
        const uniqueSpecialties = [
          ...new Set(data.doctors.map((doctor) => doctor.specialty)),
        ];
        const uniqueLocations = [
          ...new Set(data.doctors.map((doctor) => doctor.location)),
        ];
        setSpecialties(uniqueSpecialties);
        setLocations(uniqueLocations);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch = doctor.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const matchesSpecialty = specialtyFilter
        ? doctor.specialty === specialtyFilter
        : true;
      const matchesLocation = locationFilter
        ? doctor.location === locationFilter
        : true;
      return matchesSearch && matchesSpecialty && matchesLocation;
    });
  }, [doctors, debouncedSearchTerm, specialtyFilter, locationFilter]);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <div className="filter-container">
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          label={"Search doctors..."}
        />
        <div>
          <SpecialtyFilter
            specialties={specialties}
            specialtyFilter={specialtyFilter}
            setSpecialtyFilter={setSpecialtyFilter}
          />
          <LocationFilter
            locations={locations}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
          />
        </div>
      </div>

      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {filteredDoctors.length === 0 ? (
            <div className="no-doctors">
              No doctors found matching your criteria.
            </div>
          ) : (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                openModal={openModal}
              />
            ))
          )}
        </>
      )}

      {selectedDoctor && (
        <DoctorDetails
          isOpen={isModalOpen}
          onClose={closeModal}
          title={`${selectedDoctor.name}'s Details`}
          selectedDoctor={selectedDoctor}
        />
      )}
    </>
  );
};

export default DoctorsList;

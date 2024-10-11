/* eslint-disable react/prop-types */
import FilterSelect from "../UI/FilterSelect";

const SpecialtyFilter = ({
  specialties,
  specialtyFilter,
  setSpecialtyFilter,
  filterDoctors,
}) => {
  const handleSpecialtyChange = (value) => {
    filterDoctors("", value, ""); // Reset search and location filters
  };

  return (
    <FilterSelect
      options={specialties}
      selectedValue={specialtyFilter}
      setSelectedValue={setSpecialtyFilter}
      placeholder="All Specialties"
      onChange={handleSpecialtyChange}
    />
  );
};

export default SpecialtyFilter;

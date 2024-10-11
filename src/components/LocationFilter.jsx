/* eslint-disable react/prop-types */
import FilterSelect from "../UI/FilterSelect";

const LocationFilter = ({
  locations,
  locationFilter,
  setLocationFilter,
  filterDoctors,
}) => {
  const handleLocationChange = (value) => {
    filterDoctors("", "", value); // Reset search and specialty filters
  };

  return (
    <FilterSelect
      options={locations}
      selectedValue={locationFilter}
      setSelectedValue={setLocationFilter}
      placeholder="All Locations"
      onChange={handleLocationChange}
    />
  );
};

export default LocationFilter;

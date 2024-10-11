/* eslint-disable react/prop-types */
import "./FilterSelect.css"; // Import the CSS file

const FilterSelect = ({
  options,
  selectedValue,
  setSelectedValue,
  placeholder,
  onChange,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value); // Call the provided onChange function
  };

  return (
    <select
      className="filter-select" // Add the common class here
      value={selectedValue}
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;

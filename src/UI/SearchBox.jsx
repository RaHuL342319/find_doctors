/* eslint-disable react/prop-types */
import "./SearchBox.css"; // Import the CSS file

const SearchBox = ({ searchTerm, setSearchTerm, label }) => {
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  return (
    <input
      type="text"
      className="search-box" // Use the common class
      placeholder={label}
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBox;

import "./Shimmer.css";
const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;

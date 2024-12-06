import { useState } from "react";
import DatePicker from "react-datepicker";

const ChevronIcon = () => (
  <svg
    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ScrollButton = ({ direction, onClick, isVisible }) => {
  if (!isVisible) return null;
  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === 'left' ? '-left-1' : '-right-1'} 
        top-1/2 transform -translate-y-1/2 bg-white shadow-sm rounded-full 
        p-0.5 z-10 hover:bg-gray-50`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={direction === 'left' ? 'rotate-90' : '-rotate-90'}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
};

const Selectors = ({
  centers,
  selectedLocation,
  setSelectedLocation,
  selectedDate,
  setSelectedDate,
  selectedSport,
  setSelectedSport,
  selectedCenter,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const sports = selectedCenter?.sports || [];
  const hasNext = currentIndex + itemsPerPage < sports.length;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex(prev => Math.min(prev + itemsPerPage, sports.length - itemsPerPage));
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentIndex(prev => Math.max(0, prev - itemsPerPage));
    }
  };

  const visibleSports = sports.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex items-center bg-gray-50">
      {/* Date Selector */}
      <div className="relative min-w-[140px]">
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          placeholderText="Select Date"
          className="w-full py-1 px-2 bg-white appearance-none cursor-pointer pr-6 text-gray-700 text-sm border-r"
          dateFormat="do MMM yyyy"
        />
        <ChevronIcon />
      </div>




      {/* Location Selector */}
      {centers?.length > 0 && (
        <div className="relative min-w-[140px]">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full py-1 px-2 bg-white appearance-none cursor-pointer pr-6 text-gray-700 text-sm border-l"
          >
            <option value="">Select Location</option>
            {centers.map((center) => (
              <option key={center._id} value={center.location}>
                {center.location}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </div>
      )}

      {/* Sport Pills Carousel */}
      <div className="relative flex-1 max-w-[240px]">
        <div className="relative px-1 flex justify-center items-center">
          {/* Show the left scroll button only if more than 3 sports exist */}
          {visibleSports.length > 3 && (
            <ScrollButton
              direction="left"
              onClick={handlePrev}
              isVisible={hasPrev}
            />
          )}

          {/* Sports List */}
          <div
            className={`flex transition-all duration-300 ${visibleSports.length}`}>
            {visibleSports.map((sport) => (
              <button
                key={sport._id}
                onClick={() => setSelectedSport(sport.name)}
                className={`px-2 py-1 transition-all min-w-[70px] text-sm whitespace-nowrap ${selectedSport === sport.name
                  ? "bg-white shadow-sm font-medium"
                  : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {sport.name}
              </button>
            ))}
          </div>

          {/* Show the right scroll button only if more than 3 sports exist */}
          {visibleSports.length > 3 && (
            <ScrollButton
              direction="right"
              onClick={handleNext}
              isVisible={hasNext}
            />
          )}
        </div>
      </div>



    </div>
  );
};

export default Selectors;
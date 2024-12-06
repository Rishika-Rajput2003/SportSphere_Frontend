const BookingCard = ({ booking }) => {
  return (
    <div className="bg-[#355e9f] text-center p-3 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-lg">
      <p className="text-white font-semibold text-lg">{booking.user.username}</p>
    </div>
  );
};

export default BookingCard;

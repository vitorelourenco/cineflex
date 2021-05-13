export default function filterState(state) {
  if (!state.hasOwnProperty("seats")) {
    return [[], []];
  }

  const seatNumbers = [];
  const ids = [];
  state.seats.forEach((seat) => {
    if (seat.status === "selected") {
      seatNumbers.push(seat.name);
      ids.push(seat.id);
    }
  });
  return [seatNumbers, ids];
}


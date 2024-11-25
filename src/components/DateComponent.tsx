interface props {
  isoDate: string;
}

// List of month names
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// List of day names
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function DateComponent({ isoDate }: props) {
  const date = new Date(isoDate);

  const dayOfWeek = dayNames[date.getDay()]; // Get day of the week
  const day = date.getDate(); // Day of the month
  const month = monthNames[date.getMonth()]; // Month name
  const year = date.getFullYear(); // Full year

  return (
    <div>
      <p>
        <small>
          {day} {month} {year}
        </small>
      </p>
      <p>
        <b>{dayOfWeek}</b>
      </p>
    </div>
  );
}

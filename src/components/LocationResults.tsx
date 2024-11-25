import { LocationResult, useLocationQuery } from "../queries/LocationQuery";

function joinAdminNames(row: LocationResult): [string] {
  return [row.admin1, row.admin2, row.admin3, row.admin4].filter(
    (i) => i && i != ""
  );
}

interface props {
  searchTerm: string;
  setLocation: (location: [number, number]) => void;
}

export function LocationResults({ searchTerm, setLocation }: props) {
  const {
    isLoading,
    error,
    data,
  } = useLocationQuery(searchTerm);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul className="resultList">
          {data?.map((row) => (
            <li
              key={row.id}
              onClick={() => {
                setLocation([row.latitude, row.longitude]);
              }}
            >
              <span className="placeName">{row.name}</span>,{" "}
              {joinAdminNames(row).join(", ")},{" "}
              <span className="country">{row.country}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

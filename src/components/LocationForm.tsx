import { useState } from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export function LocationForm({ value, setValue }: Props) {
  const [current, setCurrent] = useState(value);

  return (
    <form
      onSubmit={(e) => {
        setValue(current);
        e.preventDefault();
      }}
    >
      <label>
        Location:
        <input
          type="text"
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
          placeholder="Enter a location..."
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

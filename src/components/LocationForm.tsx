import { useState } from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export function LocationForm({ value, setValue }: Props) {
  const [current, setCurrent] = useState(value);

  return (
    <form>
      <label>
        Location:
        <input
          type="text"
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          setValue(current);
        }}
      >
        Search
      </button>
    </form>
  );
}

import React from "react";

const useInput = initial => {
  const [value, setValue] = React.useState(initial);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initial),
  ];
};

export default useInput;

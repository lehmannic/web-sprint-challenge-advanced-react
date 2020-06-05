// write your custom hook here to control your checkout form
// logic
// -- state of the input
// -- handleChanges
// -- clearForm

// import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

export const useForm = (initialValue) => {
  // const [values, setValues] = useLocalStorage(key, initialValue);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // const clearForm = e => {
  //   e.preventDefault();
  //   setValues('');
  // };

  return [values, handleChanges];
};

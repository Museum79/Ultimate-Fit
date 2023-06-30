
import axios from 'axios';

export const createUser = (pseudo, dob, email, password) => async dispatch => {
  const data = {
    pseudo,
    dateOfBirth: dob,
    email,
    password
  };

  console.log("Envoi de données:", data);

  try {
    const response = await axios.post('http://localhost:8080/users', data);
    dispatch({ type: 'USER_CREATED', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_ERROR', payload: error.message });
  }
};

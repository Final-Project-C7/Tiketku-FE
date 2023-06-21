import axios from "axios";

const fetchRegister = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/user/register",
      {
        name,
        password,
        email,
        phoneNumber,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to register");
  }
};

export { fetchRegister };

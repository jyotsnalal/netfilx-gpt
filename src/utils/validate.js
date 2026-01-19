export const checkValidData = (email, password) => {
  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) return "Email ID is not valid";
  if (password.length < 6)
    return "Password must be at least 6 characters";

  return null;
};

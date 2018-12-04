export const login = user => {
  console.log("Ta aqui o user", user);
  return { user, type: "LOGIN" };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

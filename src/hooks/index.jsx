export const useAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();
    return false;
  }

  return true;
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  return navigate("/login");
};

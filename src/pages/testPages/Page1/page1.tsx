import { usePage1Management } from "./usePage1Management";

export const Page1 = () => {
  const { fetchedData, authData, logout } = usePage1Management();

  return (
    <div style={{ margin: "0 60px" }}>
      <h3>{authData.isAuth ? "Login" : "Non-login"}</h3>
      <p>{`${fetchedData?.heartBeat}`}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

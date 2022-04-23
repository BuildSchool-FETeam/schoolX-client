import { usePage2Management } from "./usePage2Management";

export const Page2 = () => {
  const { login } = usePage2Management();

  return (
    <div>
      <h3>Page 2</h3>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

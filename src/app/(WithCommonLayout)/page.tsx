import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <h1>Welcome to next mart home page</h1>
    </div>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserByToken } = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const userData = await getUserByToken(token);

        setUser(userData.user);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <h1>Profile</h1>

      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;

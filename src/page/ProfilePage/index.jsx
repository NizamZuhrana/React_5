import axios from "axios";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    const token = localStorage.getItem("access_token");
    // cara membuat config yang benar
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get("https://dummyjson.com/auth/me", config);
      console.log(response);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center" key={profile.id}>
        <img
          src={profile.image}
          alt={`${profile.username} Profile Picture`}
          className="w-24 h-24 border-4 border-blue-600 rounded-full shadow-md"
        />
        <h2 className="mt-4 text-xl font-bold">{profile.username}</h2>
        <p className="text-gray-600">{profile.gender}</p>
        <p className="text-gray-600">{profile.age}</p>
        <p className="mt-2 text-center text-gray-500">{profile.email}</p>
        
      </div>
    </div>
  );
};

export default ProfilePage;

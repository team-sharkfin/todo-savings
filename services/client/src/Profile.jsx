import { useQuery } from "react-query";
import { getProfile } from "./api.js";
import Banner from "./Banner.jsx";
import ProfileStats from "./ProfileStats.jsx";
import ProfileMain from "./ProfileMain.jsx";

const Profile = () => {
  const { isLoading, data } = useQuery("profile", getProfile, { retry: false });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Banner name={data.name ?? "Hi!"} />
      <div className="row g-0">
        <ProfileStats />
        <ProfileMain />
      </div>
    </>
  );
};

export default Profile;

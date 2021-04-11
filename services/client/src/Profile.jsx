import Banner from "./Banner.jsx";
import ProfileStats from "./ProfileStats.jsx";
import ProfileMain from "./ProfileMain.jsx";
import { getProfile } from "./api";
import { useQuery } from "react-query";

const Profile = () => {
  const { isLoading, data } = useQuery("profile", getProfile);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Banner>Hi!</Banner>
      <div className="row g-0">
        <ProfileStats profile={data} />
        <ProfileMain profile={data} />
      </div>
    </>
  );
};

export default Profile;

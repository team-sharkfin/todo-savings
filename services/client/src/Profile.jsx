import Banner from "./Banner.jsx";
import ProfileStats from "./ProfileStats.jsx";
import ProfileMain from "./ProfileMain.jsx";

const Profile = () => {
  return (
    <>
      <Banner>Hi!</Banner>
      <div className="row g-0">
        <ProfileStats />
        <ProfileMain />
      </div>
    </>
  );
};

export default Profile;

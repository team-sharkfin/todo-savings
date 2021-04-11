import Banner from "./Banner.jsx";
import ProfileStats from "./ProfileStats.jsx";
import ProfileMain from "./ProfileMain.jsx";

const Profile = () => (
    <div className="container">
        <br />
        <Banner name="John Doe" />
        <div className="row g-0">
            <ProfileStats />
            <ProfileMain /> 
        </div>
    </div>
);

export default Profile;
import Banner from "./Banner.jsx";
import RewardAccordion from "./RewardAccordion.jsx";

const Rewards = () => (
  <div className="container">
    <br />
    <Banner>Pending Rewards</Banner>
    <div className="row g-0">
      <RewardAccordion />
    </div>
  </div>
);

export default Rewards;

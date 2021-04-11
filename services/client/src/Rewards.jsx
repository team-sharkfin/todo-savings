import Banner from "./Banner.jsx";
import RewardAccordion from "./RewardAccordion.jsx";

const Rewards = () => (
  <div className="container">
    <br />
    <Banner name="Pending Rewards" />
    <div className="row g-0">
      <RewardAccordion />
    </div>
  </div>
);

export default Rewards;

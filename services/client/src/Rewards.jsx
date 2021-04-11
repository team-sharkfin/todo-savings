import Banner from "./Banner.jsx";
import RewardAccordion from "./RewardAccordion.jsx";

const Rewards = () => (
  <>
    <Banner>Pending Rewards</Banner>
    <div className="row g-0">
      <RewardAccordion />
    </div>
  </>
);

export default Rewards;

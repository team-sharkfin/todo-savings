import { useQuery } from "react-query";
import { getRewards } from "./api";
import Banner from "./Banner.jsx";
import RewardAccordion from "./RewardAccordion";
import RewardForm from "./RewardForm";

const Rewards = () => {
  const { isLoading, data } = useQuery("rewards", getRewards);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Banner>Rewards</Banner>
      <RewardAccordion rewards={data} />
      <RewardForm />
    </>
  );
};

export default Rewards;

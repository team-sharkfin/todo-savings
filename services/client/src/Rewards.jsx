import { useQuery } from "react-query";
import { getRewards } from "./api";
import Banner from "./Banner.jsx";
import Message from "./Message.jsx";
import RewardAccordion from "./RewardAccordion.jsx";
import RewardForm from "./RewardForm.jsx";

const Rewards = () => {
  const { isLoading, data } = useQuery("rewards", getRewards);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Banner>Rewards</Banner>
      <Message show={!data?.length}>
        Click the <strong>Add Reward</strong> button to create your first
        reward.
      </Message>
      <RewardAccordion rewards={data} />
      <RewardForm />
    </>
  );
};

export default Rewards;

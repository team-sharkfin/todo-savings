import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addReward } from "./api";
import CollapsibleFooter from "./CollapsibleFooter";

const RewardForm = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [amountPerTask, setAmountPerTask] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(async (reward) => {
    const rewardId = await addReward(reward);

    setName("");
    setGoal("");
    setAmountPerTask("");

    queryClient.setQueryData("rewards", (rewards) =>
      rewards.concat([
        { rewardId, taskCount: 0, completedTaskCount: 0, ...reward },
      ])
    );
  });

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleGoalChange(event) {
    setGoal(event.target.value);
  }

  function handleAmountPerTaskChange(event) {
    setAmountPerTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    mutation.mutate({
      name,
      goal: parseFloat(goal),
      amountPerTask: parseFloat(amountPerTask),
    });
  }

  return (
    <CollapsibleFooter id="foo" buttonLabel="Add Reward">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="rewardName" className="form-label">
            Reward Name
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="rewardName"
            name="rewardName"
            aria-describedby="rewardHelp"
            value={name}
            onChange={handleNameChange}
          />
          <div id="rewardHelp" className="form-text">
            What are you putting your reward towards? i.e. Vacation, Steak
            dinner, etc.
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="goal" className="form-label">
            Total Goal
          </label>
          <input
            type="number"
            required
            className="form-control"
            id="goal"
            name="goal"
            aria-describedby="goalHelp"
            value={goal}
            onChange={handleGoalChange}
          />
          <div id="goalHelp" className="form-text">
            What final amount are you trying to reach?
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">
            Amount Per Task
          </label>
          <input
            type="number"
            required
            className="form-control"
            id="amount"
            name="amount"
            aria-describedby="amountHelp"
            value={amountPerTask}
            onChange={handleAmountPerTaskChange}
          />
          <div id="amountHelp" className="form-text">
            How much are you rewarding yourself for each completed task?
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </CollapsibleFooter>
  );
};

export default RewardForm;

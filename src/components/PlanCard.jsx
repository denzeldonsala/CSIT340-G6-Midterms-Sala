import Feature from "./Feature";

const PlanCard = ({ name, price, seats, months, storage, support }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE] text-[#000000]">
      <div className="flex-1 p-8">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="mt-2 text-xl">PHP {price} per seat each month</p>
        <ul className="mt-6 text-lg">
          <Feature text={storage} />
          <Feature text={support} />
        </ul>
      </div>

      <p className="bg-[#000000] px-8 py-5 text-2xl font-bold text-[#EEEEEE]">
        Total: PHP {price * seats * months}
      </p>
    </article>
  );
};

export default PlanCard;

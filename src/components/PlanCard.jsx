import Feature from "./Feature";

const PlanCard = (props) => {
  return (
    <>
      <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
        <div className="p-8">
          <h3 className="text-3xl font-bold">{props.name}</h3>
          <p className="mt-2 text-xl">
            PHP {props.price} per {props.seats} each {props.months}
          </p>
          <ul className="mt-6 text-xl">
            <Feature text={props.storage} />
            <Feature text={props.support} />
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
        <div className="p-8">
          <h3 className="text-3xl font-bold">{props.name}</h3>
          <p className="mt-2 text-xl">
            PHP {props.price} per {props.seats} each {props.months}
          </p>
          <ul className="mt-6 text-xl">
            <Feature text={props.storage} />
             <Feature text={props.support}/>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
        <div className="p-8">
          <h3 className="text-3xl font-bold">{props.name}</h3>
          <p className="mt-2 text-xl">
            PHP {props.price} per {props.seats} each {props.months}
          </p>
          <ul className="mt-6 text-xl">
            <Feature text={props.storage} />
            <Feature text={props.support}/>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PlanCard;

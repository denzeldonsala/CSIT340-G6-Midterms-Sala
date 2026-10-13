import { useState } from "react";
import PlanCard from "./PlanCard";

const plans = [
	{
		name: "Starter",
		price: 199,
		storage: "10 GB storage",
		support: "Email support",
	},
	{
		name: "Team",
		price: 499,
		storage: "100 GB storage",
		support: "Chat support",
	},
	{
		name: "Business",
		price: 999,
		storage: "1000 GB storage",
		support: "Phone support",
	},
];

const PlanPicker = () => {
	const [seats, setSeats] = useState(1);
	const [months, setMonths] = useState(1);

	function handleAddSeat() {
		setSeats((currentSeats) => currentSeats + 1);
	}

	function handleAddMonth() {
		setMonths((currentMonths) => currentMonths + 1);
	}

	function handleReset() {
		setSeats(1);
		setMonths(1);
	}

	return (
		<section className="bg-[#000000] px-6 py-12 text-[#EEEEEE] sm:px-10 lg:px-20">
			<div className="mx-auto flex max-w-7xl flex-col gap-8">
				<div className="flex flex-wrap items-end justify-between gap-6">
					<div>
						<p className="text-sm font-semibold uppercase tracking-widest text-[#CB2957]">
							Choose your plan
						</p>
						<h2 className="mt-2 text-3xl font-bold sm:text-4xl">Simple pricing</h2>
						<p className="mt-3 text-lg text-[#DDDDDD]">
							{seats} {seats === 1 ? "seat" : "seats"} · {months} {months === 1 ? "month" : "months"}
						</p>
					</div>

					<div className="flex flex-wrap gap-3">
						<button
							className="cursor-pointer rounded-lg bg-[#CB2957] px-6 py-3 font-bold text-[#EEEEEE] hover:bg-[#a91f47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEEEE]"
							onClick={handleAddSeat}
							type="button"
						>
							Add seat
						</button>
						<button
							className="cursor-pointer rounded-lg bg-[#EEEEEE] px-6 py-3 font-bold text-[#000000] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEEEE]"
							onClick={handleAddMonth}
							type="button"
						>
							Add month
						</button>
						<button
							className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-6 py-[10px] font-bold hover:bg-[#222222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEEEE]"
							onClick={handleReset}
							type="button"
						>
							Reset
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
					{plans.map((plan) => (
						<PlanCard key={plan.name} {...plan} seats={seats} months={months} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PlanPicker;

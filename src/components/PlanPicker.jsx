import { useState } from "react";
import PlanCard from "./PlanCard";
import Summary from "./Summary";

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
		<>
			<section className="bg-[#000000] px-6 py-12 text-[#EEEEEE] sm:px-10 lg:px-20">
				<div className="flex flex-wrap items-end justify-between gap-6">
					<Summary seats={seats} months={months} />

					<div className="flex flex-wrap gap-4">
						<button
							className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE] hover:bg-[#a91f47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEEEE]"
							onClick={handleAddSeat}
							type="button"
						>
							Add seat
						</button>
						<button
							className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEEEE]"
							onClick={handleAddMonth}
							type="button"
						>
							Add month
						</button>
						<button
							className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-[10px] text-xl font-bold hover:bg-[#222222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EEEEEE]"
							onClick={handleReset}
							type="button"
						>
							Reset
						</button>
					</div>
				</div>
			</section>

			<main className="grid flex-1 grid-cols-1 gap-6 px-6 py-10 sm:px-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-20">
				{plans.map((plan) => (
					<PlanCard key={plan.name} {...plan} seats={seats} months={months} />
				))}
			</main>
		</>
	);
};

export default PlanPicker;

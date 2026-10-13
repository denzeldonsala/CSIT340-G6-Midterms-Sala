const Summary = ({ seats, months }) => {
	return (
		<header>
			<h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Build your plan</h2>
			<p className="mt-4 text-2xl text-[#CB2957] sm:text-3xl">
				Seats: {seats} | Months: {months}
			</p>
			<p className="mt-2 text-xl">Quote for Denzel Don L. Sala</p>
		</header>
	);
};

export default Summary;
export function Portfolio() {
	return (
		<div className="bg-purple-900 h-full flex flex-col overflow-hidden">
			<div className="text-white font-medium text-xl flex items-center mt-16 sm:ml-[14%] ml-8">
				<h2>My Portfolio</h2>
			</div>
			<div className="text-purple-600 text-opacity text-3xl sm:text-4xl font-black flex flex-col justify-around h-full items-center">
				<div className="ml-52 -mt-20 sm:ml-96 sm:-mt-80">WEB</div>
				<div className="-ml-20 -mt-20 sm:-ml-72 sm:-mt-64">MOBILE</div>
			</div>
		</div>
	);
}

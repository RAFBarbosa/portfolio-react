import { Squeeze as Hamburger } from "hamburger-react";

export function Menu() {
	return (
		<div className="border-purple-500 border rounded-full text-gray hover:border-gray transition-colors duration-400">
			<div className="">
				<Hamburger size={27} distance={"sm"} />
			</div>
		</div>
	);
}

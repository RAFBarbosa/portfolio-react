import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
	return (
		<div className="absolute w-full">
			<div className="flex justify-between items-center m-9">
				<Logo />
				<Menu />
			</div>
		</div>
	);
}

import { Arrow } from "../components/Arrow";

export function Home() {
	return (
		<div
			className="flex items-center h-full w-full bg-no-repeat bg-center bg-cover text-white"
			style={{
				backgroundImage: `url(
            "./img/code.png"
        )`,
			}}
		>
			<div className="ml-8 sm:ml-[14%]">
				<div className="text-[32px] sm:text-2xl font-medium leading-tight sm:leading-[54px]">
					<h1>
						Hi, I’m
						<span className="text-green"> Raf Barbosa</span>
						<br />
						I’m a front-end developer
					</h1>
				</div>

				<div className="mt-40 animate-bounce">
					<Arrow />
				</div>
			</div>
		</div>
	);
}

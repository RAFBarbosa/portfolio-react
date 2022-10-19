import { Header } from "./components/Header";
// import { MenuLine } from "./components/MenuLine";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

export default function App() {
	return (
		<div className="bg-black h-screen">
			<Header />
			{/* <MenuLine /> */}
			<Home />
			<Portfolio />
		</div>
	);
}

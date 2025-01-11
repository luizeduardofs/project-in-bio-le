import { TrendingUp } from "lucide-react";

export function TotalVisits() {
	return (
		<div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg">
			<span className="font-bold text-white">Total de visitas</span>
			<div className="flex items-center gap-2 text-accent-green">
				<span className="text-3xl font-bold">123</span>
				<TrendingUp />
			</div>
			{/* TODO: Essa parte só vai ter no dashboard */}
			{/* <div className="flex items-center gap-2">
				<button>Portal</button>
				<button>Sair</button>
			</div> */}
		</div>
	);
}

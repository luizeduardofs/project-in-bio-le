import { ProjectCard } from "@/components/shared/project-card";
import { TotalVisits } from "@/components/shared/total-visits";
import UserCard from "@/components/shared/user-card";
import { Plus } from "lucide-react";
import Link from "next/link";

interface ParamsProps {
	params: {
		profile: string;
	};
}

export default async function Profile({ params }: ParamsProps) {
	const { profile } = await params;
	return (
		<div className="relative h-screen flex p-20 overflow-hidden">
			<div className="fixed top-0 left-0 w-full flex items-center justify-center gap-1 py-2 bg-background-tertiary">
				<span>Você está usando a versão trial.</span>
				<Link
					href={`/${profile}/upgrade`}
					className="text-accent-green font-bold"
				>
					Faça o upgrade agora
				</Link>
			</div>
			<div className="w-1/2 flex justify-center h-min">
				<UserCard />
			</div>
			<div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<button className="w-[340px] h=[132px] rounded-[20px] bg-background-secondary flex items-center justify-center hover:border border-dashed">
					<Plus size={40} className="text-accent-green" />
					<span>Novo projeto</span>
				</button>
			</div>
			<div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
				<TotalVisits />
			</div>
		</div>
	);
}

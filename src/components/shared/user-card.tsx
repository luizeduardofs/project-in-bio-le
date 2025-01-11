import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Plus,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function UserCard() {
	const icons = [Facebook, Github, Instagram, Linkedin, Twitter];

	return (
		<div className="w-[348px] flex flex-col items-center gep-5 p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
			<div className="size-48">
				<Image
					width={460}
					height={460}
					src="/me.png"
					alt="Luiz Eduardo"
					className="rounded-full object-cover w-full h-full"
				/>
			</div>
			<div className="flex flex-col w-full gap-2">
				<div className="flex items-center gap-2">
					<h3 className="text-3xl font-bold min-w-0 overflow-hidden">
						Luiz Eduardo
					</h3>
				</div>
				<p className="opacity-40">Software Engineer Full-Stack</p>
			</div>
			<div className="flex flex-col gap-2 w-full mt-4">
				<span className="uppercase text-xs font-medium">Links</span>
				<div className="flex gap-3">
					{icons.map((Icon, index) => (
						<button
							key={index}
							className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
						>
							<Icon />
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-3 w-full h-[172px] mt-4">
				<div className="flex flex-col items-center gap-3 w-full">
					<Button className="w-full">Template SaaS - Compre Agora</Button>
					<button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
						<Plus />
					</button>
				</div>
			</div>
		</div>
	);
}

import { Header } from "@/components/landing-page/header";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";
import { Rocket } from "lucide-react";

export default function Create() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
				<div className="flex items-center gap-4">
					<h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
					<Rocket size={40} />
				</div>
				<form action="" className="w-full flex items-center gap-2">
					<span className="text-white">projectinbio.com/</span>
					<TextInput type="text" />
					<Button className="w-[126px]">Criar</Button>
				</form>
				<div>
					<span className="text-accent-pink">Erro de exemplo</span>
				</div>
			</div>
		</>
	);
}

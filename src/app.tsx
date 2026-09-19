import { Button } from "./components/ui/button";
import { toast } from "./components/ui/toast";

export default function App() {
	function handleOpenToast() {
		toast.add({
			title: "Sucesso",
			description: "Um exemplo de sucesso.",
			type: "success",
		});

		toast.add({
			title: "Aviso",
			description: "Um exemplo de aviso.",
			type: "warning",
		});

		toast.add({
			title: "Erro",
			description: "Um exemplo de erro.",
			type: "error",
		});

		toast.add({
			title: "Informação",
			description: "Um exemplo de informação.",
			type: "info",
		});

		toast.add({
			title: "Carregando...",
			description: "Um exemplo de carregamento.",
			type: "loading",
		});
	}

	return (
		<main className="min-h-svh w-full grid place-content-center gap-4 p-4">
			<h1>RoseRP</h1>
			<Button onClick={handleOpenToast}>Toast</Button>
		</main>
	);
}

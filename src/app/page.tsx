import { FlipWords } from "@/components/ui/flip-words";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
	const words: string[] = ["Destructive.", "Life-Altering.", "Chaotic."];

	return (
		<div>
			<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center text-center">
				<h1 className="font-bold text-4xl sm:text-5xl">Drugs Can Be
					<FlipWords words={words} />
				</h1>
				<p className="py-3 text-lg text-gray-400">Scroll to learn more about its harmful effects.</p>
			</div>
			<div className="px-4 sm:px-6 py-2">
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-lg font-semibold">Addiction</AccordionTrigger>
						<AccordionContent className="text-base">
							Drugs may have hooks that anchor deep into a person&apos;s physiology, giving rise to compulsive drug-seeking behavior. 
							This inability to stop despite the negative consequences can oftentimes completely derail an individual&apos;s life, 
							and prevent the healthy development of their careers, relationships, and other meaningful goals.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-lg font-semibold">Physical Health Problems</AccordionTrigger>
						<AccordionContent className="text-base">
							Illegally-obtained drugs are likely unregulated, and can cause a myriad of health issues 
							like damage to the heart, liver, and other vital organs. Smoking drugs like Marijuana can also lead to respiratory issues like Bronchitis. 
							Moreover, these problems may compound with addiction and lead to the risk of overdose, when the excessive consumption of certain drugs can likewise lead to certain death.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="text-lg font-semibold">Social Isolation</AccordionTrigger>
						<AccordionContent className="text-base">
							Individuals who abuse drugs may withdraw from social activities and community events in an effort to hide their addictions from others, leading to feelings of loneliness and isolation.
							As their focus shifts toward obtaining and using drugs, people may not find they have the time or energy to form and maintain genuine connections, furthering their 
							social reclusion as their only meaningful connection left is that with the drugs they abuse.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
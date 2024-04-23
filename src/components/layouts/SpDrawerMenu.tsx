import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/lib/types/navItem";
import { ChevronRight, MenuIcon } from "lucide-react";

interface SpDrawerMenuProps {
	navItems: NavItem[];
}

export const SpDrawerMenu = ({ navItems }: SpDrawerMenuProps) => (
	<div className="sm:hidden">
		<Sheet>
			<SheetTrigger aria-label="Open menu" className="fixed right-5 bottom-5">
				<MenuIcon
					size={48}
					className="bg-muted p-2 rounded-full text-primary"
				/>
			</SheetTrigger>
			<SheetContent className="bg-muted">
				<SheetHeader>
					<SheetTitle className="mb-6">
						<a href="/">Hello World!!</a>
					</SheetTitle>
				</SheetHeader>
				<ul className="grid gap-2">
					{navItems.map((navItem) => (
						<li key={navItem.label} className="border-b">
							<SheetClose asChild>
								<a href={navItem.href} className="block w-full px-2 py-2">
									<ChevronRight className="inline-block w-4 h-4 mr-1" />
									{navItem.label}
								</a>
							</SheetClose>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	</div>
);

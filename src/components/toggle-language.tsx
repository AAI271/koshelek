import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ToggleLanguage() {

    const pathName = usePathname();
    console.log(pathName)
  return (
        <Button
          variant="ghost"
          size="icon"
          className="ghost"
        >
            {pathName === "/ru" ? (
                <Link href={"/en"}>
                    <span className=" h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">En</span>
                </Link>
            ):(
                <Link href={"/ru"}>
                    <span className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" >Ru</span>
                </Link>
            )}
        </Button>
  );
}

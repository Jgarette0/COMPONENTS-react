import DialogTest from "./Dialog";
import { DropdownMenuDemo } from "./Dropdown";
import { ModeToggle } from "./ModeToggle";
import CheckToday from "./Today";
import { Card } from "./ui/card";

export function Rendering() {
  return (
    <>
      <Card className="flex flex-row place-items-center h-16 w-full gap-2 p-2">
        <CheckToday />
        <DropdownMenuDemo />
        <DialogTest />
        <ModeToggle />
      </Card>
    </>
  );
}

export default Rendering;

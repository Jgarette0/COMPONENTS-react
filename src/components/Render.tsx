import DialogTest from "./Dialog";
import { DropdownMenuDemo } from "./Dropdown";
import { ModeToggle } from "./ModeToggle";
import { HoverCardDemo } from "./Hover";
import CheckToday from "./Today";
import { Card } from "./ui/card";
import DrawerDemo from "./Drawer";
import { UseState } from "./Usestate";
import CarouselDemo from "./Carousel";
import { AvatarProfile } from "./Image";
import CardWithForm from "./Form";

export function Rendering() {
  return (
    <>
      <Card className="flex flex-col w-full">
        <Card className="flex flex-row sm:flex-row-reverse place-items-center h-28 sm:h-16 w-full gap-2 p-2 flex-wrap sticky top-0 rounded-none z-40">
          <ModeToggle />
          <UseState />
          <DialogTest />
          <DropdownMenuDemo />
          <HoverCardDemo />
          <DrawerDemo />
          <CheckToday />
        </Card>
        <div className="flex flex-row flex-wrap">
          <CarouselDemo />
          <AvatarProfile />
        </div>
        <Card className="flex flex-row">
          <CardWithForm />
        </Card>
      </Card>
    </>
  );
}

export default Rendering;

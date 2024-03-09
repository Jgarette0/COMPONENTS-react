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
import LoginForm from "./Login";
import FooterSection from "./Footer";
import SliderComponent from "./Slider";
import MessageComponent from "./Message";
import AccordionComponent from "./Accordion";
import { AlertDialogDemo } from "./Alert";

export function Rendering() {
  return (
    <>
      <Card className="flex flex-col w-full border-none">
        <Card className="flex flex-row sm:flex-row-reverse place-items-center h-28 sm:h-16 w-full gap-2 p-2 flex-wrap sticky top-0 rounded-none z-40 border-none">
          <ModeToggle />
          <UseState />
          <DialogTest />
          <DropdownMenuDemo />
          <HoverCardDemo />
          <DrawerDemo />
          <CheckToday />
        </Card>
        <div className="flex flex-row flex-wrap justify-center place-items-center my-5">
          <CarouselDemo />
          <AvatarProfile />
          <SliderComponent />
          <AlertDialogDemo />
        </div>
        <div className="flex flex-row m-5 flex-wrap justify-between">
          <CardWithForm />
          <LoginForm />
          <MessageComponent />
          <AccordionComponent />
        </div>
        <div>
          <FooterSection />
        </div>
      </Card>
    </>
  );
}

export default Rendering;

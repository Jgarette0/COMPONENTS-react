import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
function DialogTest() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Discover</Button>
      </DialogTrigger>
      <DialogContent className="w-80 sm:w-full md:m-2">
        <DialogHeader>
          <DialogTitle>Hello there beautiful soul.</DialogTitle>
          <DialogDescription>Have a great day!!</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default DialogTest;

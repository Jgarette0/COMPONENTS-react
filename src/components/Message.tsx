import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
export default function MessageComponent() {
  return (
    <div className="flex flex-col w-[320px] rounded-lg border">
      <div className="flex-1 overflow-auto flex flex-col gap-2 p-4">
        <div className="flex items-center space-x-4">
          <CircleUser size={20} />
          <div className="bg-gray-100 rounded-lg p-2 dark:bg-gray-800">
            <div className="text-sm leading-none">
              <strong className="font-medium">You</strong>
            </div>
            <div>Hey there! What's up?</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CircleUser size={20} />
          <div className="bg-gray-100 rounded-lg p-2 dark:bg-gray-800">
            <div className="text-sm leading-none">
              <strong className="font-medium">Bob</strong>
            </div>
            <div>Not much Gar, How about you?</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CircleUser size={20} />
          <div className="bg-gray-100 rounded-lg p-2 dark:bg-gray-800">
            <div className="text-sm leading-none">
              <strong className="font-medium">Alice</strong>
            </div>
            <div>have you seen the new design?</div>
          </div>
        </div>
      </div>
      <div className="border-t p-4 flex items-center gap-4">
        <Input className="flex-1" placeholder="Type a message..." />
        <Button>Send</Button>
      </div>
    </div>
  );
}

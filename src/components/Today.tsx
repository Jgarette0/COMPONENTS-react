import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-dropdown-menu";

export function CheckToday() {
  const [dateTime, setDateTime] = useState("");
  const handleClick = () => {
    const now = new Date();
    const formattedDateTime = `${now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })} 
     ${now.toLocaleDateString([], {
       weekday: "long",
       month: "long",
       day: "numeric",
       year: "numeric",
     })}`;
    setDateTime(formattedDateTime);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" onClick={handleClick}>
          Check Today
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          {dateTime && <Label>{dateTime}</Label>}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default CheckToday;

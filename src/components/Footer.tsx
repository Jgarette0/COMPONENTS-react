import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Home, ArrowBigDown, Pin, Bird, Divide } from "lucide-react";

export default function FooterSection() {
  return (
    <div className="bg-dark">
      <div className="max-w-[1100px] mx-auto py-8 px-4 sm:px-6 lg:px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-3">Build & Find</h5>
            <ul className="space-y-1">
              <li>
                <div className="text-light hover:text-gray-400">
                  Build your Porsche
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Find Your Porsche
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Find a Porsche Centre
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Online Services</h5>
            <ul className="space-y-1">
              <li>
                <div className="text-light hover:text-gray-400">
                  Sign up for News
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Behind the Scenes</h5>
            <ul className="space-y-1">
              <li>
                <div className="text-light hover:text-gray-400">
                  Passion Motorsports
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Porsche Experience
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Porsche Classic
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Visit Porsche Museum
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Porsche Company</h5>
            <ul className="space-y-1">
              <li>
                <div className="text-light hover:text-gray-400">
                  Latest News
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  At a Glance
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Jobs & Careers
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Contact & Information
                </div>
              </li>
              <li>
                <div className="text-light hover:text-gray-400">
                  Christophorus - The Porsche Magazine
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <Button className="mb-4 md:mb-0" variant="outline">
              Share Page
            </Button>
            <div className="flex space-x-2">
              <Home className="h-6 w-6 text-light" />
              <Pin className="h-6 w-6 text-light" />
              <ArrowBigDown className="h-6 w-6 text-light" />
              <Bird className="h-6 w-6 text-light" />
              <Home className="h-6 w-6 text-light" />
              <Divide className="h-6 w-6 text-light" />
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Select>
              <SelectTrigger id="region">
                <SelectValue placeholder="Select a region" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="north-america">North America</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country/region" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-t border-gray-200 py-4 mt-4 text-sm text-light">
          <div className="flex flex-col md:flex-row justify-between">
            <div>© 2024 Porsche Asia Pacific Pte Ltd.</div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <div className="hover:text-gray-400">Legal Notice</div>
              <div className="hover:text-gray-400">Privacy Policy</div>
              <div className="hover:text-gray-400">Cookie Policy</div>
              <div className="hover:text-gray-400">
                Open Source Software Notice
              </div>
              <div className="hover:text-gray-400">Whistleblower System</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

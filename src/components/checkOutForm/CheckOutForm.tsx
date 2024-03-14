import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

import countries from "../../../public/data/countries.json";

function CheckOutForm() {
  return (
    <div className="w-80 p-6 border rounded-xl">
      <div className="calculate-shipping">
        <p className="text-xl font-bold">Calculated Shipping</p>
        <Select>
          <SelectTrigger className="w-full mt-4">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {countries.map((country, index) => (
                <SelectItem value={country.name} key={index}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="row flex gap-4 mt-4">
          <Select>
            <SelectTrigger className="w-1/2">
              <SelectValue placeholder="Province" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="Postal Code" />
        </div>
      </div>
    </div>
  );
}

export default CheckOutForm;

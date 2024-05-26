"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Popover } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { format } from "path";

const SearchForm = () => {
  const form = useForm();
  return (
    <div className="grid w-full items-end gap-4 rounded-lg bg-black sm:grid-cols-2 lg:grid-cols-4 p-6">
      <Form {...form}>
        <FormField
          control={form.control}
          name="property"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Property:</FormLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="Address"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Address:</FormLabel>
                <FormControl>
                  <Input placeholder="Search Buy Address..." />
                </FormControl>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Buy/Sell</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value)
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    className="bg-white rounded-md"
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-800">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;

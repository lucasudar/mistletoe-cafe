import {IWorkTime} from "@/lib/types";

export const workingHours: () => IWorkTime[] = () => {
  return [
    {
      day: "Monday",
      hours: "10:00am - 4:00pm",
    },
    {
      day: "Tuesday",
      hours: "Closed",
    },
    {
      day: "Wednesday",
      hours: "10:00am - 4:00pm",
    },
    {
      day: "Thursday",
      hours: "10:00am - 4:00pm",
    },
    {
      day: "Friday",
      hours: "10:00am - 4:00pm",
    },
    {
      day: "Saturday",
      hours: "10:00am - 4:00pm",
    },
    {
      day: "Sunday",
      hours: "10:00am - 4:00pm",
    },
  ];
}
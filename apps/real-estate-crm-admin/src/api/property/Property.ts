import { Appointment } from "../appointment/Appointment";
import { Agent } from "../agent/Agent";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  squareFootage: number | null;
  typeField?: "Option1" | null;
  appointments?: Array<Appointment>;
  agent?: Agent | null;
};

import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  squareFootage?: number | null;
  typeField?: "Option1" | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agent?: AgentWhereUniqueInput | null;
};

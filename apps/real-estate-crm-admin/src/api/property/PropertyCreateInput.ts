import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyCreateInput = {
  address?: string | null;
  price?: number | null;
  squareFootage?: number | null;
  typeField?: "Option1" | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agent?: AgentWhereUniqueInput | null;
};

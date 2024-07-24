import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  notes?: string | null;
  property?: PropertyWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  agent?: AgentWhereUniqueInput | null;
};

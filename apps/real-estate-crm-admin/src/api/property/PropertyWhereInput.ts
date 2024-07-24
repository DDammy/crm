import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  squareFootage?: IntNullableFilter;
  typeField?: "Option1";
  appointments?: AppointmentListRelationFilter;
  agent?: AgentWhereUniqueInput;
};

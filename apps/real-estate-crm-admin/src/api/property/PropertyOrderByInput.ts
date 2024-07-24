import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  squareFootage?: SortOrder;
  typeField?: SortOrder;
  agentId?: SortOrder;
};

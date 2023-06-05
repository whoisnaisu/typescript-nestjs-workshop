import { newUserDTO } from "./basic-dto";

export type Connector = {
  title: string;
};

export function save(connector: Connector, data: newUserDTO) {}

export type Organization = {
  id: string;
  name: string;
};

export class OrganizationService {
  constructor() {}
  private readonly organization: Organization[] = [];

  findAll(): Organization[] {
    return this.organization;
  }
}

declare namespace Organization {
  namespace Types {
    interface Organization {
      id?: number;
      url?: string;
      external_id?: string;
      name: string;
      created_at?: Date | string;
      updated_at?: Date | string;
      domain_names?: string[];
      details?: string;
      notes?: string;
      group_id?: number;
      shared_tickets?: boolean;
      shared_comments?: boolean;
      tags?: string[];
      organization_fields?: object;
    }
  }

  interface IOrganizationAPI {
    create(organization: Types.Organization): Promise<Types.Organization>
    update(organization_id: number, organization: Types.Organization): Promise<Types.Organization>
    createOrUpdate(organization: Types.Organization): Promise<Types.Organization>
    delete(organization_id: number): Promise<Types.Organization>
    show(organization_id: number): Promise<Types.Organization>
    search(external_id: string): Promise<Types.Organization[]>
  }
}

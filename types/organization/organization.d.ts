declare namespace Organization {
  namespace Types {
    interface IOrganizationDto {
      build(): Organization;

      getId(): number | undefined;
      setId(id?: number): this;

      getUrl(): string | undefined;
      setUrl(url?: string): this;

      getExternalId(): string | undefined;
      setExternalId(external_id?: string): this;

      getName(): string;
      setName(name: string): this;

      getCreatedAt(): Date | string | undefined;
      setCreatedAt(created_at?: Date | string): this;

      getUpdatedAt(): Date | string | undefined;
      setUpdatedAt(updated_at?: Date | string): this;

      getDomainNames(): string[] | undefined;
      setDomainNames(domain_names?: string[]): this;

      getDetails(): string | undefined;
      setDetails(details?: string): this;

      getNotes(): string | undefined;
      setNotes(notes?: string): this;

      getGroupId(): number | undefined;
      setGroupId(group_id?: number): this;

      getSharedTickets(): boolean | undefined;
      setSharedTickets(shared_tickets?: boolean): this;

      getSharedComments(): boolean | undefined;
      setSharedComments(shared_comments?: boolean): this;

      getTags(): string[] | undefined;
      setTags(tags?: string[]): this;

      getOrganizationFields(): object | undefined;
      setOrganizationFields(organization_fields?: object): this;
    }

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

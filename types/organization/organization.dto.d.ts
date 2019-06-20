declare namespace Organization {
  interface OrganizationData {
    getId(): any;
    setId(id?: number): this;

    getUrl(): any;
    setUrl(url?: string): this;

    getExternalId(): any;
    setExternalId(external_id?: string): this;

    getName(): any;
    setName(name: string): this;

    getCreatedAt(): any;
    setCreatedAt(created_at?: Date | string): this;

    getUpdatedAt(): any;
    setUpdatedAt(updated_at?: Date | string): this;

    getDomainNames(): any;
    setDomainNames(domain_names?: string[]): this;

    getDetails(): any;
    setDetails(details?: string): this;

    getNotes(): any;
    setNotes(notes?: string): this;

    getGroupId(): any;
    setGroupId(group_id?: number): this;

    getSharedTickets(): any;
    setSharedTickets(shared_tickets?: boolean): this;

    getSharedComments(): any;
    setSharedComments(shared_comments?: boolean): this;

    getTags(): any;
    setTags(tags?: string[]): this;

    getOrganizationFields(): any;
    setOrganizationFields(organization_fields?: object): this;
  }
}

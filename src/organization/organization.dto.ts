export default class Organization implements Organization.Types.IOrganizationDto {
  private id?: number;
  private url?: string;
  private external_id?: string;
  private name: string;
  private created_at?: Date | string;
  private updated_at?: Date | string;
  private domain_names?: string[];
  private details?: string;
  private notes?: string;
  private group_id?: number;
  private shared_tickets?: boolean;
  private shared_comments?: boolean;
  private tags?: string[];
  private organization_fields?: object;

  public build() {
    return {
      id: this.getId(),
      url: this.getUrl(),
      external_id: this.getExternalId(),
      name: this.getName(),
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      domain_names: this.getDomainNames(),
      details: this.getDetails(),
      notes: this.getNotes(),
      group_id: this.getGroupId(),
      shared_tickets: this.getSharedTickets(),
      shared_comments: this.getSharedComments(),
      tags: this.getTags(),
      organization_fields: this.getOrganizationFields(),
    };
  }

  public getId() { return this.id; }
  public setId(id?: number) { this.id = id; return this; }

  public getUrl() { return this.url; }
  public setUrl(url?: string) { this.url = url; return this; }

  public getExternalId() { return this.external_id; }
  public setExternalId(external_id?: string) { this.external_id = external_id; return this; }

  public getName() { return this.name; }
  public setName(name: string) { this.name = name; return this; }

  public getCreatedAt() { return this.created_at; }
  public setCreatedAt(created_at?: Date | string) { this.created_at = created_at; return this; }

  public getUpdatedAt() { return this.updated_at; }
  public setUpdatedAt(updated_at?: Date | string) { this.updated_at = updated_at; return this; }

  public getDomainNames() { return this.domain_names; }
  public setDomainNames(domain_names?: string[]) { this.domain_names = domain_names; return this; }

  public getDetails() { return this.details; }
  public setDetails(details?: string) { this.details = details; return this; }

  public getNotes() { return this.notes; }
  public setNotes(notes?: string) { this.notes = notes; return this; }

  public getGroupId() { return this.group_id; }
  public setGroupId(group_id?: number) { this.group_id = group_id; return this; }

  public getSharedTickets() { return this.shared_tickets; }
  public setSharedTickets(shared_tickets?: boolean) { this.shared_tickets = shared_tickets; return this; }

  public getSharedComments() { return this.shared_comments; }
  public setSharedComments(shared_comments?: boolean) { this.shared_comments = shared_comments; return this; }

  public getTags() { return this.tags; }
  public setTags(tags?: string[]) { this.tags = tags; return this; }

  public getOrganizationFields() { return this.organization_fields; }
  public setOrganizationFields(organization_fields?: object) { this.organization_fields = organization_fields; return this; }
}

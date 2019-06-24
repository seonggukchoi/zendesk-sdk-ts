export class Organization implements Organization.Dto.IOrganizationDto {
  public id?: number;
  public url?: string;
  public external_id?: string;
  public name: string;
  public created_at?: Date | string;
  public updated_at?: Date | string;
  public domain_names?: string[];
  public details?: string;
  public notes?: string;
  public group_id?: number;
  public shared_tickets?: boolean;
  public shared_comments?: boolean;
  public tags?: string[];
  public organization_fields?: object;

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

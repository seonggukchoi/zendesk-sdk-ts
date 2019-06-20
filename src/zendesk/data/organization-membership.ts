export class OrganizationMembership implements OrganizationMembership {
  public id?: number;
  public url?: string;
  public user_id: number;
  public organization_id: number;
  public default: boolean;
  public created_at?: Date | string;
  public updated_at?: Date | string;

  public getId() { return this.id; }
  public setId(id?: number) { this.id = id; return this; }

  public getUrl() { return this.url; }
  public setUrl(url?: string) { this.url = url; return this; }

  public getUserId() { return this.user_id; }
  public setUserId(user_id: number) { this.user_id = user_id; return this; }

  public getOrganizationId() { return this.organization_id; }
  public setOrganizationId(organization_id: number) { this.organization_id = organization_id; return this; }

  public getDefault() { return this.default; }
  public setDefault(default_: boolean) { this.default = default_; return this; }

  public getCreatedAt() { return this.created_at; }
  public setCreatedAt(created_at?: Date | string) { this.created_at = created_at; return this; }

  public getUpdatedAt() { return this.updated_at; }
  public setUpdatedAt(updated_at?: Date | string) { this.updated_at = updated_at; return this; }
}

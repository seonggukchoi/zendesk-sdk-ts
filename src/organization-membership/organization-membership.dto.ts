export default class OrganizationMembership implements OrganizationMembership.Types.IOrganizationMembershipDto {
  private id?: number;
  private url?: string;
  private user_id: number;
  private organization_id: number;
  private default: boolean;
  private created_at?: Date | string;
  private updated_at?: Date | string;

  public build() {
    return {
      id: this.getId(),
      url: this.getUrl(),
      user_id: this.getUserId(),
      organization_id: this.getOrganizationId(),
      default: this.getDefault(),
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
    };
  }

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

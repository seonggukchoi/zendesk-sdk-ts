declare namespace OrganizationMembership {
  namespace Types {
    interface IOrganizationMembershipDto {
      build(): OrganizationMembership;

      getId(): number | undefined;
      setId(id?: number): this;

      getUrl(): string | undefined;
      setUrl(url?: string): this;

      getUserId(): number | undefined;
      setUserId(user_id: number): this;

      getOrganizationId(): number | undefined;
      setOrganizationId(organization_id: number): this;

      getDefault(): boolean | undefined;
      setDefault(default_: boolean): this;

      getCreatedAt(): Date | string | undefined;
      setCreatedAt(created_at?: Date | string): this;

      getUpdatedAt(): Date | string | undefined;
      setUpdatedAt(updated_at?: Date | string): this;
    }

    interface OrganizationMembership {
      id?: number;
      url?: string;
      user_id: number;
      organization_id: number;
      default: boolean | null;
      created_at?: Date | string;
      updated_at?: Date | string;
    }
  }

  interface IOrganizationMembershipAPI {
    create(organization_membership: Types.OrganizationMembership): Promise<Types.OrganizationMembership>
    delete(organization_membership_id: number): Promise<Types.OrganizationMembership>
    show(organization_membership_id: number): Promise<Types.OrganizationMembership>
  }
}

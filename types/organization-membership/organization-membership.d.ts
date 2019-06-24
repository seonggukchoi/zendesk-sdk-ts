declare namespace OrganizationMembership {
  namespace Types {
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

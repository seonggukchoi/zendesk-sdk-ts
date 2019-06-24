declare namespace OrganizationMembership {
  namespace Dto {
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
}

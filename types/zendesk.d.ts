declare namespace Zendesk {
  interface Zendesk {
    createUserAPI(): User.IUserAPI;
    createOrganizationAPI(): Organization.IOrganizationAPI;
    createOrganizationMembershipAPI(): OrganizationMembership.IOrganizationMembershipAPI;
  }
}

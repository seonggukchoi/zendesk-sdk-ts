declare namespace Zendesk {
  interface Zendesk {
    createUserAPI(): User.UserAPI;
    createOrganizationAPI(): Organization.OrganizationAPI;
    createOrganizationMembershipAPI(): OrganizationMembership.OrganizationMembershipAPI;
  }
}

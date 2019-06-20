import ZendeskAPI from '../zendesk-request';

export default class OrganizationMembershipAPI extends ZendeskAPI {
  public async create(organization_membership: Zendesk.Types.OrganizationMembership) {
    return this.request.post('/organization_memberships.json', { body: { organization_membership } })
    .then((response) => response.organization_membership as Zendesk.Types.OrganizationMembership);
  }

  public async delete(organization_membership_id: number) {
    return this.request.delete(`/organization_memberships/${ organization_membership_id }.json`)
    .then((response) => response.organization_membership as Zendesk.Types.OrganizationMembership);
  }

  public async show(organization_membership_id: number) {
    return this.request.get(`/organization_memberships/${ organization_membership_id }.json`)
    .then((response) => response.organization_membership as Zendesk.Types.OrganizationMembership);
  }
}

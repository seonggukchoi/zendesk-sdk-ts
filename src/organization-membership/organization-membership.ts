import ZendeskRequest from '@/zendesk-request';
import ZendeskError from '@/exceptions/zendesk-error';

export default class OrganizationMembershipAPI extends ZendeskRequest implements OrganizationMembership.IOrganizationMembershipAPI {
  public async create(organization_membership: OrganizationMembership.Types.OrganizationMembership) {
    return this.request.post('/organization_memberships.json', { body: { organization_membership } })
    .then(response => response.organization_membership as OrganizationMembership.Types.OrganizationMembership)
    .catch(error => {
      throw new ZendeskError('Cannot create organization membership.', error);
    });
  }

  public async delete(organization_membership_id: number) {
    return this.request.delete(`/organization_memberships/${ organization_membership_id }.json`)
    .then(response => response.organization_membership as OrganizationMembership.Types.OrganizationMembership)
    .catch(error => {
      throw new ZendeskError('Cannot delete organization membership.', error);
    });
  }

  public async show(organization_membership_id: number) {
    return this.request.get(`/organization_memberships/${ organization_membership_id }.json`)
    .then(response => response.organization_membership as OrganizationMembership.Types.OrganizationMembership)
    .catch(error => {
      throw new ZendeskError('Cannot show organization membership.', error);
    });
  }
}

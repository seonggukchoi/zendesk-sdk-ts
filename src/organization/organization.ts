import ZendeskRequest from '@/zendesk-request';
import ZendeskError from '@/exceptions/zendesk-error';

export default class OrganizationAPI extends ZendeskRequest implements Organization.IOrganizationAPI {
  public async create(organization: Organization.Types.Organization) {
    return this.request.post('/organizations.json', { body: { organization } })
    .then(response => response.organization as Organization.Types.Organization)
    .catch(error => {
      throw new ZendeskError('Cannot create organization.', error);
     });
  }

  public async update(organization_id: number, organization: Organization.Types.Organization) {
    return this.request.put(`/organizations/${ organization_id }.json`, { body: { organization } })
    .then(response => response.organization as Organization.Types.Organization)
    .catch(error => {
      throw new ZendeskError('Cannot update organization.', error);
     });
  }

  public async createOrUpdate(organization: Organization.Types.Organization) {
    return this.request.post(`/organizations/create_or_update.json`, { body: { organization } })
    .then(response => response.organization as Organization.Types.Organization)
    .catch(error => {
      throw new ZendeskError('Cannot createOrUpdate organization.', error);
     });
  }

  public async delete(organization_id: number) {
    return this.request.delete(`/organizations/${ organization_id }.json`)
    .then(response => response.organization as Organization.Types.Organization)
    .catch(error => {
      throw new ZendeskError('Cannot delete organization.', error);
     });
  }

  public async show(organization_id: number) {
    return this.request.get(`/organizations/${ organization_id }.json`)
    .then(response => response.organization as Organization.Types.Organization)
    .catch(error => {
      throw new ZendeskError('Cannot show organization.', error);
     });
  }

  public async search(external_id: string) {
    return this.request.get(`/organizations/search.json`, { qs: { external_id } })
    .then(response => response.organizations as Organization.Types.Organization[])
    .catch(error => {
      throw new ZendeskError('Cannot search organizations.', error);
     });
  }
}

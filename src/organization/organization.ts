import ZendeskAPI from '../zendesk-request';

export default class OrganizationAPI extends ZendeskAPI {
  public async create(organization: Zendesk.Types.Organization) {
    return this.request.post('/organizations.json', { body: { organization } })
    .then((response) => response.organization as Zendesk.Types.Organization);
  }

  public async update(organization_id: number, organization: Zendesk.Types.Organization) {
    return this.request.put(`/organizations/${ organization_id }.json`, { body: { organization } })
    .then((response) => response.organization as Zendesk.Types.Organization);
  }

  public async createOrUpdate(organization: Zendesk.Types.Organization) {
    return this.request.post(`/organizations/create_or_update.json`, { body: { organization } })
    .then((response) => response.organization as Zendesk.Types.Organization);
  }

  public async delete(organization_id: number) {
    return this.request.delete(`/organizations/${ organization_id }.json`)
    .then((response) => response.organization as Zendesk.Types.Organization);
  }

  public async show(organization_id: number) {
    return this.request.get(`/organizations/${ organization_id }.json`)
    .then((response) => response.organization as Zendesk.Types.Organization);
  }

  public async search(external_id: string) {
    return this.request.get(`/organizations/search.json`, { qs: { external_id } })
    .then((response) => response.organizations as Zendesk.Types.Organization[]);
  }
}

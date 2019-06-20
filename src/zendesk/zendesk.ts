import * as config from 'config';

import UserAPI from '@/zendesk/api/user';
import OrganizationAPI from '@/zendesk/api/organization';
import OrganizationMembershipAPI from '@/zendesk/api/organization-membership';

export default class Zendesk implements Zendesk.Zendesk {
  private apikey: string;

  constructor(apikey?: string) {
    this.apikey = config.get('api.zendesk.apikey');
    if (apikey && apikey.length > 0) {
      this.apikey = apikey;
    }
  }

  public createUserAPI(): UserAPI {
    return new UserAPI(this.apikey);
  }

  public createOrganizationAPI(): OrganizationAPI {
    return new OrganizationAPI(this.apikey);
  }

  public createOrganizationMembershipAPI(): OrganizationMembershipAPI {
    return new OrganizationMembershipAPI(this.apikey);
  }
}

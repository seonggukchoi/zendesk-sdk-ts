import ZendeskRequest from '@/zendesk-request';
import ZendeskError from '@/exceptions/zendesk-error';

export default class UserAPI extends ZendeskRequest implements User.IUserAPI {
  public async create(user: User.Types.User) {
    return this.request.post('/users.json', { body: { user } })
    .then(response => response.user as User.Types.User)
    .catch(error => {
      throw new ZendeskError('Cannot create user.', error);
    });
  }

  public async update(user_id: number, user: User.Types.User) {
    return this.request.put(`/users/${ user_id }.json`, { body: { user } })
    .then(response => response.user as User.Types.User)
    .catch(error => {
      throw new ZendeskError('Cannot update user.', error);
    });
  }

  public async createOrUpdate(user: User.Types.User) {
    return this.request.post(`/users/create_or_update.json`, { body: { user } })
    .then(response => response.user as User.Types.User)
    .catch(error => {
      throw new ZendeskError('Cannot createOrUpdate user.', error);
    });
  }

  public async delete(user_id: number) {
    return this.request.delete(`/users/${ user_id }.json`)
    .then(response => response.user as User.Types.User)
    .catch(error => {
      throw new ZendeskError('Cannot delete user.', error);
    });
  }

  public async show(user_id: number) {
    return this.request.get(`/users/${ user_id }.json`)
    .then(response => response.user as User.Types.User)
    .catch(error => {
      throw new ZendeskError('Cannot show user.', error);
    });
  }

  public async search(external_id: string) {
    return this.request.get(`/users/search.json`, { qs: { external_id } })
    .then(response => response.users as User.Types.User[])
    .catch(error => {
      throw new ZendeskError('Cannot search users.', error);
    });
  }
}

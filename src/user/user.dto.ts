export default class User implements User.Types.IUserDto {
  private id?: number;
  private email?: string;
  private name: string;
  private active?: string;
  private alias?: string;
  private chat_only?: boolean;
  private created_at?: Date | string;
  private custom_role_id?: number;
  private role_type?: number;
  private details?: string;
  private external_id?: string;
  private last_login_at?: Date | string;
  private locale?: string;
  private locale_id?: number;
  private moderator?: boolean;
  private notes?: string;
  private only_private_comments?: string;
  private organization_id?: number;
  private default_group_id?: number;
  private phone?: string;
  private shared_phone_number?: boolean;
  private photo?: User.Types.Attachment;
  private restricted_agent?: boolean;
  private role?: User.Types.UserRoleType;
  private shared?: boolean;
  private shared_agent?: boolean;
  private signature?: string;
  private suspended?: boolean;
  private tags?: string[];
  private ticket_restriction?: User.Types.TicketRestrictionType;
  private time_zone?: string;
  private two_factor_auth_enabled?: boolean;
  private updated_at?: Date | string;
  private url?: string;
  private user_fields?: object;
  private verified?: boolean;
  private report_csv?: boolean;

  public build() {
    return {
      id: this.getId(),
      email: this.getEmail(),
      name: this.getName(),
      active: this.getActive(),
      alias: this.getAlias(),
      chat_only: this.getChatOnly(),
      created_at: this.getCreatedAt(),
      custom_role_id: this.getCustomRoleId(),
      role_type: this.getRoleType(),
      details: this.getDetails(),
      external_id: this.getExternalId(),
      last_login_at: this.getLastLoginAt(),
      locale: this.getLocale(),
      locale_id: this.getLocaleId(),
      moderator: this.getModerator(),
      notes: this.getNotes(),
      only_private_comments: this.getOnlyPrivateComments(),
      organization_id: this.getOrganizationId(),
      default_group_id: this.getDefaultGroupId(),
      phone: this.getPhone(),
      shared_phone_number: this.getSharedPhoneNumber(),
      photo: this.getPhoto(),
      restricted_agent: this.getRestrictedAgent(),
      role: this.getRole(),
      shared: this.getShared(),
      shared_agent: this.getShared_agent(),
      signature: this.getSignature(),
      suspended: this.getSuspended(),
      tags: this.getTags(),
      ticket_restriction: this.getTicketRestriction(),
      time_zone: this.getTimeZone(),
      two_factor_auth_enabled: this.getTwoFactorAuthEnabled(),
      updated_at: this.getUpdatedAt(),
      url: this.getUrl(),
      user_fields: this.getUserFields(),
      verified: this.getVerified(),
      report_csv: this.getReportCsv(),
    };
  }

  public getId() { return this.id; }
  public setId(id?: number) { this.id = id; return this; }

  public getEmail() { return this.email; }
  public setEmail(email?: string) { this.email = email; return this; }

  public getName() { return this.name; }
  public setName(name: string) { this.name = name; return this; }

  public getActive() { return this.active; }
  public setActive(active?: string) { this.active = active; return this; }

  public getAlias() { return this.alias; }
  public setAlias(alias: string) { this.alias = alias; return this; }

  public getChatOnly() { return this.chat_only; }
  public setChatOnly(chat_only: boolean) { this.chat_only = chat_only; return this; }

  public getCreatedAt() { return this.created_at; }
  public setCreatedAt(created_at: Date | string) { this.created_at = created_at; return this; }

  public getCustomRoleId() { return this.custom_role_id; }
  public setCustomRoleId(custom_role_id: number) { this.custom_role_id = custom_role_id; return this; }

  public getRoleType() { return this.role_type; }
  public setRoleType(role_type: number) { this.role_type = role_type; return this; }

  public getDetails() { return this.details; }
  public setDetails(details: string) { this.details = details; return this; }

  public getExternalId() { return this.external_id; }
  public setExternalId(external_id: string) { this.external_id = external_id; return this; }

  public getLastLoginAt() { return this.last_login_at; }
  public setLastLoginAt(last_login_at: Date | string) { this.last_login_at = last_login_at; return this; }

  public getLocale() { return this.locale; }
  public setLocale(locale: string) { this.locale = locale; return this; }

  public getLocaleId() { return this.locale_id; }
  public setLocaleId(locale_id: number) { this.locale_id = locale_id; return this; }

  public getModerator() { return this.moderator; }
  public setModerator(moderator: boolean) { this.moderator = moderator; return this; }

  public getNotes() { return this.notes; }
  public setNotes(notes: string) { this.notes = notes; return this; }

  public getOnlyPrivateComments() { return this.only_private_comments; }
  public setOnlyPrivateComments(only_private_comments: string) { this.only_private_comments = only_private_comments; return this; }

  public getOrganizationId() { return this.organization_id; }
  public setOrganizationId(organization_id: number) { this.organization_id = organization_id; return this; }

  public getDefaultGroupId() { return this.default_group_id; }
  public setDefaultGroupId(default_group_id: number) { this.default_group_id = default_group_id; return this; }

  public getPhone() { return this.phone; }
  public setPhone(phone: string) { this.phone = phone; return this; }

  public getSharedPhoneNumber() { return this.shared_phone_number; }
  public setSharedPhoneNumber(shared_phone_number: boolean) { this.shared_phone_number = shared_phone_number; return this; }

  public getPhoto() { return this.photo; }
  public setPhoto(photo: User.Types.Attachment) { this.photo = photo; return this; }

  public getRestrictedAgent() { return this.restricted_agent; }
  public setRestrictedAgent(restricted_agent: boolean) { this.restricted_agent = restricted_agent; return this; }

  public getRole() { return this.role; }
  public setRole(role: User.Types.UserRoleType) { this.role = role; return this; }

  public getShared() { return this.shared; }
  public setShared(shared: boolean) { this.shared = shared; return this; }

  public getShared_agent() { return this.shared_agent; }
  public setShared_agent(shared_agent: boolean) { this.shared_agent = shared_agent; return this; }

  public getSignature() { return this.signature; }
  public setSignature(signature: string) { this.signature = signature; return this; }

  public getSuspended() { return this.suspended; }
  public setSuspended(suspended: boolean) { this.suspended = suspended; return this; }

  public getTags() { return this.tags; }
  public setTags(tags: string[]) { this.tags = tags; return this; }

  public getTicketRestriction() { return this.ticket_restriction; }
  public setTicketRestriction(ticket_restriction: User.Types.TicketRestrictionType) { this.ticket_restriction = ticket_restriction; return this; }

  public getTimeZone() { return this.time_zone; }
  public setTimeZone(time_zone: string) { this.time_zone = time_zone; return this; }

  public getTwoFactorAuthEnabled() { return this.two_factor_auth_enabled; }
  public setTwoFactorAuthEnabled(two_factor_auth_enabled: boolean) { this.two_factor_auth_enabled = two_factor_auth_enabled; return this; }

  public getUpdatedAt() { return this.updated_at; }
  public setUpdatedAt(updated_at: Date | string) { this.updated_at = updated_at; return this; }

  public getUrl() { return this.url; }
  public setUrl(url: string) { this.url = url; return this; }

  public getUserFields() { return this.user_fields; }
  public setUserFields(user_fields: object) { this.user_fields = user_fields; return this; }

  public getVerified() { return this.verified; }
  public setVerified(verified: boolean) { this.verified = verified; return this; }

  public getReportCsv() { return this.report_csv; }
  public setReportCsv(report_csv: boolean) { this.report_csv = report_csv; return this; }
}

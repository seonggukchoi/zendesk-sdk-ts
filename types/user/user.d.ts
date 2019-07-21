declare namespace User {
  namespace Types {
    type UserRoleType = "end-user" | "agent" | "admin";
    type TicketRestrictionType = "organization" | "groups" | "assigned" | "requested" | null;

    interface IUserDto {
      build(): User;

      getId(): number | undefined;
      setId(id?: number): this;

      getEmail(): string | undefined;
      setEmail(email?: string): this;

      getName(): string;
      setName(name: string): this;

      getActive(): string | undefined;
      setActive(active?: string): this;

      getAlias(): string | undefined;
      setAlias(alias: string): this;

      getChatOnly(): boolean | undefined;
      setChatOnly(chat_only: boolean): this;

      getCreatedAt(): Date | string | undefined;
      setCreatedAt(created_at: Date | string): this;

      getCustomRoleId(): number | undefined;
      setCustomRoleId(custom_role_id: number): this;

      getRoleType(): number | undefined;
      setRoleType(role_type: number): this;

      getDetails(): string | undefined;
      setDetails(details: string): this;

      getExternalId(): string | undefined;
      setExternalId(external_id: string): this;

      getLastLoginAt(): Date | string | undefined;
      setLastLoginAt(last_login_at: Date | string): this;

      getLocale(): string | undefined;
      setLocale(locale: string): this;

      getLocaleId(): number | undefined;
      setLocaleId(locale_id: number): this;

      getModerator(): boolean | undefined;
      setModerator(moderator: boolean): this;

      getNotes(): string | undefined;
      setNotes(notes: string): this;

      getOnlyPrivateComments(): string | undefined;
      setOnlyPrivateComments(only_private_comments: string): this;

      getOrganizationId(): number | undefined;
      setOrganizationId(organization_id: number): this;

      getDefaultGroupId(): number | undefined;
      setDefaultGroupId(default_group_id: number): this;

      getPhone(): string | undefined;
      setPhone(phone: string): this;

      getSharedPhoneNumber(): boolean | undefined;
      setSharedPhoneNumber(shared_phone_number: boolean): this;

      getPhoto(): User.Types.Attachment | undefined;
      setPhoto(photo: User.Types.Attachment): this;

      getRestrictedAgent(): boolean | undefined;
      setRestrictedAgent(restricted_agent: boolean): this;

      getRole(): User.Types.UserRoleType | undefined;
      setRole(role: User.Types.UserRoleType): this;

      getShared(): boolean | undefined;
      setShared(shared: boolean): this;

      getShared_agent(): boolean | undefined;
      setShared_agent(shared_agent: boolean): this;

      getSignature(): string | undefined;
      setSignature(signature: string): this;

      getSuspended(): boolean | undefined;
      setSuspended(suspended: boolean): this;

      getTags(): string[] | undefined;
      setTags(tags: string[]): this;

      getTicketRestriction(): User.Types.TicketRestrictionType | undefined;
      setTicketRestriction(ticket_restriction: User.Types.TicketRestrictionType): this;

      getTimeZone(): string | undefined;
      setTimeZone(time_zone: string): this;

      getTwoFactorAuthEnabled(): boolean | undefined;
      setTwoFactorAuthEnabled(two_factor_auth_enabled: boolean): this;

      getUpdatedAt(): Date | string | undefined;
      setUpdatedAt(updated_at: Date | string): this;

      getUrl(): string | undefined;
      setUrl(url: string): this;

      getUserFields(): object | undefined;
      setUserFields(user_fields: object): this;

      getVerified(): boolean | undefined;
      setVerified(verified: boolean): this;

      getReportCsv(): boolean | undefined;
      setReportCsv(report_csv: boolean): this;
    }

    interface User {
      id?: number;
      email?: string;
      name: string;
      active?: string;
      alias?: string;
      chat_only?: boolean;
      created_at?: Date | string;
      custom_role_id?: number;
      role_type?: number;
      details?: string;
      external_id?: string;
      last_login_at?: Date | string;
      locale?: string;
      locale_id?: number;
      moderator?: boolean;
      notes?: string;
      only_private_comments?: string;
      organization_id?: number;
      default_group_id?: number;
      phone?: string;
      shared_phone_number?: boolean;
      photo?: Attachment;
      restricted_agent?: boolean;
      role?: UserRoleType;
      shared?: boolean;
      shared_agent?: boolean;
      signature?: string;
      suspended?: boolean;
      tags?: string[];
      ticket_restriction?: TicketRestrictionType;
      time_zone?: string;
      two_factor_auth_enabled?: boolean;
      updated_at?: Date | string;
      url?: string;
      user_fields?: object;
      verified?: boolean;
      report_csv?: boolean;
    }

    interface Attachment {
      id: number;
      file_name: string;
      content_url: string;
      content_type: string;
      size: number;
      thumbnails?: Attachment[];
      inline: boolean;
    }
  }

  interface IUserAPI {
    create(user: User.Types.User): Promise<Types.User>;
    update(user_id: number, user: User.Types.User): Promise<Types.User>;
    createOrUpdate(user: User.Types.User): Promise<Types.User>;
    delete(user_id: number): Promise<Types.User>;
    show(user_id: number): Promise<Types.User>;
    search(external_id: string): Promise<Types.User[]>;
  }
}

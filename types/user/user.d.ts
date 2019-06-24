declare namespace User {
  namespace Types {
    type UserRoleType = "end-user" | "agent" | "admin";
    type TicketRestrictionType = "organization" | "groups" | "assigned" | "requested" | null;

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
    create(): Promise<Types.User>;
    update(): Promise<Types.User>;
    createOrUpdate(): Promise<Types.User>;
    delete(): Promise<Types.User>;
    show(): Promise<Types.User>;
    search(): Promise<Types.User>;
  }
}

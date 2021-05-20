declare module Zammad {
    class API {
        constructor(address: string);
        private __baseURL;
        private __axiosInst;
        private __curUser;
        private __curUsers;
        private __curOrganizations;
        private __curTicketArticles;
        setAuthHeader(bearerToken: string): void;
        getTickets(conditions?: IConditions): Promise<ITicket[]>;
        private __getUsers;
        private __getCurrentUser;
        private __getOrganizations;
        private __getTicketArticles;
        private __filterTickets;
        private __ticketMatchesCondition;
        private __compareCondition;
        private static __getRelDate;
        private static __convertTimes;
    }
    interface IOverview {
        id: number;
        name: string;
        prio: number;
        group_by: GroupBy;
        group_direction: Direction;
        organization_shared: boolean;
        out_of_office: boolean;
        active: boolean;
        condition: IConditions;
        order: {
            by: Order;
            direction: Direction;
        };
        view: {
            s: Order[];
        };
        update_by_id: number;
        link: string;
        created_by_id: number;
        created_at: Date;
        updated_at: Date;
        role_ids: number[];
        user_ids: number[];
    }
    interface IUser {
        id: number;
        last_login: Date;
        created_at: Date;
        updated_at: Date;
        organization_ids: number[];
    }
    interface IOrganization {
        id: number;
        name: string;
        active: boolean;
        shared: boolean;
        created_by_id: number;
        created_at: Date;
        update_by_id: number;
        updated_at: Date;
        domain: string;
        note: string;
        domain_assignment: boolean;
        member_ids: number[];
    }
    interface IGroup {
        id: number;
        created_at: Date;
        updated_at: Date;
    }
    interface ITicket {
        id: number;
        group_id: number;
        priority_id: number;
        state_id: number;
        organization_id: number;
        number: string;
        title: string;
        owner_id: number;
        customer_id: number;
        note: string;
        first_response_at: Date;
        first_response_escalation_at: Date;
        first_response_in_min: number;
        first_response_diff_in_min: number;
        close_at: Date;
        close_escalation_at: Date;
        close_in_min: number;
        close_diff_in_min: number;
        update_escalation_at: Date;
        update_in_min: number;
        ipdate_diff_in_min: number;
        last_contact_at: Date;
        last_contact_agent_at: Date;
        last_contact_customer_at: Date;
        last_owner_update_at: Date;
        create_article_type_id: number;
        create_article_sender_id: number;
        article_count: number;
        escalation_at: Date;
        pending_time: Date;
        type: any;
        time_unit: any;
        preferences: any;
        updated_by_id: number;
        created_by_id: number;
        created_at: Date;
        updated_at: Date;
        tags: string;
    }
    interface ITicketArticle {
        id: number;
        ticket_id: number;
        type_id: number;
        sender_id: number;
        from: string;
        to: string | null;
        cc: string | null;
        subject: string | null;
        reply_to: string | null;
        message_id: number | null;
        message_id_md5: number | null;
        in_reply_to: string | null;
        content_type: string;
        references: any;
        body: string;
        internal: boolean;
        preferences: object;
        updated_by_id: number;
        created_by_id: number;
        origin_by_id: number;
        created_at: Date;
        updated_at: Date;
        attachments: object;
    }
    interface IRole {
        id: number;
        name: string;
        preferences: any;
        default_at_signup: boolean;
        active: boolean;
        note: string;
        updated_by_id: number;
        created_by_id: number;
        created_at: Date;
        updated_at: Date;
        permission_ids: number[];
        group_ids: {
            [index: string]: [];
        };
    }
    enum Direction {
        asc = "ASC",
        desc = "DESC"
    }
    enum Order {
        number = "number",
        title = "title",
        customer = "customer",
        organization = "organization",
        group = "group",
        owner = "owner",
        state = "state",
        pending_time = "pending_time",
        priority = "priority",
        article_count = "article_count",
        time_unit = "time_unit",
        escalation_at = "escalation_at",
        last_contact_at = "last_contact_at",
        last_contact_agent_at = "last_contact_agent_at",
        last_contact_customer_at = "last_contact_customer_at",
        first_response_at = "first_response_at",
        close_at = "close_at",
        created_by = "created_by",
        created_at = "created_at",
        updated_by = "updated_by",
        updated_at = "updated_at"
    }
    enum GroupBy {
        time_unit = "time_unit",
        article_count = "article_count",
        created_by = "created_by",
        customer = "customer",
        group = "group",
        organization = "organization",
        owner = "owner",
        priority = "priority",
        state = "state",
        title = "title",
        updated_by = "updated_by"
    }
    enum ConditionOperator {
        contains = "contains",
        containsNot = "contains not",
        is = "is",
        isNot = "is not",
        beforeAbs = "before (absolute)",
        beforeRel = "before (relative)",
        afterAbs = "after (absolute)",
        afterRel = "after (relative)",
        withinAbs = "within next (absolute)",
        withinRel = "within last (relative)"
    }
    enum ConditionRange {
        minute = "minute",
        hour = "hour",
        day = "day",
        month = "month",
        year = "year"
    }
    enum PreCondition {
        currentUserId = "current_user.id",
        currentUserOrganization = "current_user.organization_id",
        specific = "specific",
        notSet = "not_set"
    }
    interface ICondition {
        operator: ConditionOperator;
        pre_condition?: PreCondition;
        range?: ConditionRange;
        value: string;
    }
    interface IConditions {
        [index: string]: ICondition;
    }
    function isICondition(p: object): p is ICondition;
    function isIConditions(p: object): p is IConditions;
}

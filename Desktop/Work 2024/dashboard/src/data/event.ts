import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Nevent_ARTBA', type: 'elasticube' };

interface AttendeesDimension extends Dimension {
    Attended: Attribute;
    AttendedNumeric: Attribute;
    AttendeeCustomerUniqueId: Attribute;
    AttendeeCustomFields: Attribute;
    AttendeeRecordUniqueID: Attribute;
    AttendeeUniqueID: Attribute;
    CancellationDate: Attribute;
    Cancelled: Attribute;
    CompanyName: Attribute;
    CompanyNum: Attribute;
    Credentials: Attribute;
    DiscountAmount: Attribute;
    DiscountTax: Attribute;
    Email: Attribute;
    EventName: Attribute;
    EventUniqueId: Attribute;
    FirstName: Attribute;
    FullName: Attribute;
    JobTitle: Attribute;
    LastName: Attribute;
    Phone: Attribute;
    PricePaid: Attribute;
    PurchaserName: Attribute;
    PurchaserUniqueId: Attribute;
    RowNum: Attribute;
    TaxPaid: Attribute;
    TicketName: Attribute;
    TicketUniqueId: Attribute;
    RegistrationDate: DateDimension;
}
export const Attendees = createDimension({
    name: 'Attendees',
    Attended: createAttribute({
        name: 'Attended',
        type: 'text-attribute',
        expression: '[Attendees.Attended]',
    }),
    AttendedNumeric: createAttribute({
        name: 'AttendedNumeric',
        type: 'numeric-attribute',
        expression: '[Attendees.AttendedNumeric]',
    }),
    AttendeeCustomerUniqueId: createAttribute({
        name: 'AttendeeCustomerUniqueId',
        type: 'text-attribute',
        expression: '[Attendees.AttendeeCustomerUniqueId]',
    }),
    AttendeeCustomFields: createAttribute({
        name: 'AttendeeCustomFields',
        type: 'text-attribute',
        expression: '[Attendees.AttendeeCustomFields]',
    }),
    AttendeeRecordUniqueID: createAttribute({
        name: 'AttendeeRecordUniqueID',
        type: 'text-attribute',
        expression: '[Attendees.AttendeeRecordUniqueID]',
    }),
    AttendeeUniqueID: createAttribute({
        name: 'AttendeeUniqueID',
        type: 'text-attribute',
        expression: '[Attendees.AttendeeUniqueID]',
    }),
    CancellationDate: createAttribute({
        name: 'CancellationDate',
        type: 'text-attribute',
        expression: '[Attendees.CancellationDate]',
    }),
    Cancelled: createAttribute({
        name: 'Cancelled',
        type: 'text-attribute',
        expression: '[Attendees.Cancelled]',
    }),
    CompanyName: createAttribute({
        name: 'CompanyName',
        type: 'text-attribute',
        expression: '[Attendees.CompanyName]',
    }),
    CompanyNum: createAttribute({
        name: 'CompanyNum',
        type: 'numeric-attribute',
        expression: '[Attendees.CompanyNum]',
    }),
    Credentials: createAttribute({
        name: 'Credentials',
        type: 'text-attribute',
        expression: '[Attendees.Credentials]',
    }),
    DiscountAmount: createAttribute({
        name: 'DiscountAmount',
        type: 'numeric-attribute',
        expression: '[Attendees.DiscountAmount]',
    }),
    DiscountTax: createAttribute({
        name: 'DiscountTax',
        type: 'numeric-attribute',
        expression: '[Attendees.DiscountTax]',
    }),
    Email: createAttribute({
        name: 'Email',
        type: 'text-attribute',
        expression: '[Attendees.Email]',
    }),
    EventName: createAttribute({
        name: 'EventName',
        type: 'text-attribute',
        expression: '[Attendees.EventName]',
    }),
    EventUniqueId: createAttribute({
        name: 'EventUniqueId',
        type: 'text-attribute',
        expression: '[Attendees.EventUniqueId]',
    }),
    FirstName: createAttribute({
        name: 'FirstName',
        type: 'text-attribute',
        expression: '[Attendees.FirstName]',
    }),
    FullName: createAttribute({
        name: 'FullName',
        type: 'text-attribute',
        expression: '[Attendees.FullName]',
    }),
    JobTitle: createAttribute({
        name: 'JobTitle',
        type: 'text-attribute',
        expression: '[Attendees.JobTitle]',
    }),
    LastName: createAttribute({
        name: 'LastName',
        type: 'text-attribute',
        expression: '[Attendees.LastName]',
    }),
    Phone: createAttribute({
        name: 'Phone',
        type: 'text-attribute',
        expression: '[Attendees.Phone]',
    }),
    PricePaid: createAttribute({
        name: 'PricePaid',
        type: 'numeric-attribute',
        expression: '[Attendees.PricePaid]',
    }),
    PurchaserName: createAttribute({
        name: 'PurchaserName',
        type: 'text-attribute',
        expression: '[Attendees.PurchaserName]',
    }),
    PurchaserUniqueId: createAttribute({
        name: 'PurchaserUniqueId',
        type: 'text-attribute',
        expression: '[Attendees.PurchaserUniqueId]',
    }),
    RowNum: createAttribute({
        name: 'RowNum',
        type: 'numeric-attribute',
        expression: '[Attendees.RowNum]',
    }),
    TaxPaid: createAttribute({
        name: 'TaxPaid',
        type: 'numeric-attribute',
        expression: '[Attendees.TaxPaid]',
    }),
    TicketName: createAttribute({
        name: 'TicketName',
        type: 'text-attribute',
        expression: '[Attendees.TicketName]',
    }),
    TicketUniqueId: createAttribute({
        name: 'TicketUniqueId',
        type: 'text-attribute',
        expression: '[Attendees.TicketUniqueId]',
    }),
    RegistrationDate: createDateDimension({
        name: 'RegistrationDate',
        expression: '[Attendees.RegistrationDate (Calendar)]',
    }),
}) as AttendeesDimension;

interface eventsDimension extends Dimension {
    Active: Attribute;
    Address1: Attribute;
    Address2: Attribute;
    AllDayEvent: Attribute;
    City: Attribute;
    Country: Attribute;
    CustomLocationDetails: Attribute;
    Details: Attribute;
    EventCategoryActive: Attribute;
    EventCategoryID: Attribute;
    EventCategoryName: Attribute;
    EventUniqueId: Attribute;
    LocationName: Attribute;
    LocationType: Attribute;
    Name: Attribute;
    OnlineIsPrivate: Attribute;
    OnlineLinkText: Attribute;
    OnlineLinkUrl: Attribute;
    State: Attribute;
    Summary: Attribute;
    Tickets: Attribute;
    TimeZone: Attribute;
    Url: Attribute;
    ZipCode: Attribute;
    EndDate: DateDimension;
    StartDate: DateDimension;
}
export const events = createDimension({
    name: 'events',
    Active: createAttribute({
        name: 'Active',
        type: 'text-attribute',
        expression: '[events.Active]',
    }),
    Address1: createAttribute({
        name: 'Address1',
        type: 'text-attribute',
        expression: '[events.Address1]',
    }),
    Address2: createAttribute({
        name: 'Address2',
        type: 'text-attribute',
        expression: '[events.Address2]',
    }),
    AllDayEvent: createAttribute({
        name: 'AllDayEvent',
        type: 'text-attribute',
        expression: '[events.AllDayEvent]',
    }),
    City: createAttribute({
        name: 'City',
        type: 'text-attribute',
        expression: '[events.City]',
    }),
    Country: createAttribute({
        name: 'Country',
        type: 'text-attribute',
        expression: '[events.Country]',
    }),
    CustomLocationDetails: createAttribute({
        name: 'CustomLocationDetails',
        type: 'text-attribute',
        expression: '[events.CustomLocationDetails]',
    }),
    Details: createAttribute({
        name: 'Details',
        type: 'text-attribute',
        expression: '[events.Details]',
    }),
    EventCategoryActive: createAttribute({
        name: 'EventCategoryActive',
        type: 'text-attribute',
        expression: '[events.EventCategory.Active]',
    }),
    EventCategoryID: createAttribute({
        name: 'EventCategoryID',
        type: 'numeric-attribute',
        expression: '[events.EventCategory.ID]',
    }),
    EventCategoryName: createAttribute({
        name: 'EventCategoryName',
        type: 'text-attribute',
        expression: '[events.EventCategory.Name]',
    }),
    EventUniqueId: createAttribute({
        name: 'EventUniqueId',
        type: 'text-attribute',
        expression: '[events.EventUniqueId]',
    }),
    LocationName: createAttribute({
        name: 'LocationName',
        type: 'text-attribute',
        expression: '[events.LocationName]',
    }),
    LocationType: createAttribute({
        name: 'LocationType',
        type: 'text-attribute',
        expression: '[events.LocationType]',
    }),
    Name: createAttribute({
        name: 'Name',
        type: 'text-attribute',
        expression: '[events.Name]',
    }),
    OnlineIsPrivate: createAttribute({
        name: 'OnlineIsPrivate',
        type: 'text-attribute',
        expression: '[events.OnlineIsPrivate]',
    }),
    OnlineLinkText: createAttribute({
        name: 'OnlineLinkText',
        type: 'text-attribute',
        expression: '[events.OnlineLinkText]',
    }),
    OnlineLinkUrl: createAttribute({
        name: 'OnlineLinkUrl',
        type: 'text-attribute',
        expression: '[events.OnlineLinkUrl]',
    }),
    State: createAttribute({
        name: 'State',
        type: 'text-attribute',
        expression: '[events.State]',
    }),
    Summary: createAttribute({
        name: 'Summary',
        type: 'text-attribute',
        expression: '[events.Summary]',
    }),
    Tickets: createAttribute({
        name: 'Tickets',
        type: 'text-attribute',
        expression: '[events.Tickets]',
    }),
    TimeZone: createAttribute({
        name: 'TimeZone',
        type: 'text-attribute',
        expression: '[events.TimeZone]',
    }),
    Url: createAttribute({
        name: 'Url',
        type: 'text-attribute',
        expression: '[events.Url]',
    }),
    ZipCode: createAttribute({
        name: 'ZipCode',
        type: 'text-attribute',
        expression: '[events.ZipCode]',
    }),
    EndDate: createDateDimension({
        name: 'EndDate',
        expression: '[events.EndDate (Calendar)]',
    }),
    StartDate: createDateDimension({
        name: 'StartDate',
        expression: '[events.StartDate (Calendar)]',
    }),
}) as eventsDimension;

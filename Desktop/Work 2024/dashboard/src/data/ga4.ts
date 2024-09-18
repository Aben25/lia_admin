import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'GA4_ARTBA', type: 'elasticube' };

interface AcquisitionsARTBADimension extends Dimension {
    EventCount: Attribute;
    PagePath: Attribute;
    ScreenPageViews: Attribute;
    SessionDefaultChannelGrouping: Attribute;
    SessionSource: Attribute;
    TotalUsers: Attribute;
    UnifiedScreenClass: Attribute;
}
export const AcquisitionsARTBA = createDimension({
    name: 'Acquisitions ARTBA',
    EventCount: createAttribute({
        name: 'EventCount',
        type: 'numeric-attribute',
        expression: '[Acquisitions ARTBA.EventCount]',
    }),
    PagePath: createAttribute({
        name: 'PagePath',
        type: 'text-attribute',
        expression: '[Acquisitions ARTBA.PagePath]',
    }),
    ScreenPageViews: createAttribute({
        name: 'ScreenPageViews',
        type: 'numeric-attribute',
        expression: '[Acquisitions ARTBA.ScreenPageViews]',
    }),
    SessionDefaultChannelGrouping: createAttribute({
        name: 'SessionDefaultChannelGrouping',
        type: 'text-attribute',
        expression: '[Acquisitions ARTBA.SessionDefaultChannelGrouping]',
    }),
    SessionSource: createAttribute({
        name: 'SessionSource',
        type: 'text-attribute',
        expression: '[Acquisitions ARTBA.SessionSource]',
    }),
    TotalUsers: createAttribute({
        name: 'TotalUsers',
        type: 'numeric-attribute',
        expression: '[Acquisitions ARTBA.TotalUsers]',
    }),
    UnifiedScreenClass: createAttribute({
        name: 'UnifiedScreenClass',
        type: 'text-attribute',
        expression: '[Acquisitions ARTBA.UnifiedScreenClass]',
    }),
}) as AcquisitionsARTBADimension;

interface artbaDimension extends Dimension {
    EndDate: Attribute;
    EventCount: Attribute;
    NewUsers: Attribute;
    PagePath: Attribute;
    PageTitle: Attribute;
    ScreenPageViews: Attribute;
    StartDate: Attribute;
    TotalUsers: Attribute;
    userEngagementDuration: Attribute;
    Date: DateDimension;
}
export const artba = createDimension({
    name: 'artba',
    EndDate: createAttribute({
        name: 'EndDate',
        type: 'text-attribute',
        expression: '[artba.EndDate]',
    }),
    EventCount: createAttribute({
        name: 'EventCount',
        type: 'numeric-attribute',
        expression: '[artba.EventCount]',
    }),
    NewUsers: createAttribute({
        name: 'NewUsers',
        type: 'numeric-attribute',
        expression: '[artba.NewUsers]',
    }),
    PagePath: createAttribute({
        name: 'PagePath',
        type: 'text-attribute',
        expression: '[artba.PagePath]',
    }),
    PageTitle: createAttribute({
        name: 'PageTitle',
        type: 'text-attribute',
        expression: '[artba.PageTitle]',
    }),
    ScreenPageViews: createAttribute({
        name: 'ScreenPageViews',
        type: 'numeric-attribute',
        expression: '[artba.ScreenPageViews]',
    }),
    StartDate: createAttribute({
        name: 'StartDate',
        type: 'text-attribute',
        expression: '[artba.StartDate]',
    }),
    TotalUsers: createAttribute({
        name: 'TotalUsers',
        type: 'numeric-attribute',
        expression: '[artba.TotalUsers]',
    }),
    userEngagementDuration: createAttribute({
        name: 'userEngagementDuration',
        type: 'numeric-attribute',
        expression: '[artba.userEngagementDuration]',
    }),
    Date: createDateDimension({
        name: 'Date',
        expression: '[artba.Date (Calendar)]',
    }),
}) as artbaDimension;

interface tdfDimension extends Dimension {
    EndDate: Attribute;
    EventCount: Attribute;
    NewUsers: Attribute;
    PagePath: Attribute;
    PageTitle: Attribute;
    ScreenPageViews: Attribute;
    StartDate: Attribute;
    TotalUsers: Attribute;
    userEngagementDuration: Attribute;
    Date: DateDimension;
}
export const tdf = createDimension({
    name: 'tdf',
    EndDate: createAttribute({
        name: 'EndDate',
        type: 'text-attribute',
        expression: '[tdf.EndDate]',
    }),
    EventCount: createAttribute({
        name: 'EventCount',
        type: 'numeric-attribute',
        expression: '[tdf.EventCount]',
    }),
    NewUsers: createAttribute({
        name: 'NewUsers',
        type: 'numeric-attribute',
        expression: '[tdf.NewUsers]',
    }),
    PagePath: createAttribute({
        name: 'PagePath',
        type: 'text-attribute',
        expression: '[tdf.PagePath]',
    }),
    PageTitle: createAttribute({
        name: 'PageTitle',
        type: 'text-attribute',
        expression: '[tdf.PageTitle]',
    }),
    ScreenPageViews: createAttribute({
        name: 'ScreenPageViews',
        type: 'numeric-attribute',
        expression: '[tdf.ScreenPageViews]',
    }),
    StartDate: createAttribute({
        name: 'StartDate',
        type: 'text-attribute',
        expression: '[tdf.StartDate]',
    }),
    TotalUsers: createAttribute({
        name: 'TotalUsers',
        type: 'numeric-attribute',
        expression: '[tdf.TotalUsers]',
    }),
    userEngagementDuration: createAttribute({
        name: 'userEngagementDuration',
        type: 'numeric-attribute',
        expression: '[tdf.userEngagementDuration]',
    }),
    Date: createDateDimension({
        name: 'Date',
        expression: '[tdf.Date (Calendar)]',
    }),
}) as tdfDimension;

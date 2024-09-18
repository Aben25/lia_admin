import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Mailchimp_ARTBA', type: 'elasticube' };

interface CampaignFoldersDimension extends Dimension {
    Count: Attribute;
    Id: Attribute;
    Name: Attribute;
}
export const CampaignFolders = createDimension({
    name: 'CampaignFolders',
    Count: createAttribute({
        name: 'Count',
        type: 'numeric-attribute',
        expression: '[CampaignFolders.Count]',
    }),
    Id: createAttribute({
        name: 'Id',
        type: 'text-attribute',
        expression: '[CampaignFolders.Id]',
    }),
    Name: createAttribute({
        name: 'Name',
        type: 'text-attribute',
        expression: '[CampaignFolders.Name]',
    }),
}) as CampaignFoldersDimension;

interface CampaignsDimension extends Dimension {
    AbSplitOpts_FromNameA: Attribute;
    AbSplitOpts_FromNameB: Attribute;
    AbSplitOpts_PickWinner: Attribute;
    AbSplitOpts_ReplyEmailA: Attribute;
    AbSplitOpts_ReplyEmailB: Attribute;
    AbSplitOpts_SplitSize: Attribute;
    AbSplitOpts_SplitTest: Attribute;
    AbSplitOpts_SubjectA: Attribute;
    AbSplitOpts_SubjectB: Attribute;
    AbSplitOpts_WaitTime: Attribute;
    AbSplitOpts_WaitUnits: Attribute;
    ArchiveUrl: Attribute;
    ContentType: Attribute;
    DeliveryStatus: Attribute;
    EmailsSent: Attribute;
    Id: Attribute;
    LongArchiveUrl: Attribute;
    Recipients_ListId: Attribute;
    Recipients_ListName: Attribute;
    Recipients_RecipientCount: Attribute;
    Recipients_SegmentOpts: Attribute;
    Recipients_SegmentText: Attribute;
    ReportSummary: Attribute;
    RssOpts_ConstrainRssImg: Attribute;
    RssOpts_FeedUrl: Attribute;
    RssOpts_Frequency: Attribute;
    RssOpts_LastSent: Attribute;
    RssOpts_Schedule: Attribute;
    Settings_Authenticate: Attribute;
    Settings_AutoFbPost: Attribute;
    Settings_AutoFooter: Attribute;
    Settings_AutoTweet: Attribute;
    Settings_DragAndDrop: Attribute;
    Settings_FbComments: Attribute;
    Settings_FolderId: Attribute;
    Settings_FromName: Attribute;
    Settings_InlineCss: Attribute;
    Settings_ReplyTo: Attribute;
    Settings_SubjectLine: Attribute;
    Settings_TemplateId: Attribute;
    Settings_Timewarp: Attribute;
    Settings_Title: Attribute;
    Settings_ToName: Attribute;
    Settings_UseConversation: Attribute;
    SocialCard_Description: Attribute;
    SocialCard_ImageUrl: Attribute;
    SocialCard_Title: Attribute;
    Status: Attribute;
    Tracking_Capsule: Attribute;
    Tracking_Clicktale: Attribute;
    Tracking_Ecomm360: Attribute;
    Tracking_GoalTracking: Attribute;
    Tracking_GoogleAnalytics: Attribute;
    Tracking_Highrise: Attribute;
    Tracking_HtmlClicks: Attribute;
    Tracking_Opens: Attribute;
    Tracking_Salesforce: Attribute;
    Tracking_TextClicks: Attribute;
    Type: Attribute;
    VariateSettings_Combinations: Attribute;
    VariateSettings_Contents: Attribute;
    VariateSettings_FromNames: Attribute;
    VariateSettings_ReplyToAddresses: Attribute;
    VariateSettings_SendTimes: Attribute;
    VariateSettings_SubjectLines: Attribute;
    VariateSettings_TestSize: Attribute;
    VariateSettings_WaitTime: Attribute;
    VariateSettings_WinnerCriteria: Attribute;
    VariateSettings_WinningCampaignId: Attribute;
    VariateSettings_WinningCombinationId: Attribute;
    AbSplitOpts_SendTimeA: DateDimension;
    AbSplitOpts_SendTimeB: DateDimension;
    AbSplitOpts_SendTimeWinner: DateDimension;
    CreateTime: DateDimension;
    SendTime: DateDimension;
}
export const Campaigns = createDimension({
    name: 'Campaigns',
    AbSplitOpts_FromNameA: createAttribute({
        name: 'AbSplitOpts_FromNameA',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_FromNameA]',
    }),
    AbSplitOpts_FromNameB: createAttribute({
        name: 'AbSplitOpts_FromNameB',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_FromNameB]',
    }),
    AbSplitOpts_PickWinner: createAttribute({
        name: 'AbSplitOpts_PickWinner',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_PickWinner]',
    }),
    AbSplitOpts_ReplyEmailA: createAttribute({
        name: 'AbSplitOpts_ReplyEmailA',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_ReplyEmailA]',
    }),
    AbSplitOpts_ReplyEmailB: createAttribute({
        name: 'AbSplitOpts_ReplyEmailB',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_ReplyEmailB]',
    }),
    AbSplitOpts_SplitSize: createAttribute({
        name: 'AbSplitOpts_SplitSize',
        type: 'numeric-attribute',
        expression: '[Campaigns.AbSplitOpts_SplitSize]',
    }),
    AbSplitOpts_SplitTest: createAttribute({
        name: 'AbSplitOpts_SplitTest',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_SplitTest]',
    }),
    AbSplitOpts_SubjectA: createAttribute({
        name: 'AbSplitOpts_SubjectA',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_SubjectA]',
    }),
    AbSplitOpts_SubjectB: createAttribute({
        name: 'AbSplitOpts_SubjectB',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_SubjectB]',
    }),
    AbSplitOpts_WaitTime: createAttribute({
        name: 'AbSplitOpts_WaitTime',
        type: 'numeric-attribute',
        expression: '[Campaigns.AbSplitOpts_WaitTime]',
    }),
    AbSplitOpts_WaitUnits: createAttribute({
        name: 'AbSplitOpts_WaitUnits',
        type: 'text-attribute',
        expression: '[Campaigns.AbSplitOpts_WaitUnits]',
    }),
    ArchiveUrl: createAttribute({
        name: 'ArchiveUrl',
        type: 'text-attribute',
        expression: '[Campaigns.ArchiveUrl]',
    }),
    ContentType: createAttribute({
        name: 'ContentType',
        type: 'text-attribute',
        expression: '[Campaigns.ContentType]',
    }),
    DeliveryStatus: createAttribute({
        name: 'DeliveryStatus',
        type: 'text-attribute',
        expression: '[Campaigns.DeliveryStatus]',
    }),
    EmailsSent: createAttribute({
        name: 'EmailsSent',
        type: 'numeric-attribute',
        expression: '[Campaigns.EmailsSent]',
    }),
    Id: createAttribute({
        name: 'Id',
        type: 'text-attribute',
        expression: '[Campaigns.Id]',
    }),
    LongArchiveUrl: createAttribute({
        name: 'LongArchiveUrl',
        type: 'text-attribute',
        expression: '[Campaigns.LongArchiveUrl]',
    }),
    Recipients_ListId: createAttribute({
        name: 'Recipients_ListId',
        type: 'text-attribute',
        expression: '[Campaigns.Recipients_ListId]',
    }),
    Recipients_ListName: createAttribute({
        name: 'Recipients_ListName',
        type: 'text-attribute',
        expression: '[Campaigns.Recipients_ListName]',
    }),
    Recipients_RecipientCount: createAttribute({
        name: 'Recipients_RecipientCount',
        type: 'numeric-attribute',
        expression: '[Campaigns.Recipients_RecipientCount]',
    }),
    Recipients_SegmentOpts: createAttribute({
        name: 'Recipients_SegmentOpts',
        type: 'text-attribute',
        expression: '[Campaigns.Recipients_SegmentOpts]',
    }),
    Recipients_SegmentText: createAttribute({
        name: 'Recipients_SegmentText',
        type: 'text-attribute',
        expression: '[Campaigns.Recipients_SegmentText]',
    }),
    ReportSummary: createAttribute({
        name: 'ReportSummary',
        type: 'text-attribute',
        expression: '[Campaigns.ReportSummary]',
    }),
    RssOpts_ConstrainRssImg: createAttribute({
        name: 'RssOpts_ConstrainRssImg',
        type: 'text-attribute',
        expression: '[Campaigns.RssOpts_ConstrainRssImg]',
    }),
    RssOpts_FeedUrl: createAttribute({
        name: 'RssOpts_FeedUrl',
        type: 'text-attribute',
        expression: '[Campaigns.RssOpts_FeedUrl]',
    }),
    RssOpts_Frequency: createAttribute({
        name: 'RssOpts_Frequency',
        type: 'text-attribute',
        expression: '[Campaigns.RssOpts_Frequency]',
    }),
    RssOpts_LastSent: createAttribute({
        name: 'RssOpts_LastSent',
        type: 'text-attribute',
        expression: '[Campaigns.RssOpts_LastSent]',
    }),
    RssOpts_Schedule: createAttribute({
        name: 'RssOpts_Schedule',
        type: 'text-attribute',
        expression: '[Campaigns.RssOpts_Schedule]',
    }),
    Settings_Authenticate: createAttribute({
        name: 'Settings_Authenticate',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_Authenticate]',
    }),
    Settings_AutoFbPost: createAttribute({
        name: 'Settings_AutoFbPost',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_AutoFbPost]',
    }),
    Settings_AutoFooter: createAttribute({
        name: 'Settings_AutoFooter',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_AutoFooter]',
    }),
    Settings_AutoTweet: createAttribute({
        name: 'Settings_AutoTweet',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_AutoTweet]',
    }),
    Settings_DragAndDrop: createAttribute({
        name: 'Settings_DragAndDrop',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_DragAndDrop]',
    }),
    Settings_FbComments: createAttribute({
        name: 'Settings_FbComments',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_FbComments]',
    }),
    Settings_FolderId: createAttribute({
        name: 'Settings_FolderId',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_FolderId]',
    }),
    Settings_FromName: createAttribute({
        name: 'Settings_FromName',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_FromName]',
    }),
    Settings_InlineCss: createAttribute({
        name: 'Settings_InlineCss',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_InlineCss]',
    }),
    Settings_ReplyTo: createAttribute({
        name: 'Settings_ReplyTo',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_ReplyTo]',
    }),
    Settings_SubjectLine: createAttribute({
        name: 'Settings_SubjectLine',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_SubjectLine]',
    }),
    Settings_TemplateId: createAttribute({
        name: 'Settings_TemplateId',
        type: 'numeric-attribute',
        expression: '[Campaigns.Settings_TemplateId]',
    }),
    Settings_Timewarp: createAttribute({
        name: 'Settings_Timewarp',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_Timewarp]',
    }),
    Settings_Title: createAttribute({
        name: 'Settings_Title',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_Title]',
    }),
    Settings_ToName: createAttribute({
        name: 'Settings_ToName',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_ToName]',
    }),
    Settings_UseConversation: createAttribute({
        name: 'Settings_UseConversation',
        type: 'text-attribute',
        expression: '[Campaigns.Settings_UseConversation]',
    }),
    SocialCard_Description: createAttribute({
        name: 'SocialCard_Description',
        type: 'text-attribute',
        expression: '[Campaigns.SocialCard_Description]',
    }),
    SocialCard_ImageUrl: createAttribute({
        name: 'SocialCard_ImageUrl',
        type: 'text-attribute',
        expression: '[Campaigns.SocialCard_ImageUrl]',
    }),
    SocialCard_Title: createAttribute({
        name: 'SocialCard_Title',
        type: 'text-attribute',
        expression: '[Campaigns.SocialCard_Title]',
    }),
    Status: createAttribute({
        name: 'Status',
        type: 'text-attribute',
        expression: '[Campaigns.Status]',
    }),
    Tracking_Capsule: createAttribute({
        name: 'Tracking_Capsule',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_Capsule]',
    }),
    Tracking_Clicktale: createAttribute({
        name: 'Tracking_Clicktale',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_Clicktale]',
    }),
    Tracking_Ecomm360: createAttribute({
        name: 'Tracking_Ecomm360',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_Ecomm360]',
    }),
    Tracking_GoalTracking: createAttribute({
        name: 'Tracking_GoalTracking',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_GoalTracking]',
    }),
    Tracking_GoogleAnalytics: createAttribute({
        name: 'Tracking_GoogleAnalytics',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_GoogleAnalytics]',
    }),
    Tracking_Highrise: createAttribute({
        name: 'Tracking_Highrise',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_Highrise]',
    }),
    Tracking_HtmlClicks: createAttribute({
        name: 'Tracking_HtmlClicks',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_HtmlClicks]',
    }),
    Tracking_Opens: createAttribute({
        name: 'Tracking_Opens',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_Opens]',
    }),
    Tracking_Salesforce: createAttribute({
        name: 'Tracking_Salesforce',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_Salesforce]',
    }),
    Tracking_TextClicks: createAttribute({
        name: 'Tracking_TextClicks',
        type: 'text-attribute',
        expression: '[Campaigns.Tracking_TextClicks]',
    }),
    Type: createAttribute({
        name: 'Type',
        type: 'text-attribute',
        expression: '[Campaigns.Type]',
    }),
    VariateSettings_Combinations: createAttribute({
        name: 'VariateSettings_Combinations',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_Combinations]',
    }),
    VariateSettings_Contents: createAttribute({
        name: 'VariateSettings_Contents',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_Contents]',
    }),
    VariateSettings_FromNames: createAttribute({
        name: 'VariateSettings_FromNames',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_FromNames]',
    }),
    VariateSettings_ReplyToAddresses: createAttribute({
        name: 'VariateSettings_ReplyToAddresses',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_ReplyToAddresses]',
    }),
    VariateSettings_SendTimes: createAttribute({
        name: 'VariateSettings_SendTimes',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_SendTimes]',
    }),
    VariateSettings_SubjectLines: createAttribute({
        name: 'VariateSettings_SubjectLines',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_SubjectLines]',
    }),
    VariateSettings_TestSize: createAttribute({
        name: 'VariateSettings_TestSize',
        type: 'numeric-attribute',
        expression: '[Campaigns.VariateSettings_TestSize]',
    }),
    VariateSettings_WaitTime: createAttribute({
        name: 'VariateSettings_WaitTime',
        type: 'numeric-attribute',
        expression: '[Campaigns.VariateSettings_WaitTime]',
    }),
    VariateSettings_WinnerCriteria: createAttribute({
        name: 'VariateSettings_WinnerCriteria',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_WinnerCriteria]',
    }),
    VariateSettings_WinningCampaignId: createAttribute({
        name: 'VariateSettings_WinningCampaignId',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_WinningCampaignId]',
    }),
    VariateSettings_WinningCombinationId: createAttribute({
        name: 'VariateSettings_WinningCombinationId',
        type: 'text-attribute',
        expression: '[Campaigns.VariateSettings_WinningCombinationId]',
    }),
    AbSplitOpts_SendTimeA: createDateDimension({
        name: 'AbSplitOpts_SendTimeA',
        expression: '[Campaigns.AbSplitOpts_SendTimeA (Calendar)]',
    }),
    AbSplitOpts_SendTimeB: createDateDimension({
        name: 'AbSplitOpts_SendTimeB',
        expression: '[Campaigns.AbSplitOpts_SendTimeB (Calendar)]',
    }),
    AbSplitOpts_SendTimeWinner: createDateDimension({
        name: 'AbSplitOpts_SendTimeWinner',
        expression: '[Campaigns.AbSplitOpts_SendTimeWinner (Calendar)]',
    }),
    CreateTime: createDateDimension({
        name: 'CreateTime',
        expression: '[Campaigns.CreateTime (Calendar)]',
    }),
    SendTime: createDateDimension({
        name: 'SendTime',
        expression: '[Campaigns.SendTime (Calendar)]',
    }),
}) as CampaignsDimension;

interface ReportsDimension extends Dimension {
    AbSplit_A: Attribute;
    AbSplit_B: Attribute;
    AbuseReports: Attribute;
    Bounces_HardBounces: Attribute;
    Bounces_SoftBounces: Attribute;
    Bounces_SyntaxErrors: Attribute;
    CampaignTitle: Attribute;
    Clicks_ClickRate: Attribute;
    Clicks_ClicksTotal: Attribute;
    Clicks_UniqueClicks: Attribute;
    Clicks_UniqueSubscriberClicks: Attribute;
    DeliveryStatus: Attribute;
    EmailsSent: Attribute;
    FacebookLikes_FacebookLikes: Attribute;
    FacebookLikes_RecipientLikes: Attribute;
    FacebookLikes_UniqueLikes: Attribute;
    Forwards_ForwardsCount: Attribute;
    Forwards_ForwardsOpens: Attribute;
    Id: Attribute;
    IndustryStats_AbuseRate: Attribute;
    IndustryStats_BounceRate: Attribute;
    IndustryStats_ClickRate: Attribute;
    IndustryStats_OpenRate: Attribute;
    IndustryStats_Type: Attribute;
    IndustryStats_UnopenRate: Attribute;
    IndustryStats_UnsubRate: Attribute;
    ListStats_ClickRate: Attribute;
    ListStats_OpenRate: Attribute;
    ListStats_SubRate: Attribute;
    ListStats_UnsubRate: Attribute;
    Opens_OpenRate: Attribute;
    Opens_OpensTotal: Attribute;
    Opens_UniqueOpens: Attribute;
    ShareReport_SharePassword: Attribute;
    ShareReport_ShareUrl: Attribute;
    Timeseries: Attribute;
    Timewarp: Attribute;
    Type: Attribute;
    Unsubscribed: Attribute;
    Clicks_LastClick: DateDimension;
    Opens_LastOpen: DateDimension;
    SendTime: DateDimension;
}
export const Reports = createDimension({
    name: 'Reports',
    AbSplit_A: createAttribute({
        name: 'AbSplit_A',
        type: 'text-attribute',
        expression: '[Reports.AbSplit_A]',
    }),
    AbSplit_B: createAttribute({
        name: 'AbSplit_B',
        type: 'text-attribute',
        expression: '[Reports.AbSplit_B]',
    }),
    AbuseReports: createAttribute({
        name: 'AbuseReports',
        type: 'numeric-attribute',
        expression: '[Reports.AbuseReports]',
    }),
    Bounces_HardBounces: createAttribute({
        name: 'Bounces_HardBounces',
        type: 'numeric-attribute',
        expression: '[Reports.Bounces_HardBounces]',
    }),
    Bounces_SoftBounces: createAttribute({
        name: 'Bounces_SoftBounces',
        type: 'numeric-attribute',
        expression: '[Reports.Bounces_SoftBounces]',
    }),
    Bounces_SyntaxErrors: createAttribute({
        name: 'Bounces_SyntaxErrors',
        type: 'numeric-attribute',
        expression: '[Reports.Bounces_SyntaxErrors]',
    }),
    CampaignTitle: createAttribute({
        name: 'CampaignTitle',
        type: 'text-attribute',
        expression: '[Reports.CampaignTitle]',
    }),
    Clicks_ClickRate: createAttribute({
        name: 'Clicks_ClickRate',
        type: 'numeric-attribute',
        expression: '[Reports.Clicks_ClickRate]',
    }),
    Clicks_ClicksTotal: createAttribute({
        name: 'Clicks_ClicksTotal',
        type: 'numeric-attribute',
        expression: '[Reports.Clicks_ClicksTotal]',
    }),
    Clicks_UniqueClicks: createAttribute({
        name: 'Clicks_UniqueClicks',
        type: 'numeric-attribute',
        expression: '[Reports.Clicks_UniqueClicks]',
    }),
    Clicks_UniqueSubscriberClicks: createAttribute({
        name: 'Clicks_UniqueSubscriberClicks',
        type: 'numeric-attribute',
        expression: '[Reports.Clicks_UniqueSubscriberClicks]',
    }),
    DeliveryStatus: createAttribute({
        name: 'DeliveryStatus',
        type: 'text-attribute',
        expression: '[Reports.DeliveryStatus]',
    }),
    EmailsSent: createAttribute({
        name: 'EmailsSent',
        type: 'numeric-attribute',
        expression: '[Reports.EmailsSent]',
    }),
    FacebookLikes_FacebookLikes: createAttribute({
        name: 'FacebookLikes_FacebookLikes',
        type: 'numeric-attribute',
        expression: '[Reports.FacebookLikes_FacebookLikes]',
    }),
    FacebookLikes_RecipientLikes: createAttribute({
        name: 'FacebookLikes_RecipientLikes',
        type: 'numeric-attribute',
        expression: '[Reports.FacebookLikes_RecipientLikes]',
    }),
    FacebookLikes_UniqueLikes: createAttribute({
        name: 'FacebookLikes_UniqueLikes',
        type: 'numeric-attribute',
        expression: '[Reports.FacebookLikes_UniqueLikes]',
    }),
    Forwards_ForwardsCount: createAttribute({
        name: 'Forwards_ForwardsCount',
        type: 'numeric-attribute',
        expression: '[Reports.Forwards_ForwardsCount]',
    }),
    Forwards_ForwardsOpens: createAttribute({
        name: 'Forwards_ForwardsOpens',
        type: 'numeric-attribute',
        expression: '[Reports.Forwards_ForwardsOpens]',
    }),
    Id: createAttribute({
        name: 'Id',
        type: 'text-attribute',
        expression: '[Reports.Id]',
    }),
    IndustryStats_AbuseRate: createAttribute({
        name: 'IndustryStats_AbuseRate',
        type: 'numeric-attribute',
        expression: '[Reports.IndustryStats_AbuseRate]',
    }),
    IndustryStats_BounceRate: createAttribute({
        name: 'IndustryStats_BounceRate',
        type: 'numeric-attribute',
        expression: '[Reports.IndustryStats_BounceRate]',
    }),
    IndustryStats_ClickRate: createAttribute({
        name: 'IndustryStats_ClickRate',
        type: 'numeric-attribute',
        expression: '[Reports.IndustryStats_ClickRate]',
    }),
    IndustryStats_OpenRate: createAttribute({
        name: 'IndustryStats_OpenRate',
        type: 'numeric-attribute',
        expression: '[Reports.IndustryStats_OpenRate]',
    }),
    IndustryStats_Type: createAttribute({
        name: 'IndustryStats_Type',
        type: 'text-attribute',
        expression: '[Reports.IndustryStats_Type]',
    }),
    IndustryStats_UnopenRate: createAttribute({
        name: 'IndustryStats_UnopenRate',
        type: 'numeric-attribute',
        expression: '[Reports.IndustryStats_UnopenRate]',
    }),
    IndustryStats_UnsubRate: createAttribute({
        name: 'IndustryStats_UnsubRate',
        type: 'numeric-attribute',
        expression: '[Reports.IndustryStats_UnsubRate]',
    }),
    ListStats_ClickRate: createAttribute({
        name: 'ListStats_ClickRate',
        type: 'numeric-attribute',
        expression: '[Reports.ListStats_ClickRate]',
    }),
    ListStats_OpenRate: createAttribute({
        name: 'ListStats_OpenRate',
        type: 'numeric-attribute',
        expression: '[Reports.ListStats_OpenRate]',
    }),
    ListStats_SubRate: createAttribute({
        name: 'ListStats_SubRate',
        type: 'numeric-attribute',
        expression: '[Reports.ListStats_SubRate]',
    }),
    ListStats_UnsubRate: createAttribute({
        name: 'ListStats_UnsubRate',
        type: 'numeric-attribute',
        expression: '[Reports.ListStats_UnsubRate]',
    }),
    Opens_OpenRate: createAttribute({
        name: 'Opens_OpenRate',
        type: 'numeric-attribute',
        expression: '[Reports.Opens_OpenRate]',
    }),
    Opens_OpensTotal: createAttribute({
        name: 'Opens_OpensTotal',
        type: 'numeric-attribute',
        expression: '[Reports.Opens_OpensTotal]',
    }),
    Opens_UniqueOpens: createAttribute({
        name: 'Opens_UniqueOpens',
        type: 'numeric-attribute',
        expression: '[Reports.Opens_UniqueOpens]',
    }),
    ShareReport_SharePassword: createAttribute({
        name: 'ShareReport_SharePassword',
        type: 'text-attribute',
        expression: '[Reports.ShareReport_SharePassword]',
    }),
    ShareReport_ShareUrl: createAttribute({
        name: 'ShareReport_ShareUrl',
        type: 'text-attribute',
        expression: '[Reports.ShareReport_ShareUrl]',
    }),
    Timeseries: createAttribute({
        name: 'Timeseries',
        type: 'text-attribute',
        expression: '[Reports.Timeseries]',
    }),
    Timewarp: createAttribute({
        name: 'Timewarp',
        type: 'text-attribute',
        expression: '[Reports.Timewarp]',
    }),
    Type: createAttribute({
        name: 'Type',
        type: 'text-attribute',
        expression: '[Reports.Type]',
    }),
    Unsubscribed: createAttribute({
        name: 'Unsubscribed',
        type: 'numeric-attribute',
        expression: '[Reports.Unsubscribed]',
    }),
    Clicks_LastClick: createDateDimension({
        name: 'Clicks_LastClick',
        expression: '[Reports.Clicks_LastClick (Calendar)]',
    }),
    Opens_LastOpen: createDateDimension({
        name: 'Opens_LastOpen',
        expression: '[Reports.Opens_LastOpen (Calendar)]',
    }),
    SendTime: createDateDimension({
        name: 'SendTime',
        expression: '[Reports.SendTime (Calendar)]',
    }),
}) as ReportsDimension;

import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'Facebook_ARTBA', type: 'elasticube' };

interface PostsDimension extends Dimension {
    Actions: Attribute;
    ApplicationCanvasName: Attribute;
    ApplicationId: Attribute;
    ApplicationName: Attribute;
    ApplicationNamespace: Attribute;
    Attachments: Attribute;
    CommentsCount: Attribute;
    CommentsData: Attribute;
    FromCategory: Attribute;
    FromId: Attribute;
    FromName: Attribute;
    FromPicture: Attribute;
    FullPicture: Attribute;
    Icon: Attribute;
    ID: Attribute;
    LikesCount: Attribute;
    LikesData: Attribute;
    Message: Attribute;
    MessageTags: Attribute;
    Picture: Attribute;
    PlaceId: Attribute;
    PlaceName: Attribute;
    SharesCount: Attribute;
    Story: Attribute;
    StoryTags: Attribute;
    Target: Attribute;
    ToData: Attribute;
    CreatedTime: DateDimension;
    UpdatedTime: DateDimension;
}
export const Posts = createDimension({
    name: 'Posts',
    Actions: createAttribute({
        name: 'Actions',
        type: 'text-attribute',
        expression: '[Posts.Actions]',
    }),
    ApplicationCanvasName: createAttribute({
        name: 'ApplicationCanvasName',
        type: 'text-attribute',
        expression: '[Posts.ApplicationCanvasName]',
    }),
    ApplicationId: createAttribute({
        name: 'ApplicationId',
        type: 'text-attribute',
        expression: '[Posts.ApplicationId]',
    }),
    ApplicationName: createAttribute({
        name: 'ApplicationName',
        type: 'text-attribute',
        expression: '[Posts.ApplicationName]',
    }),
    ApplicationNamespace: createAttribute({
        name: 'ApplicationNamespace',
        type: 'text-attribute',
        expression: '[Posts.ApplicationNamespace]',
    }),
    Attachments: createAttribute({
        name: 'Attachments',
        type: 'text-attribute',
        expression: '[Posts.Attachments]',
    }),
    CommentsCount: createAttribute({
        name: 'CommentsCount',
        type: 'numeric-attribute',
        expression: '[Posts.CommentsCount]',
    }),
    CommentsData: createAttribute({
        name: 'CommentsData',
        type: 'text-attribute',
        expression: '[Posts.CommentsData]',
    }),
    FromCategory: createAttribute({
        name: 'FromCategory',
        type: 'text-attribute',
        expression: '[Posts.FromCategory]',
    }),
    FromId: createAttribute({
        name: 'FromId',
        type: 'text-attribute',
        expression: '[Posts.FromId]',
    }),
    FromName: createAttribute({
        name: 'FromName',
        type: 'text-attribute',
        expression: '[Posts.FromName]',
    }),
    FromPicture: createAttribute({
        name: 'FromPicture',
        type: 'text-attribute',
        expression: '[Posts.FromPicture]',
    }),
    FullPicture: createAttribute({
        name: 'FullPicture',
        type: 'text-attribute',
        expression: '[Posts.FullPicture]',
    }),
    Icon: createAttribute({
        name: 'Icon',
        type: 'text-attribute',
        expression: '[Posts.Icon]',
    }),
    ID: createAttribute({
        name: 'ID',
        type: 'text-attribute',
        expression: '[Posts.ID]',
    }),
    LikesCount: createAttribute({
        name: 'LikesCount',
        type: 'numeric-attribute',
        expression: '[Posts.LikesCount]',
    }),
    LikesData: createAttribute({
        name: 'LikesData',
        type: 'text-attribute',
        expression: '[Posts.LikesData]',
    }),
    Message: createAttribute({
        name: 'Message',
        type: 'text-attribute',
        expression: '[Posts.Message]',
    }),
    MessageTags: createAttribute({
        name: 'MessageTags',
        type: 'text-attribute',
        expression: '[Posts.MessageTags]',
    }),
    Picture: createAttribute({
        name: 'Picture',
        type: 'text-attribute',
        expression: '[Posts.Picture]',
    }),
    PlaceId: createAttribute({
        name: 'PlaceId',
        type: 'text-attribute',
        expression: '[Posts.PlaceId]',
    }),
    PlaceName: createAttribute({
        name: 'PlaceName',
        type: 'text-attribute',
        expression: '[Posts.PlaceName]',
    }),
    SharesCount: createAttribute({
        name: 'SharesCount',
        type: 'numeric-attribute',
        expression: '[Posts.SharesCount]',
    }),
    Story: createAttribute({
        name: 'Story',
        type: 'text-attribute',
        expression: '[Posts.Story]',
    }),
    StoryTags: createAttribute({
        name: 'StoryTags',
        type: 'text-attribute',
        expression: '[Posts.StoryTags]',
    }),
    Target: createAttribute({
        name: 'Target',
        type: 'text-attribute',
        expression: '[Posts.Target]',
    }),
    ToData: createAttribute({
        name: 'ToData',
        type: 'text-attribute',
        expression: '[Posts.ToData]',
    }),
    CreatedTime: createDateDimension({
        name: 'CreatedTime',
        expression: '[Posts.CreatedTime (Calendar)]',
    }),
    UpdatedTime: createDateDimension({
        name: 'UpdatedTime',
        expression: '[Posts.UpdatedTime (Calendar)]',
    }),
}) as PostsDimension;

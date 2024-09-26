module.exports = async () => {
  // Check if the content type already exists
  const contentType = await strapi.contentTypes['api::donor.donor'];
  if (contentType) {
    console.log('donor content type already exists');
    return;
  }

  // Create the content type
  await strapi.plugin('content-type-builder').services.contenttypes.createContentType({
    contentType: {
      displayName: 'donor',
      singularName: 'donor',
      pluralName: 'donors',
      kind: 'collectionType',
      attributes: {
        firstName: {
          type: 'string',
          required: true,
        },
        lastName: {
          type: 'string',
          required: true,
        },
        gender: {
          type: 'enumeration',
          enum: ['Male', 'Female', 'Other'],
          required: true,
        },
        location: {
          type: 'string',
        },
        grade: {
          type: 'string',
        },
        aspiration: {
          type: 'text',
        },
        bio: {
          type: 'richtext',
        },
        document: {
          type: 'media',
          multiple: true,
        },
        dateOfBirth: {
          type: 'date',
        },
        profile: {
          type: 'media',
          multiple: false,
        },
        parentInfo: {
          type: 'string',
        },
        sponsorId: {
          type: 'relation',
          relation: 'manyToOne',
          target: 'api::sponsor.sponsor',
          inversedBy: 'donors'
        },
        galleryUrl: {
          type: 'string',
        },
      },
    },
  });

  console.log('donor content type created successfully');
};

'use strict';

/**
 * lia-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lia-admin.lia-admin');

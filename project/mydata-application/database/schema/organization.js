const crypto = require('crypto')

module.exports = {
    name: 'organization',
    schema: {
        org_did: String, // String is shorthand for {type: String}
        org_name: String,
        org_domain: String,
        reg_date: { type: Date, default: Date.now },
        is_activation: { type: Boolean, default: true },
    }
};
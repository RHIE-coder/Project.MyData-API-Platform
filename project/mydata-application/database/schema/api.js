const crypto = require('crypto')

module.exports = {
    name: 'api',
    schema: {
        api_schema_id: String,
        org_did: String,
        details: String,
        url: String,
        data_type: String,
        http_method: String,
        header: String,
        parameter: String,
        body: String,
        is_revocation: { type: Boolean, default: true },
        org_sig: String,
    }
};

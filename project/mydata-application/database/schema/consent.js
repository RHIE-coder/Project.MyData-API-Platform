const crypto = require('crypto')

module.exports = {
    name: 'consent',
    schema: {
        consent_id: String,
        api_schema_id: String,
        api_src_org_did: String,
        consent_date: { type: Date, default: Date.now },
        is_termination: { type: Boolean, default: true },
        allowed_org_did: String,
        jurisdiction: String,
        subject_sig: String,
    }
};

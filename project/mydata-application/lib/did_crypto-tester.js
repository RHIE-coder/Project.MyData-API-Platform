const did_crypto_call = require('./utils')['did_crypto_call']

// function did_crypto_call(funcName, paramObj) {
//     const python_module = spawn('python3', [`${process.cwd()}/../module/did-crypto.py`, funcName, JSON.stringify(paramObj)])
//     return new Promise(
//         function (resolve, reject) {
//             python_module.stdout.on('data', function (result) {
//                 resolve(result.toString())
//             })
//         })
// }

module.exports = did_crypto_call

async function test() {
    wallet_config = { id: "tester-wallet" }
    wallet_credentials = { key: "test-wallet-key" }

    wallet_params = {
        wallet_config,
        wallet_credentials,
    }

    const result = await did_crypto_call("did_list", wallet_params)
    console.log(result)
}

async function test2() {
    wallet_config = { id: "tester-wallet" }
    wallet_credentials = { key: "test-wallet-key" }

    wallet_params = {
        wallet_config,
        wallet_credentials,
    }

    const get_did_list = await did_crypto_call("did_list", wallet_params)
    
    did_list = JSON.parse(get_did_list);
    did_set = did_list[0]

    my_did = did_set['my_did'] //TkTzx1gbGwF2bbHK1xeJgd
    verkey = did_set['verkey']
    target = 'hello world'

    sign_params = {
        ...wallet_params,
        verkey,
        target
    }

    console.log(sign_params)
    console.log("====================================")
    
    const sig = await did_crypto_call("sign_message", sign_params)
    const signature = sig.trim()
    

    // // Base64 Encoding
    // const base64EncodedText = Buffer.from(sig, "utf8").toString('base64');
    // console.log("Base64 Encoded Text : ", base64EncodedText);

    // // Base64 Decoding
    // const base64DecodedText = Buffer.from(base64EncodedText, "base64").toString('utf8');
    // console.log("Base64 Decoded Text : ", base64DecodedText);

    verify_params = {
        verkey,
        plain : target,
        signature
    }
    console.log(verify_params)
    console.log(JSON.stringify(verify_params))

    const result = await did_crypto_call("sign_verify", verify_params)
    console.log(result)
    console.log("====================================")
}

async function test3(){
    // func_map['make_challenge'] = make_challenge
    // func_map['verify_chanlleng'] = verify_chanlleng

    wallet_config = { id: "tester-wallet" }
    wallet_credentials = { key: "test-wallet-key" }

    wallet_params = {
        wallet_config,
        wallet_credentials,
    }

    const get_did_list = await did_crypto_call("did_list", wallet_params)
    
    did_list = JSON.parse(get_did_list);
    did_set = did_list[0]

    my_did = did_set['my_did'] //TkTzx1gbGwF2bbHK1xeJgd
    verkey = did_set['verkey']
    target = 'hello world'

    make_challenge_params = {
        verkey,
        target
    }

    console.log(make_challenge_params)
    console.log(JSON.stringify(make_challenge_params))
    console.log("====================================")
    
    const chall = await did_crypto_call("make_challenge", make_challenge_params)
    const challenge = chall.trim()
    console.log(challenge)

    console.log("====================================")
    verify_params = {
        ...wallet_params,
        verkey,
        challenge,
    }

    const res = await did_crypto_call("verify_chanlleng", verify_params)
    console.log(res)

}

test3()

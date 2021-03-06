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

function line(message){
    if(message !== undefined){
        console.log(`===============${message}===============`)
    }else{
        console.log(`========================================`)
    }
    console.log()
    console.log()
}

const wallet_config = { id: "test3-wallet" }
const wallet_credentials = { key: "test2-wallet-key" }

async function step1() {
    
    wallet_params = {
        wallet_config,
        wallet_credentials,
    }
    
    line("create wallet")
    const wallet_result = await did_crypto_call("create_wallet", wallet_params)
    console.log(wallet_result)
    line("create did")
    const did_result = await did_crypto_call("create_did", wallet_params)
    console.log(did_result)
    line("did list")
    const list_result = await did_crypto_call("did_list", wallet_params)
    console.log(list_result)
    line()
}

async function step2() {

    wallet_params = {
        wallet_config,
        wallet_credentials,
    }


    line("get did")
    const get_did_list = await did_crypto_call("did_list", wallet_params)
    console.log(get_did_list)
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
    line("sign message")
    
    console.log(sign_params)
    
    const sig = await did_crypto_call("sign_message", sign_params)
    const signature = sig.trim()
    console.log("sign : " + signature)

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

    line("sign verify")
    console.log(verify_params)

    const result = await did_crypto_call("sign_verify", verify_params)
    console.log(result)
    
}

async function step3(){
    // func_map['make_challenge'] = make_challenge
    // func_map['verify_chanlleng'] = verify_chanlleng

    wallet_params = {
        wallet_config,
        wallet_credentials,
    }

    line("get did")
    const get_did_list = await did_crypto_call("did_list", wallet_params)
    console.log(get_did_list)
    did_list = JSON.parse(get_did_list);
    did_set = did_list[0]

    my_did = did_set['my_did'] //TkTzx1gbGwF2bbHK1xeJgd
    verkey = did_set['verkey']
    target = 'hello world'

    make_challenge_params = {
        verkey,
        target
    }

    line("make challenge")
    console.log(make_challenge_params)
    
    const chall = await did_crypto_call("make_challenge", make_challenge_params)
    const challenge = chall.trim()
    console.log(challenge)

    
    verify_params = {
        ...wallet_params,
        verkey,
        challenge,
    }

    line("verify challenge")
    console.log(verify_params)
    const res = await did_crypto_call("verify_challenge", verify_params)
    console.log(res)
}


const arg = process.argv[2];


if(arg === "1"){
    step1()
}else if(arg == "2"){
    step2()
}else if(arg == "3"){
    step3()
}

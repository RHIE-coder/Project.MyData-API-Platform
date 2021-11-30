const fs = require('fs')
const path = require('path')

function init(app) {
    const routerlist = path.join(__dirname, "./src")
    const filelist = fs.readdirSync(routerlist).map(file => path.basename(file, path.extname(file)))
    filelist.forEach(filename => {
        const routerinfo = require(`./src/${filename}`);
        const params = []

        if (!routerinfo.ignore) {
            if (routerinfo.params) routerinfo.params.forEach(name => params.push(app.get(name)));
            const router = Reflect.apply(
                routerinfo.routers,
                undefined,
                params
            )

            // app.use(routerinfo?.path ?? '/', router); //Version Issue ( current node 10.24.1 )

            if(routerinfo != undefined || routerinfo != null){
                const select_routing = routerinfo.path == undefined ? '/' : router
                app.use(select_routing, router);
            }
            
        }
    })

}

module.exports.init = init


const {createLogger, format, transports} = require("winston")
const { create } = require("./models/user")

const logger = createLogger({
    level:"info",
    format:format.json(),
    transports:[
        new transports.File({filename:"combined.log"}),
        new transports.File({filename:"error.log", level:"error"})
    ]
});

if(process.env.NODE_ENV!=='productuin'){
    logger.add(new transports.Console({format:format.simple()}))
}

module.exports = logger
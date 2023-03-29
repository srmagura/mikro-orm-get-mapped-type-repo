"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroOrmConfig = void 0;
const core_1 = require("@mikro-orm/core");
const User_1 = require("./User");
exports.mikroOrmConfig = {
    entities: [User_1.User],
    discovery: {
        getMappedType(type, platform) {
            console.log("getMappedType called!");
            // Change default column type from `VARCHAR(n)` to `TEXT`
            if (type === "string") {
                return core_1.Type.getType(core_1.TextType);
            }
            return platform.getDefaultMappedType(type);
        },
    },
    type: "postgresql",
    // host: DB_HOST,
    // port: DB_PORT,
    // user: DB_USERNAME,
    // password: DB_PASSWORD,
    // dbName: DB_DATABASE,
    migrations: {
        path: "./src/migrations",
    },
};
exports.default = exports.mikroOrmConfig;

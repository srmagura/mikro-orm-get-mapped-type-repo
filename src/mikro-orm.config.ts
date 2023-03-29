import { Options } from "@mikro-orm/postgresql";
import { Platform, TextType, Type } from "@mikro-orm/core";
import { User } from "./User";

const mikroOrmConfig: Options = {
  entities: [User],

  discovery: {
    disableDynamicFileAccess: true,

    getMappedType(type: string, platform: Platform) {
      console.log("getMappedType called!");

      // Change default column type from `VARCHAR(n)` to `TEXT`
      if (type === "string") {
        return Type.getType(TextType);
      }

      return platform.getDefaultMappedType(type);
    },
  },

  type: "postgresql",
  dbName: "mappedtyperepro",

  migrations: {
    path: "./src/migrations",
  },
};

export default mikroOrmConfig;

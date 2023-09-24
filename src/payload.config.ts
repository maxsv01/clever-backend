import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import Lessons from "./collections/lessons/Lessons";
import AppUsers from "./collections/appUsers/AppUsers";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Lessons, AppUsers],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
});

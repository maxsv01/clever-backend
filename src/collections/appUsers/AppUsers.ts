import { CollectionConfig } from "payload/types";

const AppUsers: CollectionConfig = {
  slug: "appUsers",
  labels: {
    plural: "Users",
    singular: "User",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "userName",
    // hidden: true,
  },
  fields: [
    {
      label: "User name",
      name: "userName",
      type: "text",
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      label: "Clever Points",
      name: "cleverPoints",
      type: "number",
      defaultValue: 0,
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      label: "Clever Experience",
      name: "cleverExperience",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      label: "Level",
      name: "level",
      type: "number",
      required: true,
      defaultValue: 1,
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default AppUsers;

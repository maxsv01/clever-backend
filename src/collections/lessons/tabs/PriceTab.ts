import { Tab } from "payload/dist/fields/config/types";

const PriceTab: Tab = {
  label: "Price",
  fields: [
    {
      label: "Lesson price",
      name: "lessonPrice",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description: "Clever points",
      },
    },
    {
      label: "Lesson level",
      name: "lessonLevel",
      type: "number",
      defaultValue: 0,
      required: true,
      admin: {
        description: "Clever experience",
      },
    },
  ],
};

export default PriceTab;

import { CollectionConfig } from "payload/types";
import BasicInformationTab from "./tabs/BasicInformationTab";
import TestsTab from "./tabs/TestsTab";
import PriceTab from "./tabs/PriceTab";

const Lessons: CollectionConfig = {
  labels: {
    plural: "Lessons",
    singular: "Lesson",
  },
  slug: "lessons",
  admin: {
    useAsTitle: "lessonName",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [BasicInformationTab, TestsTab, PriceTab],
    },
  ],
};

export default Lessons;

import { Tab } from "payload/dist/fields/config/types";
import generateSlug from "../../../utils/generateSlug";

const BasicInformationTab: Tab = {
    label: "Basic information",
    fields: [
        {
            label: 'Name',
            name: 'lessonName',
            type: 'text',
            required: true,
        },
        {
            label: 'Slug',
            name: 'slug',
            type: 'text',
            admin: {
                readOnly: true
            },
            hooks: {
                beforeChange: [
                    async ({ data,  }) => {
                        const lessonName = data?.lessonName;
                        return generateSlug(lessonName);
                    }
                ]
            }
        },
        {
            label: 'Lesson description',
            name: 'lessonDescription',
            type: 'text',
            required: true
        },
        {
            label: 'Lesson content',
            name: 'lessonContent',
            type: 'richText',
            required: true
        },
    ]
}

export default BasicInformationTab
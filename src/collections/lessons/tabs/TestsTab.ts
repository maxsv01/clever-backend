import { Tab } from "payload/dist/fields/config/types";

const TestsTab: Tab = {
  label: "Tests",
  fields: [
    {
      name: "tests",
      type: "array",
      label: "Tests",
      minRows: 1,
      required: true,

      fields: [
        {
          name: "question",
          type: "text",
          label: "Question",
          required: true,
        },
        {
          type: "array",
          name: "answers",
          label: "Answers",
          required: true,
          fields: [
            {
              label: "Answer",
              name: "answer",
              type: "text",
              required: true,
            },
            {
              name: "correctAnswer",
              type: "radio",
              label: "Correct answer",
              options: [
                {
                  label: "Yes",
                  value: "correct",
                },
                {
                  label: "No",
                  value: "incorrect",
                },
              ],
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default TestsTab;

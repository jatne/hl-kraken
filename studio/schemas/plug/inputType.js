import conditionalFields from "../../components/CustomObjectInput";

export default {
  title: "Select the link type",
  name: 'inputType',
  type: 'object',
  inputComponent: conditionalFields,
  fields: [
    {
      title: 'Input',
      type: 'input',
      name: 'input',
    },
    {
      title: 'Input Options',
      type: 'inputOptions',
      name: 'options',
    }
  ]
}

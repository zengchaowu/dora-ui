// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return `<my-component first="${args.first}" last="${args.last}"></my-component>`;
  },
  argTypes: {
    first: { control: 'text' },
    last: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Default = {
  args: {
    first: 'first',
    last: 'last',
  },
};

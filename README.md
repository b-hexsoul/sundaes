# React Testing Library - Notes

We want tests to mimic how users will interact with our software

## userEvent vs fireEvent

fireEvent allows for one specific event but often multiple events are fired for a DOM element or because of a DOM element.

`const user = userEvent.setup();`

## Screen Query Methods

- command[All]ByQueryType

#### command:

- get: expect element to be in the DOM.
- query: expect element not to be in DOM.
- find: expect element to appear async.

#### All:

- exclude: expect only one match
- include: expect more than one match

#### QueryType:

- what you are searching by
- Role (most preferred)
- AltText (images)
- Text (display elements)
- Form Elements
  - PlaceholderText
  - LabelText
  - DisplayValue

[cheet sheet](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries)

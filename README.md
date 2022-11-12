# React Testing Library - Notes

We want tests to mimic how users will interact with our software

## userEvent vs fireEvent

fireEvent allows for one specific event but often multiple events are fired for a DOM element or because of a DOM element.

All methods off of the userEvent are promises!

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

## Asynchronous

When you are waiting for something to appear asynchronously on the page, you must use **await findBy**

**waitFor** When in need to wait for any period of time you can use waitFor, to wait for your expectations to pass.

## Debugging

CLI 'p' to search test files. Can add .only or .skip on a test too.

[cheet sheet](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries)

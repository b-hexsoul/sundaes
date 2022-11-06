# React Testing Library - Notes

## userEvent vs fireEvent

fireEvent allows for one specific event but often multiple events are fired for a DOM element or because of a DOM element.

`const user = userEvent.setup();`

## Screen Query Methods

- command[All]ByQueryType

#### Command:

- get: expect element to be in the DOM.
- query: expect element not to be in DOM.
- find: expect element to appear async.

#### \[ALL\]:

- exclude: expect only one match
- include: expect more than one match

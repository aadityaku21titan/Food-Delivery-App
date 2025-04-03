Two type of Import and Export

- default export/import

export default Component;
import Component from "path";

- Named Export/Import

export const Component
import {Component} from "path"

// it's used whenever there are multiple exports in a single file.

#React Hooks

(Normal JS Utility functions)
It will automatically update the data in the UI, unlike the normal javascript variables, these hooks are just functions of JS, whose logic is there in the node modules. We need to import it from there.

- useState() - Superpowerful State variables in React
- useEffect()

Whenever a state variable is changing, react re-renders the component. Even the jsx part (HTML thing), it will gonna be change as well.

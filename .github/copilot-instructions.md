# Project Guidelines

## Build and Test

- `npm run start` starts the Parcel development server using `index.html`.
- `npm run build` creates the production bundle from `index.html`.
- `npm test` invokes Jest. To run one test file, use `npm test -- --runInBand --runTestsByPath <path-to-test>`.
- Jest is referenced by the test script but is not currently a project dependency, and no test files are present. There is no configured lint script.

## Architecture

`index.html` loads `src/app.js`, which mounts the React application into `#root`. `AppLayout` composes the header and collection body. `BodyComponent` renders cards from the data in `src/utils/mockData.js` and owns the collection's filter state; `PickleCard` presents an individual item. Shared image URLs used by the header are in `src/utils/constants.js`, and the app's styles are in the root `index.css`.

## Conventions

- Components are function components in `.js` files with JSX; component filenames use the `Component` suffix.
- Components and the mock collection use default exports. Shared constants use named exports.
- Pass collection entries to `PickleCard` as `pickleObj` and use each item's `id` as the list key.
- Keep header image URL constants in `src/utils/constants.js` and collection fixtures in `src/utils/mockData.js`.

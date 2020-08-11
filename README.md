# Catalog
Station's library of UI Components for React.

## Use
Catalog's components are available on [bit.dev](https://bit.dev/station/catalog), to add a component to your project as dependency, use:
```shell script
yarn add @bit/station.catalog.colors
```

## Requirements
#### Toolchain
- `nvm` (`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash` to install)
- `npm` >= 6.13.7
- `node` >= 13.11.0
- `yarn` ~= latest

You can use `nvm i` to use the correct version of `node` and `npm` (or Volta as well).

#### Bit CLI
Install `bit` CLI globally (for publishing and such): `brew install bit` or `yarn global add bit-bin`

⚠️ Make sure you're logged in to use `bit` ! Do so with: `bit login`

Request an invit if you don't have any yet.

## Setup
As usual:
```shell script
yarn
```

## Quick start

```shell script
yarn start
```
#### Other project commands
| Command | Description |
| ------- | ----------- |
| `yarn start` | build and open project's storybook on a new browser tab |
| `yarn build` | build components using `bit` |
| `yarn build-storybook` | build storybook static files |
| `yarn gen:icons` | used to rebuild `icons` component when `src/assets/icons/` is updated |
| `yarn gen:images` | used to rebuild `images` component when `src/assets/images/` is updated |
| `yarn chromatic` | build and push storybook static files to chromatic |
| `yarn postinstall` | run `gen:icons` and `gen:images` commmands sequentially |

## Contribute
To contribute, please get in touch with:
- dev flow schema
![dev flow schema](https://i.imgur.com/y2U2k2m.png)

#### Chromatic
Chromatic is the tool we're using for UI reviews with product team. For each PR created, a storybook static files build is pushed to chromatic which generate a visual diff of `master`
branch with your PR's branch.

Also, it can be used as a simple hosted storybook with VCS.
#### bit.dev
Bit.dev is a fast, dynamic and collaborative way to build team component library. It lets you gradually extract, collect and reuse existing UI components written in your apps.
Instead of publishing a library to NPM you can directly install components from your bit.dev library using your NPM and Yarn clients.

if you don't know [bit](https://bit.dev/), these resources may be useful:
- [Isolate, version and publish individual components from the library](https://blog.bitsrc.io/ui-component-library-how-to-publish-install-and-update-individual-components-c07d0dde8aaa#64a3)
- [How bit works](https://docs.bit.dev/docs/how-bit-works)
- [Bit for React](https://docs.bit.dev/docs/tutorials/bit-react-tutorial)
- [Centralized library with bit](https://docs.bit.dev/docs/workflows/centralized)
- [Bit and Typescript](https://docs.bit.dev/docs/ts-guidelines)

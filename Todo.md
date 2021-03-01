# List of items needed before submitted

- [x] Init Documentation
- [x] Add Material UI
- [x] Initial Render of Graph (to ensure library works as expected)
  - [x] Graph Renders but not yet accepting proper input
- Additional Graph Requiremnts
  - [x] Render based off default values
  - [x] Render based off of updated values
  - [x] Customize styling based off of node type
- [x] Add Text box to handle input of JSON
- [x] build documentation
  - [ ]include in-code as well (for future reference)

# Additional Items to be added should there be time

- [ ] Dark Mode switch
  - https://material-ui.com/components/switches/
- [ ] Testing
- [x] Custom Graph UI (using canvas)
  - [ ] Currently appears to be rendering lines multiple times
  - [ ] render items a bit more properly / relatively
  - [ ] match edge rendering to match alarm when necessary
- [ ] Error Handling
  - materialUI allows for error props to be passed to inputs
  - [ ] to be determined on button press
- [ ] Limit props spreading amoung components

# Current Issues

- Node v15 seems to have an issue with installing certain dependencies

  - Similar to what was found here [here.](https://github.com/npm/cli/issues/2000)
  - Switching to an older version seems to resolve the issue for now (used **14.13.1**)
  - Also re-installing **node_modules** from scratch worked as well
  - Will aim to test for [Fermium](https://nodejs.org/download/release/latest-fermium/) going forward
  - May just have had an issue with package-lock

- Editing the default input only works when parsing results in valid JSON. this prevents new items from being
  added in an incomplete state
  - has to do with how the event handling is done

# List of items needed before submitted

- [x] Init Documentation
- [ ] Add Material UI
- [ ] Initial Render of Graph (to ensure library works as expected)
- [ ] Add Text box to handle input of JSON
- [ ] Error Handling
  - materialUI allows for error props to be passed to inputs
- [ ] build documentation

# Additional Items to be added should the be time

- [ ] Dark Mode switch
  - https://material-ui.com/components/switches/
- [ ] Testing
- [ ] Custom Graph UI

# Current Issues

- Node v15 seems to have an issue with installing certain dependencies
  - Similar to what was found here [here.](https://github.com/npm/cli/issues/2000)
  - Switching to an older version seems to resolve the issue for now (used **14.13.1**)
  - Also re-installing **node_modules** from scratch worked as well
  - Will aim to test for [Fermium](https://nodejs.org/download/release/latest-fermium/) going forward

# Momento shared github actions

These github actions are for re-use across other repos.

There is currently no automation set up around the release of these actions. Github actions are
consumed by referencing a specific branch or tag in a repo; in our case, we are using a branch.
(Currently, the `gh-actions-v2` branch.)

To do a new "release" of the actions, for now, you need to manually push to the `gh-actions-v2` branch.
(We should set up an automated way to do this, with some safety checks.)

Also please note that for the README generator you need to run `npm package` before you commit/push! This
is the default setup provided in the template that github distributes for creating custom actions. For
more info see:

https://github.com/momentohq/standards-and-practices/tree/main/github-actions/oss-readme-template#publish-to-a-distribution-branch

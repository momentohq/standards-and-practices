## How to use

```
jobs:
  job1:
    name: Pr Build
    strategy:
      matrix:
        platform: [ ubuntu-latest ]
    runs-on: ${{ matrix.platform }}
    steps:
      - name: Shared Build Action
        uses: momentohq/standards-and-practices/github-actions/shared-build@gh-actions-v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

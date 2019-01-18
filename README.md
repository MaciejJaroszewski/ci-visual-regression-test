# Visual diff regression

## Sample repo for using modified ```loki``` to perform visual regression on CI server

* Requirements:
  - Docker

* Usage
  - Update or create screenshots
    - Run stroybook ```npm run storybook```
    - then ```npm run loki-update```
    - loki update screenshots according to stories in storybook
    - screeshots would be uploaded to ```.loki/reference``` and would be reference for further testing

  - Visual regression
    - By default there is precommit hook to perform loki visual test before commit, you can disable it by removing husky config in ```package.json```
    - To run loki test: ```npm run loki-local```. Loki uses docker image to perform visual regression (docker required). On first run loki donwloads docker image with chrome-headless.
    - If you want to run loki with remote, already run docker image with chrome-headless: ```run loki-local-remote-docker```. Loki will seek for docker image on localhost:9222
    - To performing visual regression on CI server use: ```npm run loki-ci```. Sample configuration for circleCI server is supplied in ```.circleci/config.yml``` file.

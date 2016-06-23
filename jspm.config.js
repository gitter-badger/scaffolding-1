SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "monterey-scaffolding/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "monterey-scaffolding": {
      "main": "monterey-scaffolding.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
    "monterey-scaffolding": "github:monenterey-framework/monterey-scaffolding@0.1.0"
  },
  packages: {
    "github:monenterey-framework/monterey-scaffolding@0.1.0": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2"
      }
    }
  }
});

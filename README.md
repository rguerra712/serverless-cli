# serverless-cli

A command line interface for extending the existing [serverless framework](https://github.com/serverless/serverless/) cli to more easily build/modify projects which use the serverless framework.

# Quick Start

1. First install and setup the [serverless framework](https://github.com/serverless/serverless/)
1. Next install this cli by running the command `npm install -g serverless-cli`
1. Next, use the serverless-cli to extend the abilities of the pre-existing [serverless framework](https://github.com/serverless/serverless/) cli

# Examples

### Easier initialization of a serverless project

```
serverless-cli create aws-nodejs -init # use template, then add package.json
serverless-cli plugins serverless-offline serverless-webpack # multiple plugins
```

# Setting up a new node.js CLI app
## Start a node.js project

 run 'npm init'

 ## Install commander

 a tool to help with CLI app development

 ## Create the start file

 Create a file named index.js in the program folder and add a shebang at the top to specify which interpreter should be used to run the script.

 To start the program just write a function that receives an argument and call it passing process.argv as the argunent.

```
#!/usr/bin/env node

function program(args)
{
  //Program logic
}

program(process.argv);
```

## Add *bin* to the package.json

```
"bin": {
    "my-node-cli": "./index.js"
},
"type": "module"
```

## Link the project globally
This step is important to automatic link the folder you are working in to the global node_modules folder, where the app will be executed first. If not linked the command will not find the app folder and it will be needed to be moved manually to the node_modules folder everytime.

```
npm link
```

## CLI app concepts

### Arguments
The process.argv returns an array of strings containing the command line arguments passed when the process was launched. It is ccomposed of:

[0] process.execPath

[1] Path of the file being executed

[2, 3, ...] Additional arguments
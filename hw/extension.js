// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// const path = require('path');
// const fs = require('fs-extra');
// const { parseParams } = require('./src/activeUtils');
const generateDocFromText = require('./src/reactDoc');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hw" is now active!');
  console.log({ context: context.logUri }, context.storageUri);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand('hw.helloWorld', async function (textEditor) {
  // 	// The code you place here will be executed every time your command is executed
  // 	// await parseParams(textEditor);
  // 	// Display a message box to the user
  // 	// vscode.window.showInformationMessage('Hello World from HW!');
  // });
  let textCommand = vscode.commands.registerTextEditorCommand(
    'hw',
    async function (textEditor) {
      // The code you place here will be executed every time your command is executed
      const text = textEditor.document.getText();
      const fileName = textEditor.document.fileName;
      // const targetPath = path.join(fileName, '../README.md');
      // fs.writeFileSync(targetPath, text);
      generateDocFromText(text, fileName);
      // await parseParams(textEditor);
    },
  );

  context.subscriptions.push(textCommand);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

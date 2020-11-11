const vscode = require('vscode');
function parseParams(textEditor) {
  console.log(textEditor)
  const {document,options,selection,viewColumn}=textEditor;
  const text=document.getText();
  const {active,anchor,end,isEmpty,start,reversed }=selection;
  console.log(text,options,selection,viewColumn);
  active.character=0;

  const snippetString = new vscode.SnippetString("hw111");
  textEditor.insertSnippet(snippetString,new vscode.Position(active.line-1,0,));

}

module.exports={
  parseParams
}


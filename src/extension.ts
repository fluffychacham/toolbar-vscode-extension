// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { InitToolbar } from "./toolbar/toolbar";
import {
  FoldAllButton,
  LastCursorButton,
  RestartTsButton,
  RestartVueButton,
  TerminalToggleButton,
  UnfoldAllButton,
} from "./toolbar/buttons";

// Singleton instance of the toolbar
const toolbarInstance = InitToolbar();

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Register all the buttons here and in order from left to right
  toolbarInstance.registerButton(new LastCursorButton());
  toolbarInstance.registerButton(new TerminalToggleButton());
  toolbarInstance.registerButton(new FoldAllButton());
  toolbarInstance.registerButton(new UnfoldAllButton());
  toolbarInstance.registerButton(new RestartTsButton());
  toolbarInstance.registerButton(new RestartVueButton());

  context.subscriptions.push(toolbarInstance);
  vscode.window.showInformationMessage("Toolbar Activated");
}

// This method is called when your extension is deactivated
export function deactivate() {
  toolbarInstance.dispose();
}

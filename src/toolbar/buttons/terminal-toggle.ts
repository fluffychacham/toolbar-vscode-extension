import { StatusBarAlignment, window } from "vscode";
import { Button } from "./button";
import { WORKBENCH_TERMINAL_TOGGLE } from "../config";

export class TerminalToggleButton extends Button {
    SetupButton() {
        this._statusBarItem = window.createStatusBarItem(
            StatusBarAlignment.Left
        );
        this._statusBarItem.text = "$(browser)";
        this._statusBarItem.tooltip = "Toggle Terminal";
        this._statusBarItem.command = WORKBENCH_TERMINAL_TOGGLE;
        this._statusBarItem.color = "yellow";
        this._statusBarItem.show();
    }
    dispose() {
        this._statusBarItem?.dispose();
    }
}

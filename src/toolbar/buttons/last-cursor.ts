import { StatusBarAlignment, window } from "vscode";
import { Button } from "./button";
import { WORKBENCH_NAVIGATE_LAST } from "../config";

export class LastCursorButton extends Button {
    public SetupButton(): void {
        this._statusBarItem = window.createStatusBarItem(
            StatusBarAlignment.Left
        );
        this._statusBarItem.text = "$(arrow-down)";
        this._statusBarItem.tooltip = "Go to last cursor location";
        this._statusBarItem.command = WORKBENCH_NAVIGATE_LAST;
        this._statusBarItem.color = "yellow";
        this._statusBarItem.show();
    }
    public dispose(): void {
        this._statusBarItem?.dispose();
    }
}

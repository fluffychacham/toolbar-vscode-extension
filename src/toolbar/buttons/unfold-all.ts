import { StatusBarAlignment, window } from "vscode";
import { Button } from "./button";
import { EDITOR_UNFOLD_ALL } from "../config";

export class UnfoldAllButton extends Button {
    SetupButton() {
        this._statusBarItem = window.createStatusBarItem(
            StatusBarAlignment.Left
        );
        this._statusBarItem.text = "$(diff-added)";
        this._statusBarItem.tooltip = "Unfold All Source Code";
        this._statusBarItem.command = EDITOR_UNFOLD_ALL;
        this._statusBarItem.color = "yellow";
        this._statusBarItem.show();
    }
    dispose() {
        this._statusBarItem?.dispose();
    }
}

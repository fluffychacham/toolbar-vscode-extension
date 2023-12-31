import { StatusBarAlignment, window } from "vscode";
import { Button } from "./button";
import { EDITOR_FOLD_ALL } from "../config";

export class FoldAllButton extends Button {
    public SetupButton(): void {
        this._statusBarItem = window.createStatusBarItem(
            StatusBarAlignment.Left
        );
        this._statusBarItem.text = "$(diff-removed)";
        this._statusBarItem.tooltip = "Fold all source code";
        this._statusBarItem.command = EDITOR_FOLD_ALL;
        this._statusBarItem.color = "yellow";
        this._statusBarItem.show();
    }
    public dispose(): void {
        this._statusBarItem?.dispose();
    }
}

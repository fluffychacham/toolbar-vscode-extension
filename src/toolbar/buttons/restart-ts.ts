import { StatusBarAlignment, window } from "vscode";
import { Button } from "./button";
import { TYPESCRIPT_RESTART_TS_SERVER } from "../config";

export class RestartTsButton extends Button {
    SetupButton() {
        this._statusBarItem = window.createStatusBarItem(
            StatusBarAlignment.Left
        );
        this._statusBarItem.text = "$(debug-restart)";
        this._statusBarItem.tooltip = "Restart TS Server";
        this._statusBarItem.command = TYPESCRIPT_RESTART_TS_SERVER;
        this._statusBarItem.color = "yellow";
        this._statusBarItem.show();
    }
    dispose() {
        this._statusBarItem?.dispose();
    }
}

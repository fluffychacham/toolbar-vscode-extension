import { window, StatusBarAlignment, extensions } from "vscode";
import { Button } from "./button";
import { VOLAR_EXTENSION_ID, VOLAR_RESTART_VUE } from "../config";

export class RestartVueButton extends Button {
    private _defaultStatusBarItem = window.createStatusBarItem(
        StatusBarAlignment.Left
    );

    SetupButton() {
        if (this.isVolarInstalled) {
            this.enabledButton();
        } else {
            this.disabledButton();
        }
    }
    dispose() {
        this._statusBarItem?.dispose();
    }

    private enabledButton() {
        this._statusBarItem = this._defaultStatusBarItem;
        this._statusBarItem.text = "$(debug-restart)";
        this._statusBarItem.tooltip = "Restart Vue";
        this._statusBarItem.command = VOLAR_RESTART_VUE;
        this._statusBarItem.color = "yellow";
        this._statusBarItem.show();
    }

    private disabledButton() {
        this._statusBarItem = this._defaultStatusBarItem;
        this._statusBarItem.text = "$(debug-restart)";
        this._statusBarItem.tooltip = "Restart Vue (Volar Not Installed)";
        this._statusBarItem.command = VOLAR_RESTART_VUE;
        this._statusBarItem.color = "grey";
        this._statusBarItem.show();
    }

    // Get check for volar extension
    private get isVolarInstalled(): boolean {
        return !!extensions.getExtension(VOLAR_EXTENSION_ID);
    }
}

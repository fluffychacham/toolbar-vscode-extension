import { StatusBarItem } from "vscode";

export interface IButton {
  SetupButton(): void;
  dispose(): void;
}

export abstract class Button implements IButton {
  protected _statusBarItem?: StatusBarItem;

  public abstract SetupButton(): void;

  public dispose() {
    if (this._statusBarItem) {
      this._statusBarItem.dispose();
    }
  }
}

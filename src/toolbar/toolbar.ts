import { IButton } from "./buttons";

// Initializes the toolbar
export function InitToolbar() {
  const toolbar = new Toolbar();
  console.log('"Toolbar" is now active!');
  return toolbar;
}

class Toolbar {
  private _buttons: IButton[] = [];

  public registerButton(button: IButton) {
    this._buttons.push(button);
    button.SetupButton();
  }

  public dispose() {
    this._buttons.forEach((button) => {
      button.dispose();
    });
  }
}

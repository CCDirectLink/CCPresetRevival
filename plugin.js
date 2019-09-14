export default class YourMod extends Plugin {
    prestart() {
		sc.TitleScreenButtonGui.inject({
			init() {
				this.parent();
				this._createButton("preset", 175, 6, () => {
					this.background.doStateTransition("DEFAULT");
					this.presetMenu.activate();
				}, "preset");
			}
		});
    }
}
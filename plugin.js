export default class CCPresetRevival extends Plugin {
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

		
		const oldNames = ["0-before-boss", "1-rhombus-dng-start", "2-continue-story", "3-autumn-rise", "4-apollo-duel", "5-before-bergen", "6-before-maroon", "7-fajro-temple", "8-autumns-fall"];
    
		//sc.savePreset.slots = [];

		const fs = require('fs');
		const files = fs.readdirSync('assets/data/save-presets/')
		for (const file of files) {
			const name = file.replace('.json', '');
			if (oldNames.includes(name)) {
				continue;
			}

			sc.savePreset.slots.push(new sc.SavePresetData(name));
		}
    }
}

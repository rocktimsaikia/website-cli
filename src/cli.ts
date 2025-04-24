#!/usr/bin/env node

import { stdout } from "node:process";
import chalk from "chalk";
import cliSelect from "cli-select";
import clear from "console-clear";
import figures from "figures";
import open from "open";

const ITEMS = [
	{ name: "GitHub", value: "http://github.com/rocktimsaikia" },
	{ name: "Website", value: "https://rocktimsaikia.dev" },
	{ name: "Discord", value: "https://discord.gg/M3d3TwNEka" },
	{ name: "Instagram", value: "https://instagram.com/rocktim.saikiaa" },
	{ name: "Twitch", value: "https://www.twitch.tv/rocktim_saikia" },
	{ name: "LinkedIn", value: "https://linkedin.com/in/rocktimsaikia" },
	{ name: "Resume", value: "https://rocktimsaikia.dev/rocktim_resume.pdf" },
];

async function main() {
	// Clear the console
	clear();

	stdout.write(
		`\nHello ${chalk.greenBright(figures.heart)}\nMy name is Rocktim Saikia.\nI am a software engineer who enjoys building projects, traveling, and staying fit.\n\n`,
	);

	stdout.write(chalk.dim("My socials and resume:\n"));

	let cachedIndex = 0;

	while (true) {
		const selected = await cliSelect({
			selected: chalk.blueBright(figures.pointer),
			unselected: " ",
			cleanup: false,
			defaultValue: cachedIndex,
			values: ITEMS.map((link) => link.name),
			valueRenderer: (value, selected) => {
				if (selected) {
					return chalk.blueBright(value);
				}

				return value;
			},
		});
		const index = selected.id as number;
		const targetItem = ITEMS[index];

		// Cache the index.
		cachedIndex = index;

		await open(targetItem.value);
	}
}

main().catch(() => {
	stdout.write(chalk.greenBright(`\nGoodbye ${figures.heart}\n`));
	process.exit(0);
});

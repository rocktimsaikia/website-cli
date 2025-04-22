#!/usr/bin/env node

import { stdout } from "node:process";
import chalk from "chalk";
import figures from "figures";
import inquirer from "inquirer";
import open from "open";

try {
	stdout.write(
		`\nHello ${figures.heart}\nMy name is Rocktim Saikia.\nI am a software engineer who enjoys building projects, traveling, and staying fit.\n\n`,
	);
	const answer = await inquirer.prompt([
		{
			theme: {
				helpMode: "never",
				prefix: "",
			},
			type: "list",
			name: "social",
			message: chalk.dim("Below are my socials and resume:"),
			loop: false,
			choices: [
				{ name: "GitHub", value: "http://github.com/rocktimsaikia" },
				{ name: "Website", value: "https://rocktimsaikia.dev" },
				{ name: "Discord", value: "https://discord.gg/M3d3TwNEka" },
				{ name: "Instagram", value: "https://instagram.com/rocktim.saikiaa" },
				{ name: "LinkedIn", value: "https://linkedin.com/in/rocktimsaikia" },
				{ name: "Resume", value: "https://rocktimsaikia.dev/rocktim_resume.pdf" },
			],
		},
	]);

	const selectedSocial = answer.social;
	await open(selectedSocial);
} catch (error) {
	if (String(error).includes("ExitPromptError")) {
		stdout.write("\nGoodbye!\n");
	}
}

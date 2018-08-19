#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");

commander
	.version(pkg.version)
	.usage("<command> [options]")
	.command("build", "build project")
	.command("dev", "dev")
	.parse(process.argv);

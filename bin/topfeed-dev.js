#!/usr/bin/env node
"use strict";
// @ts-check
const commander = require("commander");
const path = require("path");
const chalk = require("chalk");
const logger = require("../lib/logger");
const buildTool = require("../lib/webpack-build");
const CONSTANT = require("../lib/constant");
const defaultConfig = require("../lib/default.config");

commander
	.usage("[options]")
	.option(
		"-c, --config <path>",
		`set topfeed's config file [default: ./${
			CONSTANT.DEFAULT_CONFIG_FILE_NAME
		}]`
	)
	.option("-e, --env <env>", "development | production")
	.option("-t, --target <target>", "browser|node|ssr")
	.parse(process.argv);
const configFilePath = path.resolve(
	process.cwd(),
	commander.config || `./${CONSTANT.DEFAULT_CONFIG_FILE_NAME}`
);
const config = Object.assign(defaultConfig, require(configFilePath));
const buildEnv = commander.env || CONSTANT.DEFAULT_ENV;
const buildTarget = commander.target || CONSTANT.DEFAULT_TARGET;
process.env.NODE_ENV = buildEnv;
process.env.TARGET = buildTarget;

logger.log(
	`build env: ${chalk.blue(buildEnv)}, build target: ${chalk.blue(buildTarget)}`
);
buildTool.serve({
	config,
	buildEnv,
	buildTarget
});

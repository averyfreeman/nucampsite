#!/usr/bin/env bash
# ./bootstrap-source-installation.sh
# by Avery Freeman
# https://github.com/averyfreeman
#
################################################################
# References:
# bootstrap 4.6.0 changelog: https://blog.getbootstrap.com/2021/01/19/bootstrap-4.6.0/
#bootstrap 4.6.0 tooling installation and setup: https://getbootstrap.com/docs/4.6/getting-started/build-tools/#tooling-setup
# install tar.gz as npm package: https://docs.npmjs.com/cli/v6/commands/npm-install
################################################################
set -v

# show available versions of bootstrap and wait for user feedback
npm show bootstrap@* version
echo "Which version of bootstrap would you like to build? (Enter number only):"

read BOOTSTRAP_VERSION

# download bootstrap source code: 

wget https://github.com/twbs/bootstrap/archive/refs/tags/v"$BOOTSTRAP_VERSION".tar.gz

# install tar.gz as npm package: https://docs.npmjs.com/cli/v6/commands/npm-install
npm i v"$BOOTSTRAP_VERSION".tar.gz

# go to the installation folder and install the modules there
cd node_modules/bootstrap
npm i --save

# run the build script
npm run dist

# now you've got all the modules compiled, and you can customize and re-compile them if you want to 

# probably should test them just to make sure...
npm test
#!/usr/bin/env bash
set -x
sed -i "s|    document.write|    document.body.appendChild|g" node_modules/browser-sync/templates/script-tags.tmpl

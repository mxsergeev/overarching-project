#!/bin/bash

docker compose run --rm --entrypoint=npx e2e-tests playwright test
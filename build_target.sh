#!/bin/bash
# Simple bash file to compile a given build target
# Build targets should be a scss file in the build_targets dir
TARGET=$1
VERSION=$2

if [ -z "$TARGET" ]
then
      echo "No target was provided"
      exit 1
fi
if [ -z "$VERSION" ]
then
      echo "No version was provided"
      exit 1
fi

yarn sass -I . build_targets/$TARGET.scss dist/css/uu-bootstrap-$VERSION-$TARGET.css --no-source-map
yarn sass -I . build_targets/$TARGET.scss dist/css/uu-bootstrap-$VERSION-$TARGET.min.css -s compressed --no-source-map

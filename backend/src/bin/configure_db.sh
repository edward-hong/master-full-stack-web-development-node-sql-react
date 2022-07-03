#!/bin/bash

export PGPASSWORD=$(< ./src/bin/.secret)

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./src/bin/sql/generation.sql
psql -U node_user dragonstackdb < ./src/bin/sql/dragon.sql

echo "dragonstackdb configured"
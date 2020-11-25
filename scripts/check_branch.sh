#!/bin/bash -
#title          :check_branch.sh
#description    :Pre-push git hook
#author         :Timothy Merritt
#date           :2020-11-24
#version        :0.0.1
#usage          :./pre-push.sh
#notes          :
#bash_version   :5.0.18(1)-release
#============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

current_branch="git rev-parse --abrev-ref HEAD"

if [ "$current_branch" = "main" ]; then
  printf "%s\n" "Heeeyy..."
  sleep 1
  printf "%s\n" "${RED}" "You're in production!" "${NC}"
  sleep 1
  printf "%s\n" "You're better than this!"
  sleep 1
  printf "%s\n" "Seriously though, I'm not pushing this."
  sleep 1
  printf "%s\n" "Go open a pull request and think about what you've done."
  sleep 2
  exit 1
elif [ "$current_branch" = "dev" ]; then
  printf "%s\n" "${GREEN}" "Good job! You're in dev!"
  sleep 1
  printf "%s\n" "I will allow this." "${NC}"
  sleep 2
  exit 0
fi

#!/bin/bash -
#title          :validate_css.sh
#description    :Check that CSS file exists and is linked to in pages
#author         :Timothy Merritt
#date           :2020-11-16
#version        :1.0.0
#usage          :./validate_css.sh
#notes          :
#bash_version   :5.0.18(1)-release
#============================================================================
# NOTE: This script is symlinked to the .git/hooks/pre-push hook, and any
# relative paths must reflect that origin point. The script also uses the
# 'sleep' command, which is purely for my own taste seeing the output more
# incrementally.

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

STYLESHEET=css/main.css

COMMENTED='<!-- <link rel="stylesheet" href="/css/main.css" /> -->'
LINK='<link rel="stylesheet" href="/css/main.css" />'
PAGE1=index.html
PAGE2=pages/about.html
PAGE3=pages/work.html
PAGE4=pages/contact.html
ALL_PAGES=**/*.html

echo -e "Validating css stylesheets..."
sleep 1

if [[ -f "$STYLESHEET" ]]; then
  echo -en "${GREEN}✔${NC} " && echo -en "$STYLESHEET" | grep -o "main.css" | tr -d "\012\015" && echo " stylesheet found"
  sleep .15
else
  echo -e "${RED}𐄂${NC} Stylesheet: $STYLESHEET not found"
fi

if grep -q "$LINK" "$PAGE1"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked to Index Page"
  sleep .15
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in Index Page" && exit 1
fi

if grep -q "$LINK" "$PAGE2"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked to About Page"
  sleep .15
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in About Page" && exit 1
fi

if grep -q "$LINK" "$PAGE3"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked to Work Page"
  sleep .15
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in Work Page" && exit 1
fi

if grep -q "$LINK" "$PAGE4"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked to Contact Page"
  sleep .15
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in Contact Page" && exit 1
fi

if grep -qr "$LINK" **/*.html; then
  echo -e "${GREEN}✔${NC} All stylsheet links found"
  sleep .15
else
  echo -e "${RED}𐄂${NC} Not all stylsheet links were found" && exit 1
fi

if grep -qr "$COMMENTED" **/*.html; then
  echo -e "${RED}WARNING${NC}: Stylesheet is commented out in the following places"
  grep --color=always -rn "$COMMENTED" **/*.html
  exit 1
fi

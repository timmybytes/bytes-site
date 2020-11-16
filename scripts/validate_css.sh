#!/bin/bash -
#title          :validate_css.sh
#description    :Check that CSS file exists and is linked to
#author         :Timothy Merritt
#date           :2020-11-16
#version        :1.0.0
#usage          :./validate_css.sh
#notes          :
#bash_version   :5.0.18(1)-release
#============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

STYLESHEET=../css/main.css
LINK='<link rel="stylesheet" href="/css/main.css" />'
PAGE1=../index.html
PAGE2=../pages/about.html
PAGE3=../pages/work.html
PAGE4=../pages/contact.html

if [[ -f "$STYLESHEET" ]]; then
  echo -e "${GREEN}✔${NC} Stylesheet: $STYLESHEET found"
else
  echo -e "${RED}𐄂${NC} Stylesheet: $STYLESHEET not found"
fi

if grep -q "$LINK" "$PAGE1"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked in $PAGE1"
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in $PAGE1"
fi
if grep -q "$LINK" "$PAGE2"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked in $PAGE2"
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in $PAGE2"
fi
if grep -q "$LINK" "$PAGE3"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked in $PAGE3"
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in $PAGE3"
fi
if grep -q "$LINK" "$PAGE4"; then
  echo -e "${GREEN}✔${NC} Stylesheet linked in $PAGE4"
else
  echo -e "${RED}𐄂${NC} Stylesheet not linked in $PAGE4"
fi

"use strict";

import('./module/darkmode.js').then(({darkmodeSelect}) => {
    darkmodeSelect();
});

import('./module/bookmark.js').then(({bookmarked}) => {
    bookmarked();
});

import('./module/addEntries.js').then(({addEntries}) => {
    addEntries();
});
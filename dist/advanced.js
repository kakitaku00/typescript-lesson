"use strict";
var _a, _b;
const quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    else {
        return "";
    }
}
function describeWorkerProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if (typeof nomadWorker === "object") {
        if ("role" in nomadWorker) {
            nomadWorker.role;
        }
    }
}
const input = document.getElementById("input");
const designer = {
    name: "Quill",
    role: "afa",
};
const download = {
    id: 1,
};
console.log((_b = (_a = download.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);

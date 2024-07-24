function criticalCode() {
    //throw "throwing an exception";
    console.log(ex)
}

function logError(theException) {
    console.log(theException);
}

console.log("\n********Try...Catch...Finally********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("Continuing execution");

try {
    throw "An exception that is thrown";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********Try...Catch...Finally********\n");

try {
    criticalCode();
}
catch (ex) {
    console.log("Got an error");
    logError(ex);
}
finally {
    console.log("Code that always will run");
}
function Hello() {
    console.log("Hello World!");
}

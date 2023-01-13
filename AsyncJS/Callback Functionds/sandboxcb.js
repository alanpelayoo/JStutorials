class Dialog {
    constructor() {
        this.callbackFunctions = []
    }

    close() {
        console.log("Closing")
        this.callbackFunctions.map((fcn) => {
            fcn()
        })
    }

    onClose(callbackFunction) {
        this.callbackFunctions.push(callbackFunction);
    }
}
const dialog = new Dialog();

dialog.onClose(function refresh() {
    // refresh data on the page to reflect state 
    // changes made inside of the dialog
    console.log("refresh")
});
dialog.onClose(function enter() {
    // refresh data on the page to reflect state 
    // changes made inside of the dialog
    console.log("enter")
});
dialog.close()
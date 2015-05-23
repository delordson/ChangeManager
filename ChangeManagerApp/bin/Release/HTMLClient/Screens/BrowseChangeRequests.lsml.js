/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseChangeRequests.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditChangeRequests"]) {
        screen.findContentItem("AddChangeRequest").isEnabled = true;
    }
    else {
        screen.findContentItem("AddChangeRequest").isEnabled = false;
    }
};
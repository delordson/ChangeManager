/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployee.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditEmployees"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
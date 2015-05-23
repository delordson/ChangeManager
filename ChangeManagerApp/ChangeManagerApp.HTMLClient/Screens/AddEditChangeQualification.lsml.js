/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditChangeQualification.created = function (screen) {
    var reference;
    var title;

    if (screen.ChangeQualification.ChangeRequest.Reference !== undefined) {
        reference = screen.ChangeQualification.ChangeRequest.Reference;
        title = screen.ChangeQualification.ChangeRequest.ChangeRequestTitle;
        screen.details.displayName = "Change Qualification for - " + reference + ": " + title;
    }
    else {
        screen.details.displayName = "Add new Change Qualification for: " + screen.ChangeQualification.ChangeRequest.Reference;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditChangeQualifications"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ChangeQualificationActions").isReadOnly = false;
        screen.findContentItem("AddChangeQualificationAction").isEnabled = true;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ChangeQualificationActions").isReadOnly = true;
        screen.findContentItem("AddChangeQualificationAction").isEnabled = false;
    }
};
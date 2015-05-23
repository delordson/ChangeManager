/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditChangeQualificationAction.created = function (screen) {
    var type;
    var description;

    if (screen.ChangeQualificationAction.ChangeQualification.QualificationType !== undefined) {
        type = screen.ChangeQualificationAction.ChangeQualification.QualificationType;
        description = screen.ChangeQualificationAction.ChangeQualification.Description;
        screen.details.displayName = "Action for - " + type + ": " + description;
    }
    else {
        screen.details.displayName = "Add new Action for: " + screen.ChangeQualificationAction.ChangeQualification.QualificationType;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditChangeQualificationActions"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};
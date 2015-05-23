/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditChangeRequest.created = function (screen) {
    if (myapp.permissions["LightSwitchApplication:CanEditChangeRequests"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ChangePlanTab").isReadOnly = false;
        screen.findContentItem("ChangeQualificationsTab").isReadOnly = false;
        screen.findContentItem("AssociatedRisksTab").isReadOnly = false;
        screen.findContentItem("AddChangeQualification").isEnabled = true;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ChangePlanTab").isReadOnly = true;
        screen.findContentItem("ChangeQualificationsTab").isReadOnly = true;
        screen.findContentItem("AssociatedRisksTab").isReadOnly = true;
        screen.findContentItem("AddChangeQualification").isEnabled = false;
    }
};
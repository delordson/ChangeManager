/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssociatedRisk.created = function (screen) {
    var reference;
    var title;

    if (screen.AssociatedRisk.ChangeRequest.Reference !== undefined) {
        reference = screen.AssociatedRisk.ChangeRequest.Reference;
        title = screen.AssociatedRisk.ChangeRequest.ChangeRequestTitle;
        screen.details.displayName = "Risk for Change Request - " + reference + ": " + title;
    }
    else {
        screen.details.displayName = "Add new Risk for Change Request: " + screen.AssociatedRisk.ChangeRequest.Reference;
    }

    screen.AssociatedRisk.OverallRisk = screen.AssociatedRisk.RiskLikelihood * screen.AssociatedRisk.RiskImpact;
    
    function onRiskChange() {
        screen.AssociatedRisk.OverallRisk = screen.AssociatedRisk.RiskLikelihood * screen.AssociatedRisk.RiskImpact;
    }

    screen.AssociatedRisk.addChangeListener("RiskLikelihood", onRiskChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.AssociatedRisk.removeChangeListener("RiskLikelihood", onRiskChange)
    });

    screen.AssociatedRisk.addChangeListener("RiskImpact", onRiskChange);
    screen.details.rootContentItem
    .handleViewDispose(function () {
        screen.AssociatedRisk.removeChangeListener("RiskImpact", onRiskChange)
    });

    if (myapp.permissions["LightSwitchApplication:CanEditAssociatedRisks"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ControlMeasuresGroup").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ControlMeasuresGroup").isReadOnly = true;
    }

};
myapp.AddEditAssociatedRisk.OverallRisk_postRender = function (element, contentItem) {
    $(element).css("text-align", "left");
    $(element).css("font-size", "72px");
    $(element).css("font-weight", "bold");
    $(element).css("font-family", "'Segoe Light', 'Segoe UI Light', 'Frutiger', 'Helvetica Neue', Helvetica, Arial, sans - serif");
    if (contentItem.value > 15) {
        $(element).css("color", "red");
    }
    else {
        $(element).css("color", "green");
    }

    contentItem.addChangeListener(null, function () {
        if (contentItem.value > 15) {
            $(element).css("color", "red");
        }
        else {
            $(element).css("color", "green");
        }
    });
};
/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Home.AllChangeRequests_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/ChangeRequests.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyChangeRequests_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MyChanges.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyChangeQualifications_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MyChangeQualifications.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyChangeActions_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Actions.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.MyAssignedRisks_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Risks.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.Employees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Employees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.ChangeRequestStatuses_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/Statuses.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '250px',
        'height': '250px'
    });
};
myapp.Home.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
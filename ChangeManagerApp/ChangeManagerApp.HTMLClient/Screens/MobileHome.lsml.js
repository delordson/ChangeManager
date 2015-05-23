/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.MobileHome.ShowBrowseChangeRequests_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileChangeRequests.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShowBrowseMyChangeRequests_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileMyChanges.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShowBrowseMyChangeQualifications_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileMyChangeQualifications.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShowBrowseMyChangeQualificationActions_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileActions.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShowBrowseMyAssignedRisks_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileRisks.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShowBrowseEmployees_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileEmployees.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.ShowBrowseChangeRequestStatuses_postRender = function (element, contentItem) {
    $(element).find('a').css({
        'background-image': 'url(Content/Images/MobileStatuses.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'width': '90px',
        'height': '90px'
    });
};
myapp.MobileHome.created = function (screen) {
    $.getJSON("../UserPermissions/UserPermissions/", function (data) {
        myapp.permissions = data;
    });
};
/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAssociatedRisk.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssociatedRisk
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AddEditAssociatedRisk,
            value: lightSwitchApplication.AddEditAssociatedRisk
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AddEditAssociatedRisk,
            value: lightSwitchApplication.AssociatedRisk
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: lightSwitchApplication.AssociatedRisk
        },
        RiskDescription: {
            _$class: msls.ContentItem,
            _$name: "RiskDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: String
        },
        RiskLikelihood: {
            _$class: msls.ContentItem,
            _$name: "RiskLikelihood",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        RiskImpact: {
            _$class: msls.ContentItem,
            _$name: "RiskImpact",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        OverallRisk: {
            _$class: msls.ContentItem,
            _$name: "OverallRisk",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: lightSwitchApplication.AssociatedRisk
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.Employee,
            value: String
        },
        TargetDate: {
            _$class: msls.ContentItem,
            _$name: "TargetDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AssociatedRisk,
            value: Date
        },
        ControlMeasuresGroup: {
            _$class: msls.ContentItem,
            _$name: "ControlMeasuresGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AddEditAssociatedRisk,
            value: lightSwitchApplication.AddEditAssociatedRisk
        },
        ControlMeasures: {
            _$class: msls.ContentItem,
            _$name: "ControlMeasures",
            _$parentName: "ControlMeasuresGroup",
            screen: lightSwitchApplication.AddEditAssociatedRisk,
            data: lightSwitchApplication.AddEditAssociatedRisk,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssociatedRisk
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssociatedRisk, {
        /// <field>
        /// Called when a new AddEditAssociatedRisk screen is created.
        /// <br/>created(msls.application.AddEditAssociatedRisk screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssociatedRisk],
        /// <field>
        /// Called before changes on an active AddEditAssociatedRisk screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssociatedRisk screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssociatedRisk],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("left"); }],
        /// <field>
        /// Called after the RiskDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("RiskDescription"); }],
        /// <field>
        /// Called after the RiskLikelihood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskLikelihood_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("RiskLikelihood"); }],
        /// <field>
        /// Called after the RiskImpact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskImpact_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("RiskImpact"); }],
        /// <field>
        /// Called after the OverallRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OverallRisk_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("OverallRisk"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("right"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the TargetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("TargetDate"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the ControlMeasuresGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlMeasuresGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("ControlMeasuresGroup"); }],
        /// <field>
        /// Called after the ControlMeasures content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlMeasures_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssociatedRisk().findContentItem("ControlMeasures"); }]
    });

    lightSwitchApplication.AddEditChangeQualification.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeQualification
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.AddEditChangeQualification,
            value: lightSwitchApplication.AddEditChangeQualification
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.AddEditChangeQualification,
            value: lightSwitchApplication.ChangeQualification
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.ChangeQualification
        },
        QualificationType: {
            _$class: msls.ContentItem,
            _$name: "QualificationType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.ChangeQualification
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        DateClosed: {
            _$class: msls.ContentItem,
            _$name: "DateClosed",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        ChangeQualificationActions: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualificationActions",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.AddEditChangeQualification,
            value: lightSwitchApplication.AddEditChangeQualification
        },
        ChangeQualificationActions1: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualificationActions1",
            _$parentName: "ChangeQualificationActions",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.AddEditChangeQualification,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditChangeQualification,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeQualificationAction
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ChangeQualificationActions1",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: lightSwitchApplication.ChangeQualificationAction
        },
        ActionRequired: {
            _$class: msls.ContentItem,
            _$name: "ActionRequired",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        ActionAssignedTo: {
            _$class: msls.ContentItem,
            _$name: "ActionAssignedTo",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "ActionAssignedTo",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "ActionAssignedTo",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateActionAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateActionAssigned",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        TargetActionCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetActionCompletionDate",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        DateActionCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateActionCompleted",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeQualification,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeQualification
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditChangeQualification, {
        /// <field>
        /// Called when a new AddEditChangeQualification screen is created.
        /// <br/>created(msls.application.AddEditChangeQualification screen)
        /// </field>
        created: [lightSwitchApplication.AddEditChangeQualification],
        /// <field>
        /// Called before changes on an active AddEditChangeQualification screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditChangeQualification screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditChangeQualification],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("left"); }],
        /// <field>
        /// Called after the QualificationType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualificationType_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("QualificationType"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("right"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the DateClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("DateClosed"); }],
        /// <field>
        /// Called after the ChangeQualificationActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualificationActions_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("ChangeQualificationActions"); }],
        /// <field>
        /// Called after the ChangeQualificationActions1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualificationActions1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("ChangeQualificationActions1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the ActionRequired content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionRequired_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("ActionRequired"); }],
        /// <field>
        /// Called after the ActionAssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionAssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("ActionAssignedTo"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DateActionAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("DateActionAssigned"); }],
        /// <field>
        /// Called after the TargetActionCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetActionCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("TargetActionCompletionDate"); }],
        /// <field>
        /// Called after the DateActionCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualification().findContentItem("DateActionCompleted"); }]
    });

    lightSwitchApplication.AddEditChangeQualificationAction.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeQualificationAction
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.AddEditChangeQualificationAction,
            value: lightSwitchApplication.AddEditChangeQualificationAction
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.AddEditChangeQualificationAction,
            value: lightSwitchApplication.ChangeQualificationAction
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: lightSwitchApplication.ChangeQualificationAction
        },
        DateActionAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateActionAssigned",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        ActionRequired: {
            _$class: msls.ContentItem,
            _$name: "ActionRequired",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        ActionAssignedTo: {
            _$class: msls.ContentItem,
            _$name: "ActionAssignedTo",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: lightSwitchApplication.Employee
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ActionAssignedTo",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.Employee,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: lightSwitchApplication.ChangeQualificationAction
        },
        TargetActionCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetActionCompletionDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        ActionTaken: {
            _$class: msls.ContentItem,
            _$name: "ActionTaken",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        DateActionCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateActionCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeQualificationAction,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeQualificationAction
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditChangeQualificationAction, {
        /// <field>
        /// Called when a new AddEditChangeQualificationAction screen is created.
        /// <br/>created(msls.application.AddEditChangeQualificationAction screen)
        /// </field>
        created: [lightSwitchApplication.AddEditChangeQualificationAction],
        /// <field>
        /// Called before changes on an active AddEditChangeQualificationAction screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditChangeQualificationAction screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditChangeQualificationAction],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("left"); }],
        /// <field>
        /// Called after the DateActionAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("DateActionAssigned"); }],
        /// <field>
        /// Called after the ActionRequired content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionRequired_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("ActionRequired"); }],
        /// <field>
        /// Called after the ActionAssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionAssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("ActionAssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("right"); }],
        /// <field>
        /// Called after the TargetActionCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetActionCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("TargetActionCompletionDate"); }],
        /// <field>
        /// Called after the ActionTaken content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTaken_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("ActionTaken"); }],
        /// <field>
        /// Called after the DateActionCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeQualificationAction().findContentItem("DateActionCompleted"); }]
    });

    lightSwitchApplication.AddEditChangeRequest.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequest
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.AddEditChangeRequest
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestTitle",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestDescription: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        RaisedBy: {
            _$class: msls.ContentItem,
            _$name: "RaisedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RaisedBy",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName2: {
            _$class: msls.ContentItem,
            _$name: "FirstName2",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName2: {
            _$class: msls.ContentItem,
            _$name: "LastName2",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ChangeRequestStatus",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequestStatus,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        TargetClosureDate: {
            _$class: msls.ContentItem,
            _$name: "TargetClosureDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        ChangeOwner: {
            _$class: msls.ContentItem,
            _$name: "ChangeOwner",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.Employee
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ChangeOwner",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName4: {
            _$class: msls.ContentItem,
            _$name: "FirstName4",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName4: {
            _$class: msls.ContentItem,
            _$name: "LastName4",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateApproved: {
            _$class: msls.ContentItem,
            _$name: "DateApproved",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        DateClosed: {
            _$class: msls.ContentItem,
            _$name: "DateClosed",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        ClosedBy: {
            _$class: msls.ContentItem,
            _$name: "ClosedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.Employee
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "ClosedBy",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName3: {
            _$class: msls.ContentItem,
            _$name: "FirstName3",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName3: {
            _$class: msls.ContentItem,
            _$name: "LastName3",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        ChangePlanTab: {
            _$class: msls.ContentItem,
            _$name: "ChangePlanTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.AddEditChangeRequest
        },
        ChangeRequestPlan: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestPlan",
            _$parentName: "ChangePlanTab",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: String
        },
        ChangeQualificationsTab: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualificationsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.AddEditChangeRequest
        },
        ChangeQualifications1: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualifications1",
            _$parentName: "ChangeQualificationsTab",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditChangeRequest,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeQualification
                }
            }
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "ChangeQualifications1",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.ChangeQualification
        },
        QualificationType: {
            _$class: msls.ContentItem,
            _$name: "QualificationType",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: String
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        DateClosed1: {
            _$class: msls.ContentItem,
            _$name: "DateClosed1",
            _$parentName: "RowTemplate4",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        AssociatedRisksTab: {
            _$class: msls.ContentItem,
            _$name: "AssociatedRisksTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: lightSwitchApplication.AddEditChangeRequest
        },
        AssociatedRisks1: {
            _$class: msls.ContentItem,
            _$name: "AssociatedRisks1",
            _$parentName: "AssociatedRisksTab",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AddEditChangeRequest,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditChangeRequest,
                _$entry: {
                    elementType: lightSwitchApplication.AssociatedRisk
                }
            }
        },
        RowTemplate6: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate6",
            _$parentName: "AssociatedRisks1",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AssociatedRisk,
            value: lightSwitchApplication.AssociatedRisk
        },
        RiskDescription: {
            _$class: msls.ContentItem,
            _$name: "RiskDescription",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AssociatedRisk,
            value: String
        },
        DateRaised1: {
            _$class: msls.ContentItem,
            _$name: "DateRaised1",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AssociatedRisk,
            value: Date
        },
        RiskLikelihood: {
            _$class: msls.ContentItem,
            _$name: "RiskLikelihood",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        RiskImpact: {
            _$class: msls.ContentItem,
            _$name: "RiskImpact",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        AssignedTo1: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo1",
            _$parentName: "RowTemplate6",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.AssociatedRisk,
            value: lightSwitchApplication.Employee
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "AssignedTo1",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "AssignedTo1",
            screen: lightSwitchApplication.AddEditChangeRequest,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequest
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditChangeRequest, {
        /// <field>
        /// Called when a new AddEditChangeRequest screen is created.
        /// <br/>created(msls.application.AddEditChangeRequest screen)
        /// </field>
        created: [lightSwitchApplication.AddEditChangeRequest],
        /// <field>
        /// Called before changes on an active AddEditChangeRequest screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditChangeRequest screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditChangeRequest],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("left"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestTitle"); }],
        /// <field>
        /// Called after the ChangeRequestDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestDescription"); }],
        /// <field>
        /// Called after the RaisedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RaisedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RaisedBy"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the FirstName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("FirstName2"); }],
        /// <field>
        /// Called after the LastName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName2_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("LastName2"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("right"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the TargetClosureDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetClosureDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("TargetClosureDate"); }],
        /// <field>
        /// Called after the ChangeOwner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeOwner_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeOwner"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the FirstName4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName4_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("FirstName4"); }],
        /// <field>
        /// Called after the LastName4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName4_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("LastName4"); }],
        /// <field>
        /// Called after the DateApproved content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateApproved_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateApproved"); }],
        /// <field>
        /// Called after the DateClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateClosed"); }],
        /// <field>
        /// Called after the ClosedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClosedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ClosedBy"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the FirstName3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName3_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("FirstName3"); }],
        /// <field>
        /// Called after the LastName3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName3_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("LastName3"); }],
        /// <field>
        /// Called after the ChangePlanTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangePlanTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangePlanTab"); }],
        /// <field>
        /// Called after the ChangeRequestPlan content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestPlan_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeRequestPlan"); }],
        /// <field>
        /// Called after the ChangeQualificationsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualificationsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeQualificationsTab"); }],
        /// <field>
        /// Called after the ChangeQualifications1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualifications1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("ChangeQualifications1"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the QualificationType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualificationType_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("QualificationType"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("Description"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the DateClosed1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateClosed1"); }],
        /// <field>
        /// Called after the AssociatedRisksTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssociatedRisksTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("AssociatedRisksTab"); }],
        /// <field>
        /// Called after the AssociatedRisks1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssociatedRisks1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("AssociatedRisks1"); }],
        /// <field>
        /// Called after the RowTemplate6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate6_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RowTemplate6"); }],
        /// <field>
        /// Called after the RiskDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RiskDescription"); }],
        /// <field>
        /// Called after the DateRaised1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("DateRaised1"); }],
        /// <field>
        /// Called after the RiskLikelihood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskLikelihood_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RiskLikelihood"); }],
        /// <field>
        /// Called after the RiskImpact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskImpact_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("RiskImpact"); }],
        /// <field>
        /// Called after the AssignedTo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("AssignedTo1"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequest().findContentItem("FirstName1"); }]
    });

    lightSwitchApplication.AddEditChangeRequestStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequestStatus
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditChangeRequestStatus,
            data: lightSwitchApplication.AddEditChangeRequestStatus,
            value: lightSwitchApplication.AddEditChangeRequestStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditChangeRequestStatus,
            data: lightSwitchApplication.AddEditChangeRequestStatus,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditChangeRequestStatus,
            data: lightSwitchApplication.ChangeRequestStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditChangeRequestStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditChangeRequestStatus, {
        /// <field>
        /// Called when a new AddEditChangeRequestStatus screen is created.
        /// <br/>created(msls.application.AddEditChangeRequestStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditChangeRequestStatus],
        /// <field>
        /// Called before changes on an active AddEditChangeRequestStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditChangeRequestStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditChangeRequestStatus],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequestStatus().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequestStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditChangeRequestStatus().findContentItem("Status"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("left"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseChangeRequests.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseChangeRequests
        },
        ChangeRequestList: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.BrowseChangeRequests,
            value: lightSwitchApplication.BrowseChangeRequests
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ChangeRequestList",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.BrowseChangeRequests,
            value: String
        },
        ChangeRequest: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequest",
            _$parentName: "ChangeRequestList",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.BrowseChangeRequests,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseChangeRequests,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeRequest
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ChangeRequest",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        TargetClosureDate: {
            _$class: msls.ContentItem,
            _$name: "TargetClosureDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        ChangeOwner: {
            _$class: msls.ContentItem,
            _$name: "ChangeOwner",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "ChangeOwner",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "ChangeOwner",
            screen: lightSwitchApplication.BrowseChangeRequests,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseChangeRequests
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseChangeRequests, {
        /// <field>
        /// Called when a new BrowseChangeRequests screen is created.
        /// <br/>created(msls.application.BrowseChangeRequests screen)
        /// </field>
        created: [lightSwitchApplication.BrowseChangeRequests],
        /// <field>
        /// Called before changes on an active BrowseChangeRequests screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseChangeRequests screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseChangeRequests],
        /// <field>
        /// Called after the ChangeRequestList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestList_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("ChangeRequestList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("Search"); }],
        /// <field>
        /// Called after the ChangeRequest content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequest_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("ChangeRequest"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("ChangeRequestTitle"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the TargetClosureDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetClosureDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("TargetClosureDate"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the ChangeOwner content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeOwner_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("ChangeOwner"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequests().findContentItem("FirstName"); }]
    });

    lightSwitchApplication.BrowseChangeRequestStatuses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses
        },
        ChangeRequestStatusList: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.BrowseChangeRequestStatuses,
            value: lightSwitchApplication.BrowseChangeRequestStatuses
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "ChangeRequestStatusList",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.BrowseChangeRequestStatuses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseChangeRequestStatuses,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeRequestStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ChangeRequestStatus",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses,
            data: lightSwitchApplication.ChangeRequestStatus,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseChangeRequestStatuses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseChangeRequestStatuses, {
        /// <field>
        /// Called when a new BrowseChangeRequestStatuses screen is created.
        /// <br/>created(msls.application.BrowseChangeRequestStatuses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseChangeRequestStatuses],
        /// <field>
        /// Called before changes on an active BrowseChangeRequestStatuses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseChangeRequestStatuses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseChangeRequestStatuses],
        /// <field>
        /// Called after the ChangeRequestStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("ChangeRequestStatusList"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseChangeRequestStatuses().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        searchParameter: {
            _$class: msls.ContentItem,
            _$name: "searchParameter",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the searchParameter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        searchParameter_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("searchParameter"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseMyAssignedRisks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAssignedRisks
        },
        AssociatedRiskList: {
            _$class: msls.ContentItem,
            _$name: "AssociatedRiskList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.BrowseMyAssignedRisks,
            value: lightSwitchApplication.BrowseMyAssignedRisks
        },
        searchParameter: {
            _$class: msls.ContentItem,
            _$name: "searchParameter",
            _$parentName: "AssociatedRiskList",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.BrowseMyAssignedRisks,
            value: String
        },
        AssociatedRisk: {
            _$class: msls.ContentItem,
            _$name: "AssociatedRisk",
            _$parentName: "AssociatedRiskList",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.BrowseMyAssignedRisks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyAssignedRisks,
                _$entry: {
                    elementType: lightSwitchApplication.AssociatedRisk
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssociatedRisk",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.AssociatedRisk,
            value: lightSwitchApplication.AssociatedRisk
        },
        ChangeRequest_Reference: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequest_Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.AssociatedRisk,
            value: String
        },
        ChangeRequest_ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequest_ChangeRequestTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.AssociatedRisk,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.AssociatedRisk,
            value: Date
        },
        RiskLikelihood: {
            _$class: msls.ContentItem,
            _$name: "RiskLikelihood",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        RiskImpact: {
            _$class: msls.ContentItem,
            _$name: "RiskImpact",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedRisks,
            data: lightSwitchApplication.AssociatedRisk,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAssignedRisks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyAssignedRisks, {
        /// <field>
        /// Called when a new BrowseMyAssignedRisks screen is created.
        /// <br/>created(msls.application.BrowseMyAssignedRisks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyAssignedRisks],
        /// <field>
        /// Called before changes on an active BrowseMyAssignedRisks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyAssignedRisks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyAssignedRisks],
        /// <field>
        /// Called after the AssociatedRiskList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssociatedRiskList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("AssociatedRiskList"); }],
        /// <field>
        /// Called after the searchParameter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        searchParameter_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("searchParameter"); }],
        /// <field>
        /// Called after the AssociatedRisk content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssociatedRisk_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("AssociatedRisk"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ChangeRequest_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequest_Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("ChangeRequest_Reference"); }],
        /// <field>
        /// Called after the ChangeRequest_ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequest_ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("ChangeRequest_ChangeRequestTitle"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the RiskLikelihood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskLikelihood_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("RiskLikelihood"); }],
        /// <field>
        /// Called after the RiskImpact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskImpact_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedRisks().findContentItem("RiskImpact"); }]
    });

    lightSwitchApplication.BrowseMyChangeQualificationActions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions
        },
        ChangeQualificationActionList: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualificationActionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.BrowseMyChangeQualificationActions,
            value: lightSwitchApplication.BrowseMyChangeQualificationActions
        },
        searchParameter: {
            _$class: msls.ContentItem,
            _$name: "searchParameter",
            _$parentName: "ChangeQualificationActionList",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.BrowseMyChangeQualificationActions,
            value: String
        },
        ChangeQualificationAction: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualificationAction",
            _$parentName: "ChangeQualificationActionList",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.BrowseMyChangeQualificationActions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeQualificationAction
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ChangeQualificationAction",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: lightSwitchApplication.ChangeQualificationAction
        },
        ChangeQualification_ChangeRequest_Reference: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualification_ChangeRequest_Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        ChangeQualification_ChangeRequest_ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualification_ChangeRequest_ChangeRequestTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        ChangeQualification_QualificationType: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualification_QualificationType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        ActionRequired: {
            _$class: msls.ContentItem,
            _$name: "ActionRequired",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: String
        },
        DateActionAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateActionAssigned",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        TargetActionCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetActionCompletionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        DateActionCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateActionCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions,
            data: lightSwitchApplication.ChangeQualificationAction,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyChangeQualificationActions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyChangeQualificationActions, {
        /// <field>
        /// Called when a new BrowseMyChangeQualificationActions screen is created.
        /// <br/>created(msls.application.BrowseMyChangeQualificationActions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyChangeQualificationActions],
        /// <field>
        /// Called before changes on an active BrowseMyChangeQualificationActions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyChangeQualificationActions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyChangeQualificationActions],
        /// <field>
        /// Called after the ChangeQualificationActionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualificationActionList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("ChangeQualificationActionList"); }],
        /// <field>
        /// Called after the searchParameter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        searchParameter_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("searchParameter"); }],
        /// <field>
        /// Called after the ChangeQualificationAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualificationAction_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("ChangeQualificationAction"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ChangeQualification_ChangeRequest_Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualification_ChangeRequest_Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("ChangeQualification_ChangeRequest_Reference"); }],
        /// <field>
        /// Called after the ChangeQualification_ChangeRequest_ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualification_ChangeRequest_ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("ChangeQualification_ChangeRequest_ChangeRequestTitle"); }],
        /// <field>
        /// Called after the ChangeQualification_QualificationType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualification_QualificationType_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("ChangeQualification_QualificationType"); }],
        /// <field>
        /// Called after the ActionRequired content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionRequired_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("ActionRequired"); }],
        /// <field>
        /// Called after the DateActionAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionAssigned_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("DateActionAssigned"); }],
        /// <field>
        /// Called after the TargetActionCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetActionCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("TargetActionCompletionDate"); }],
        /// <field>
        /// Called after the DateActionCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualificationActions().findContentItem("DateActionCompleted"); }]
    });

    lightSwitchApplication.BrowseMyChangeQualifications.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyChangeQualifications
        },
        ChangeQualificationList: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualificationList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.BrowseMyChangeQualifications,
            value: lightSwitchApplication.BrowseMyChangeQualifications
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ChangeQualificationList",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.BrowseMyChangeQualifications,
            value: String
        },
        ChangeQualification: {
            _$class: msls.ContentItem,
            _$name: "ChangeQualification",
            _$parentName: "ChangeQualificationList",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.BrowseMyChangeQualifications,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyChangeQualifications,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeQualification
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ChangeQualification",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.ChangeQualification
        },
        ChangeRequest: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequest",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeQualification,
            value: lightSwitchApplication.ChangeRequest
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "ChangeRequest",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestTitle",
            _$parentName: "ChangeRequest",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        QualificationType: {
            _$class: msls.ContentItem,
            _$name: "QualificationType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeQualification,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeQualification,
            value: String
        },
        TargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetCompletionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        DateClosed: {
            _$class: msls.ContentItem,
            _$name: "DateClosed",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeQualifications,
            data: lightSwitchApplication.ChangeQualification,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyChangeQualifications
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyChangeQualifications, {
        /// <field>
        /// Called when a new BrowseMyChangeQualifications screen is created.
        /// <br/>created(msls.application.BrowseMyChangeQualifications screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyChangeQualifications],
        /// <field>
        /// Called before changes on an active BrowseMyChangeQualifications screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyChangeQualifications screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyChangeQualifications],
        /// <field>
        /// Called after the ChangeQualificationList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualificationList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("ChangeQualificationList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("Search"); }],
        /// <field>
        /// Called after the ChangeQualification content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeQualification_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("ChangeQualification"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ChangeRequest content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequest_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("ChangeRequest"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("ChangeRequestTitle"); }],
        /// <field>
        /// Called after the QualificationType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualificationType_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("QualificationType"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("Description"); }],
        /// <field>
        /// Called after the TargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("TargetCompletionDate"); }],
        /// <field>
        /// Called after the DateClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeQualifications().findContentItem("DateClosed"); }]
    });

    lightSwitchApplication.BrowseMyChangeRequests.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyChangeRequests
        },
        ChangeRequestList: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.BrowseMyChangeRequests,
            value: lightSwitchApplication.BrowseMyChangeRequests
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ChangeRequestList",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.BrowseMyChangeRequests,
            value: String
        },
        ChangeRequest: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequest",
            _$parentName: "ChangeRequestList",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.BrowseMyChangeRequests,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyChangeRequests,
                _$entry: {
                    elementType: lightSwitchApplication.ChangeRequest
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ChangeRequest",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequest
        },
        Reference: {
            _$class: msls.ContentItem,
            _$name: "Reference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        ChangeRequestTitle: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestTitle",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: String
        },
        DateRaised: {
            _$class: msls.ContentItem,
            _$name: "DateRaised",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        DateApproved: {
            _$class: msls.ContentItem,
            _$name: "DateApproved",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        TargetClosureDate: {
            _$class: msls.ContentItem,
            _$name: "TargetClosureDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        ChangeRequestStatus: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: lightSwitchApplication.ChangeRequestStatus
        },
        DateClosed: {
            _$class: msls.ContentItem,
            _$name: "DateClosed",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyChangeRequests,
            data: lightSwitchApplication.ChangeRequest,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyChangeRequests
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyChangeRequests, {
        /// <field>
        /// Called when a new BrowseMyChangeRequests screen is created.
        /// <br/>created(msls.application.BrowseMyChangeRequests screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyChangeRequests],
        /// <field>
        /// Called before changes on an active BrowseMyChangeRequests screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyChangeRequests screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyChangeRequests],
        /// <field>
        /// Called after the ChangeRequestList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("ChangeRequestList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("Search"); }],
        /// <field>
        /// Called after the ChangeRequest content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequest_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("ChangeRequest"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Reference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Reference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("Reference"); }],
        /// <field>
        /// Called after the ChangeRequestTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestTitle_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("ChangeRequestTitle"); }],
        /// <field>
        /// Called after the DateRaised content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateRaised_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("DateRaised"); }],
        /// <field>
        /// Called after the DateApproved content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateApproved_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("DateApproved"); }],
        /// <field>
        /// Called after the TargetClosureDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetClosureDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("TargetClosureDate"); }],
        /// <field>
        /// Called after the ChangeRequestStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("ChangeRequestStatus"); }],
        /// <field>
        /// Called after the DateClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateClosed_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyChangeRequests().findContentItem("DateClosed"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        MenuGroup: {
            _$class: msls.ContentItem,
            _$name: "MenuGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        AllChangeRequests: {
            _$class: msls.ContentItem,
            _$name: "AllChangeRequests",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        MyChangeRequests: {
            _$class: msls.ContentItem,
            _$name: "MyChangeRequests",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        MyChangeQualifications: {
            _$class: msls.ContentItem,
            _$name: "MyChangeQualifications",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        MyChangeActions: {
            _$class: msls.ContentItem,
            _$name: "MyChangeActions",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        MyAssignedRisks: {
            _$class: msls.ContentItem,
            _$name: "MyAssignedRisks",
            _$parentName: "MenuGroup",
            screen: lightSwitchApplication.Home
        },
        SettingsGroup: {
            _$class: msls.ContentItem,
            _$name: "SettingsGroup",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        ChangeRequestStatuses: {
            _$class: msls.ContentItem,
            _$name: "ChangeRequestStatuses",
            _$parentName: "SettingsGroup",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the Blank method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        Blank_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the Blank method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        Blank_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the MenuGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MenuGroup"); }],
        /// <field>
        /// Called after the AllChangeRequests content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllChangeRequests_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AllChangeRequests"); }],
        /// <field>
        /// Called after the MyChangeRequests content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyChangeRequests_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyChangeRequests"); }],
        /// <field>
        /// Called after the MyChangeQualifications content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyChangeQualifications_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyChangeQualifications"); }],
        /// <field>
        /// Called after the MyChangeActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyChangeActions_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyChangeActions"); }],
        /// <field>
        /// Called after the MyAssignedRisks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyAssignedRisks_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyAssignedRisks"); }],
        /// <field>
        /// Called after the SettingsGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsGroup_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("SettingsGroup"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Employees"); }],
        /// <field>
        /// Called after the ChangeRequestStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ChangeRequestStatuses_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ChangeRequestStatuses"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ShowBrowseChangeRequests: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseChangeRequests",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseMyChangeRequests: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyChangeRequests",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseMyChangeQualifications: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyChangeQualifications",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseMyChangeQualificationActions: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyChangeQualificationActions",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseMyAssignedRisks: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseMyAssignedRisks",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        ShowBrowseEmployees: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseEmployees",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        ShowBrowseChangeRequestStatuses: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseChangeRequestStatuses",
            _$parentName: "Settings",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Group"); }],
        /// <field>
        /// Called after the ShowBrowseChangeRequests content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseChangeRequests_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseChangeRequests"); }],
        /// <field>
        /// Called after the ShowBrowseMyChangeRequests content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyChangeRequests_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseMyChangeRequests"); }],
        /// <field>
        /// Called after the ShowBrowseMyChangeQualifications content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyChangeQualifications_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseMyChangeQualifications"); }],
        /// <field>
        /// Called after the ShowBrowseMyChangeQualificationActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyChangeQualificationActions_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseMyChangeQualificationActions"); }],
        /// <field>
        /// Called after the ShowBrowseMyAssignedRisks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseMyAssignedRisks_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseMyAssignedRisks"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }],
        /// <field>
        /// Called after the ShowBrowseEmployees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseEmployees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseEmployees"); }],
        /// <field>
        /// Called after the ShowBrowseChangeRequestStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseChangeRequestStatuses_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("ShowBrowseChangeRequestStatuses"); }]
    });

}(msls.application));
/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function ChangeRequest(entitySet) {
        /// <summary>
        /// Represents the ChangeRequest entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeRequest.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this changeRequest.
        /// </field>
        /// <field name="Reference" type="String">
        /// Gets or sets the reference for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestTitle" type="String">
        /// Gets or sets the changeRequestTitle for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestDescription" type="String">
        /// Gets or sets the changeRequestDescription for this changeRequest.
        /// </field>
        /// <field name="RaisedBy" type="msls.application.Employee">
        /// Gets or sets the raisedBy for this changeRequest.
        /// </field>
        /// <field name="DateRaised" type="Date">
        /// Gets or sets the dateRaised for this changeRequest.
        /// </field>
        /// <field name="TargetClosureDate" type="Date">
        /// Gets or sets the targetClosureDate for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestStatus" type="msls.application.ChangeRequestStatus">
        /// Gets or sets the changeRequestStatus for this changeRequest.
        /// </field>
        /// <field name="ChangeRequestPlan" type="String">
        /// Gets or sets the changeRequestPlan for this changeRequest.
        /// </field>
        /// <field name="ChangeOwner" type="msls.application.Employee">
        /// Gets or sets the changeOwner for this changeRequest.
        /// </field>
        /// <field name="DateApproved" type="Date">
        /// Gets or sets the dateApproved for this changeRequest.
        /// </field>
        /// <field name="DateClosed" type="Date">
        /// Gets or sets the dateClosed for this changeRequest.
        /// </field>
        /// <field name="ClosedBy" type="msls.application.Employee">
        /// Gets or sets the closedBy for this changeRequest.
        /// </field>
        /// <field name="ChangeQualifications" type="msls.EntityCollection" elementType="msls.application.ChangeQualification">
        /// Gets the changeQualifications for this changeRequest.
        /// </field>
        /// <field name="AssociatedRisks" type="msls.EntityCollection" elementType="msls.application.AssociatedRisk">
        /// Gets the associatedRisks for this changeRequest.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this changeRequest.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this changeRequest.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this changeRequest.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this changeRequest.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this changeRequest.
        /// </field>
        /// <field name="details" type="msls.application.ChangeRequest.Details">
        /// Gets the details for this changeRequest.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="ChangeRequestsRaisedBy" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequestsRaisedBy for this employee.
        /// </field>
        /// <field name="ChangeRequestsClosedBy" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequestsClosedBy for this employee.
        /// </field>
        /// <field name="ChangeRequestsChangeOwner" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequestsChangeOwner for this employee.
        /// </field>
        /// <field name="AssociatedRisk" type="msls.EntityCollection" elementType="msls.application.AssociatedRisk">
        /// Gets the associatedRisk for this employee.
        /// </field>
        /// <field name="ChangeQualificationActions" type="msls.EntityCollection" elementType="msls.application.ChangeQualificationAction">
        /// Gets the changeQualificationActions for this employee.
        /// </field>
        /// <field name="ChangeQualifications" type="msls.EntityCollection" elementType="msls.application.ChangeQualification">
        /// Gets the changeQualifications for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ChangeRequestStatus(entitySet) {
        /// <summary>
        /// Represents the ChangeRequestStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeRequestStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this changeRequestStatus.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this changeRequestStatus.
        /// </field>
        /// <field name="ChangeRequests" type="msls.EntityCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequests for this changeRequestStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this changeRequestStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this changeRequestStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this changeRequestStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this changeRequestStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this changeRequestStatus.
        /// </field>
        /// <field name="details" type="msls.application.ChangeRequestStatus.Details">
        /// Gets the details for this changeRequestStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AssociatedRisk(entitySet) {
        /// <summary>
        /// Represents the AssociatedRisk entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this associatedRisk.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this associatedRisk.
        /// </field>
        /// <field name="RiskDescription" type="String">
        /// Gets or sets the riskDescription for this associatedRisk.
        /// </field>
        /// <field name="DateRaised" type="Date">
        /// Gets or sets the dateRaised for this associatedRisk.
        /// </field>
        /// <field name="RiskLikelihood" type="Number">
        /// Gets or sets the riskLikelihood for this associatedRisk.
        /// </field>
        /// <field name="RiskImpact" type="Number">
        /// Gets or sets the riskImpact for this associatedRisk.
        /// </field>
        /// <field name="TargetDate" type="Date">
        /// Gets or sets the targetDate for this associatedRisk.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.Employee">
        /// Gets or sets the assignedTo for this associatedRisk.
        /// </field>
        /// <field name="ControlMeasures" type="String">
        /// Gets or sets the controlMeasures for this associatedRisk.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this associatedRisk.
        /// </field>
        /// <field name="ChangeRequest" type="msls.application.ChangeRequest">
        /// Gets or sets the changeRequest for this associatedRisk.
        /// </field>
        /// <field name="OverallRisk" type="Number">
        /// Gets or sets the overallRisk for this associatedRisk.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this associatedRisk.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this associatedRisk.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this associatedRisk.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this associatedRisk.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this associatedRisk.
        /// </field>
        /// <field name="details" type="msls.application.AssociatedRisk.Details">
        /// Gets the details for this associatedRisk.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ChangeQualification(entitySet) {
        /// <summary>
        /// Represents the ChangeQualification entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeQualification.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this changeQualification.
        /// </field>
        /// <field name="ChangeRequest" type="msls.application.ChangeRequest">
        /// Gets or sets the changeRequest for this changeQualification.
        /// </field>
        /// <field name="QualificationType" type="String">
        /// Gets or sets the qualificationType for this changeQualification.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this changeQualification.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.Employee">
        /// Gets or sets the assignedTo for this changeQualification.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this changeQualification.
        /// </field>
        /// <field name="TargetCompletionDate" type="Date">
        /// Gets or sets the targetCompletionDate for this changeQualification.
        /// </field>
        /// <field name="DateClosed" type="Date">
        /// Gets or sets the dateClosed for this changeQualification.
        /// </field>
        /// <field name="ChangeQualificationActions" type="msls.EntityCollection" elementType="msls.application.ChangeQualificationAction">
        /// Gets the changeQualificationActions for this changeQualification.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this changeQualification.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this changeQualification.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this changeQualification.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this changeQualification.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this changeQualification.
        /// </field>
        /// <field name="details" type="msls.application.ChangeQualification.Details">
        /// Gets the details for this changeQualification.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ChangeQualificationAction(entitySet) {
        /// <summary>
        /// Represents the ChangeQualificationAction entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this changeQualificationAction.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this changeQualificationAction.
        /// </field>
        /// <field name="ChangeQualification" type="msls.application.ChangeQualification">
        /// Gets or sets the changeQualification for this changeQualificationAction.
        /// </field>
        /// <field name="ActionRequired" type="String">
        /// Gets or sets the actionRequired for this changeQualificationAction.
        /// </field>
        /// <field name="ActionAssignedTo" type="msls.application.Employee">
        /// Gets or sets the actionAssignedTo for this changeQualificationAction.
        /// </field>
        /// <field name="DateActionAssigned" type="Date">
        /// Gets or sets the dateActionAssigned for this changeQualificationAction.
        /// </field>
        /// <field name="TargetActionCompletionDate" type="Date">
        /// Gets or sets the targetActionCompletionDate for this changeQualificationAction.
        /// </field>
        /// <field name="ActionTaken" type="String">
        /// Gets or sets the actionTaken for this changeQualificationAction.
        /// </field>
        /// <field name="DateActionCompleted" type="Date">
        /// Gets or sets the dateActionCompleted for this changeQualificationAction.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this changeQualificationAction.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this changeQualificationAction.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this changeQualificationAction.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this changeQualificationAction.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this changeQualificationAction.
        /// </field>
        /// <field name="details" type="msls.application.ChangeQualificationAction.Details">
        /// Gets the details for this changeQualificationAction.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ChangeRequests" type="msls.EntitySet">
        /// Gets the ChangeRequests entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="ChangeRequestStatuses" type="msls.EntitySet">
        /// Gets the ChangeRequestStatuses entity set.
        /// </field>
        /// <field name="AssociatedRisks" type="msls.EntitySet">
        /// Gets the AssociatedRisks entity set.
        /// </field>
        /// <field name="ChangeQualifications" type="msls.EntitySet">
        /// Gets the ChangeQualifications entity set.
        /// </field>
        /// <field name="ChangeQualificationActions" type="msls.EntitySet">
        /// Gets the ChangeQualificationActions entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        ChangeRequest: $defineEntity(ChangeRequest, [
            { name: "Id", type: Number },
            { name: "Reference", type: String },
            { name: "ChangeRequestTitle", type: String },
            { name: "ChangeRequestDescription", type: String },
            { name: "RaisedBy", kind: "reference", type: Employee },
            { name: "DateRaised", type: Date },
            { name: "TargetClosureDate", type: Date },
            { name: "ChangeRequestStatus", kind: "reference", type: ChangeRequestStatus },
            { name: "ChangeRequestPlan", type: String },
            { name: "ChangeOwner", kind: "reference", type: Employee },
            { name: "DateApproved", type: Date },
            { name: "DateClosed", type: Date },
            { name: "ClosedBy", kind: "reference", type: Employee },
            { name: "ChangeQualifications", kind: "collection", elementType: ChangeQualification },
            { name: "AssociatedRisks", kind: "collection", elementType: AssociatedRisk },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "ChangeRequestsRaisedBy", kind: "collection", elementType: ChangeRequest },
            { name: "ChangeRequestsClosedBy", kind: "collection", elementType: ChangeRequest },
            { name: "ChangeRequestsChangeOwner", kind: "collection", elementType: ChangeRequest },
            { name: "AssociatedRisk", kind: "collection", elementType: AssociatedRisk },
            { name: "ChangeQualificationActions", kind: "collection", elementType: ChangeQualificationAction },
            { name: "ChangeQualifications", kind: "collection", elementType: ChangeQualification },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ChangeRequestStatus: $defineEntity(ChangeRequestStatus, [
            { name: "Id", type: Number },
            { name: "Status", type: String },
            { name: "ChangeRequests", kind: "collection", elementType: ChangeRequest },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AssociatedRisk: $defineEntity(AssociatedRisk, [
            { name: "Id", type: Number },
            { name: "RiskDescription", type: String },
            { name: "DateRaised", type: Date },
            { name: "RiskLikelihood", type: Number },
            { name: "RiskImpact", type: Number },
            { name: "TargetDate", type: Date },
            { name: "AssignedTo", kind: "reference", type: Employee },
            { name: "ControlMeasures", type: String },
            { name: "DateCompleted", type: Date },
            { name: "ChangeRequest", kind: "reference", type: ChangeRequest },
            { name: "OverallRisk", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ChangeQualification: $defineEntity(ChangeQualification, [
            { name: "Id", type: Number },
            { name: "ChangeRequest", kind: "reference", type: ChangeRequest },
            { name: "QualificationType", type: String },
            { name: "Description", type: String },
            { name: "AssignedTo", kind: "reference", type: Employee },
            { name: "StartDate", type: Date },
            { name: "TargetCompletionDate", type: Date },
            { name: "DateClosed", type: Date },
            { name: "ChangeQualificationActions", kind: "collection", elementType: ChangeQualificationAction },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ChangeQualificationAction: $defineEntity(ChangeQualificationAction, [
            { name: "Id", type: Number },
            { name: "ChangeQualification", kind: "reference", type: ChangeQualification },
            { name: "ActionRequired", type: String },
            { name: "ActionAssignedTo", kind: "reference", type: Employee },
            { name: "DateActionAssigned", type: Date },
            { name: "TargetActionCompletionDate", type: Date },
            { name: "ActionTaken", type: String },
            { name: "DateActionCompleted", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "ChangeRequests", elementType: ChangeRequest },
            { name: "Employees", elementType: Employee },
            { name: "ChangeRequestStatuses", elementType: ChangeRequestStatus },
            { name: "AssociatedRisks", elementType: AssociatedRisk },
            { name: "ChangeQualifications", elementType: ChangeQualification },
            { name: "ChangeQualificationActions", elementType: ChangeQualificationAction }
        ], [
            {
                name: "ChangeRequests_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeRequests },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ChangeRequests(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ChangeRequestStatuses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeRequestStatuses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ChangeRequestStatuses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AssociatedRisks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AssociatedRisks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AssociatedRisks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ChangeQualifications_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeQualifications },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ChangeQualifications(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ChangeQualificationActions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ChangeQualificationActions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ChangeQualificationActions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyChangeRequests", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ChangeRequests },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyChangeRequests()",
                        {
                        });
                }
            },
            {
                name: "MyChangeQualifications", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ChangeQualifications },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyChangeQualifications()",
                        {
                        });
                }
            },
            {
                name: "MyChangeQualificationActions", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ChangeQualificationActions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyChangeQualificationActions()",
                        {
                        });
                }
            },
            {
                name: "MyAssignedRisks", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.AssociatedRisks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyAssignedRisks()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));

/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAssociatedRisk(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssociatedRisk screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssociatedRisk" type="msls.application.AssociatedRisk">
        /// Gets or sets the associatedRisk for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssociatedRisk.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssociatedRisk", parameters);
    }

    function AddEditChangeQualification(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditChangeQualification screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeQualification" type="msls.application.ChangeQualification">
        /// Gets or sets the changeQualification for this screen.
        /// </field>
        /// <field name="ChangeQualificationActions" type="msls.VisualCollection" elementType="msls.application.ChangeQualificationAction">
        /// Gets the changeQualificationActions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditChangeQualification.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditChangeQualification", parameters);
    }

    function AddEditChangeQualificationAction(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditChangeQualificationAction screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeQualificationAction" type="msls.application.ChangeQualificationAction">
        /// Gets or sets the changeQualificationAction for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditChangeQualificationAction.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditChangeQualificationAction", parameters);
    }

    function AddEditChangeRequest(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditChangeRequest screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequest" type="msls.application.ChangeRequest">
        /// Gets or sets the changeRequest for this screen.
        /// </field>
        /// <field name="ChangeQualifications" type="msls.VisualCollection" elementType="msls.application.ChangeQualification">
        /// Gets the changeQualifications for this screen.
        /// </field>
        /// <field name="AssociatedRisks" type="msls.VisualCollection" elementType="msls.application.AssociatedRisk">
        /// Gets the associatedRisks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditChangeRequest.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditChangeRequest", parameters);
    }

    function AddEditChangeRequestStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditChangeRequestStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequestStatus" type="msls.application.ChangeRequestStatus">
        /// Gets or sets the changeRequestStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditChangeRequestStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditChangeRequestStatus", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function BrowseChangeRequests(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseChangeRequests screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequests" type="msls.VisualCollection" elementType="msls.application.ChangeRequest">
        /// Gets the changeRequests for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseChangeRequests.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseChangeRequests", parameters);
    }

    function BrowseChangeRequestStatuses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseChangeRequestStatuses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ChangeRequestStatuses" type="msls.VisualCollection" elementType="msls.application.ChangeRequestStatus">
        /// Gets the changeRequestStatuses for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseChangeRequestStatuses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseChangeRequestStatuses", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseMyAssignedRisks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyAssignedRisks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyAssignedRisks" type="msls.VisualCollection" elementType="msls.application.AssociatedRisk">
        /// Gets the myAssignedRisks for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyAssignedRisks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyAssignedRisks", parameters);
    }

    function BrowseMyChangeQualificationActions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyChangeQualificationActions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyChangeQualificationActions" type="msls.VisualCollection" elementType="msls.application.ChangeQualificationAction">
        /// Gets the myChangeQualificationActions for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyChangeQualificationActions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyChangeQualificationActions", parameters);
    }

    function BrowseMyChangeQualifications(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyChangeQualifications screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyChangeQualifications" type="msls.VisualCollection" elementType="msls.application.ChangeQualification">
        /// Gets the myChangeQualifications for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyChangeQualifications.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyChangeQualifications", parameters);
    }

    function BrowseMyChangeRequests(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyChangeRequests screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyChangeRequests" type="msls.VisualCollection" elementType="msls.application.ChangeRequest">
        /// Gets the myChangeRequests for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyChangeRequests.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyChangeRequests", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAssociatedRisk: $defineScreen(AddEditAssociatedRisk, [
            { name: "AssociatedRisk", kind: "local", type: lightSwitchApplication.AssociatedRisk }
        ], [
        ]),

        AddEditChangeQualification: $defineScreen(AddEditChangeQualification, [
            { name: "ChangeQualification", kind: "local", type: lightSwitchApplication.ChangeQualification },
            {
                name: "ChangeQualificationActions", kind: "collection", elementType: lightSwitchApplication.ChangeQualificationAction,
                getNavigationProperty: function () {
                    if (this.owner.ChangeQualification) {
                        return this.owner.ChangeQualification.details.properties.ChangeQualificationActions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("ActionAssignedTo");
                }
            }
        ], [
        ]),

        AddEditChangeQualificationAction: $defineScreen(AddEditChangeQualificationAction, [
            { name: "ChangeQualificationAction", kind: "local", type: lightSwitchApplication.ChangeQualificationAction }
        ], [
        ]),

        AddEditChangeRequest: $defineScreen(AddEditChangeRequest, [
            { name: "ChangeRequest", kind: "local", type: lightSwitchApplication.ChangeRequest },
            {
                name: "ChangeQualifications", kind: "collection", elementType: lightSwitchApplication.ChangeQualification,
                getNavigationProperty: function () {
                    if (this.owner.ChangeRequest) {
                        return this.owner.ChangeRequest.details.properties.ChangeQualifications;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("AssignedTo");
                }
            },
            {
                name: "AssociatedRisks", kind: "collection", elementType: lightSwitchApplication.AssociatedRisk,
                getNavigationProperty: function () {
                    if (this.owner.ChangeRequest) {
                        return this.owner.ChangeRequest.details.properties.AssociatedRisks;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("AssignedTo");
                }
            }
        ], [
        ]),

        AddEditChangeRequestStatus: $defineScreen(AddEditChangeRequestStatus, [
            { name: "ChangeRequestStatus", kind: "local", type: lightSwitchApplication.ChangeRequestStatus }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        BrowseChangeRequests: $defineScreen(BrowseChangeRequests, [
            {
                name: "ChangeRequests", kind: "collection", elementType: lightSwitchApplication.ChangeRequest,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.ChangeRequests.filter("(((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Reference)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequestTitle)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequestStatus/Status)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeOwner/FirstName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeOwner/LastName)") + "").expand("ChangeRequestStatus").expand("ChangeOwner");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseChangeRequestStatuses: $defineScreen(BrowseChangeRequestStatuses, [
            {
                name: "ChangeRequestStatuses", kind: "collection", elementType: lightSwitchApplication.ChangeRequestStatus,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.ChangeRequestStatuses;
                }
            }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", LastName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FirstName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", UserName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyAssignedRisks: $defineScreen(BrowseMyAssignedRisks, [
            {
                name: "MyAssignedRisks", kind: "collection", elementType: lightSwitchApplication.AssociatedRisk,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyAssignedRisks().filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequest/Reference)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequest/ChangeRequestTitle)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", RiskDescription)") + "").expand("ChangeRequest");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyChangeQualificationActions: $defineScreen(BrowseMyChangeQualificationActions, [
            {
                name: "MyChangeQualificationActions", kind: "collection", elementType: lightSwitchApplication.ChangeQualificationAction,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyChangeQualificationActions().filter("((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeQualification/ChangeRequest/Reference)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeQualification/ChangeRequest/ChangeRequestTitle)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeQualification/QualificationType)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ActionRequired)") + "").expand("ChangeQualification").expand("ChangeQualification.ChangeRequest");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyChangeQualifications: $defineScreen(BrowseMyChangeQualifications, [
            {
                name: "MyChangeQualifications", kind: "collection", elementType: lightSwitchApplication.ChangeQualification,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyChangeQualifications().filter("((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequest/Reference)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequest/ChangeRequestTitle)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", QualificationType)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Description)") + "").expand("ChangeRequest");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyChangeRequests: $defineScreen(BrowseMyChangeRequests, [
            {
                name: "MyChangeRequests", kind: "collection", elementType: lightSwitchApplication.ChangeRequest,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyChangeRequests().filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Reference)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequestTitle)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ChangeRequestStatus/Status)") + "").expand("ChangeRequestStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
            { name: "Blank" }
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        showAddEditAssociatedRisk: $defineShowScreen(function showAddEditAssociatedRisk(AssociatedRisk, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssociatedRisk screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssociatedRisk", parameters, options);
        }),

        showAddEditChangeQualification: $defineShowScreen(function showAddEditChangeQualification(ChangeQualification, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditChangeQualification screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditChangeQualification", parameters, options);
        }),

        showAddEditChangeQualificationAction: $defineShowScreen(function showAddEditChangeQualificationAction(ChangeQualificationAction, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditChangeQualificationAction screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditChangeQualificationAction", parameters, options);
        }),

        showAddEditChangeRequest: $defineShowScreen(function showAddEditChangeRequest(ChangeRequest, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditChangeRequest screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditChangeRequest", parameters, options);
        }),

        showAddEditChangeRequestStatus: $defineShowScreen(function showAddEditChangeRequestStatus(ChangeRequestStatus, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditChangeRequestStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditChangeRequestStatus", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showBrowseChangeRequests: $defineShowScreen(function showBrowseChangeRequests(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseChangeRequests screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseChangeRequests", parameters, options);
        }),

        showBrowseChangeRequestStatuses: $defineShowScreen(function showBrowseChangeRequestStatuses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseChangeRequestStatuses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseChangeRequestStatuses", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseMyAssignedRisks: $defineShowScreen(function showBrowseMyAssignedRisks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyAssignedRisks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyAssignedRisks", parameters, options);
        }),

        showBrowseMyChangeQualificationActions: $defineShowScreen(function showBrowseMyChangeQualificationActions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyChangeQualificationActions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyChangeQualificationActions", parameters, options);
        }),

        showBrowseMyChangeQualifications: $defineShowScreen(function showBrowseMyChangeQualifications(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyChangeQualifications screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyChangeQualifications", parameters, options);
        }),

        showBrowseMyChangeRequests: $defineShowScreen(function showBrowseMyChangeRequests(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyChangeRequests screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyChangeRequests", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        })

    });

}(msls.application));

/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.ChangeRequest, {
        /// <field>
        /// Called when a new changeRequest is created.
        /// <br/>created(msls.application.ChangeRequest entity)
        /// </field>
        created: [lightSwitchApplication.ChangeRequest]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.ChangeRequestStatus, {
        /// <field>
        /// Called when a new changeRequestStatus is created.
        /// <br/>created(msls.application.ChangeRequestStatus entity)
        /// </field>
        created: [lightSwitchApplication.ChangeRequestStatus]
    });

    msls._addEntryPoints(lightSwitchApplication.AssociatedRisk, {
        /// <field>
        /// Called when a new associatedRisk is created.
        /// <br/>created(msls.application.AssociatedRisk entity)
        /// </field>
        created: [lightSwitchApplication.AssociatedRisk]
    });

    msls._addEntryPoints(lightSwitchApplication.ChangeQualification, {
        /// <field>
        /// Called when a new changeQualification is created.
        /// <br/>created(msls.application.ChangeQualification entity)
        /// </field>
        created: [lightSwitchApplication.ChangeQualification]
    });

    msls._addEntryPoints(lightSwitchApplication.ChangeQualificationAction, {
        /// <field>
        /// Called when a new changeQualificationAction is created.
        /// <br/>created(msls.application.ChangeQualificationAction entity)
        /// </field>
        created: [lightSwitchApplication.ChangeQualificationAction]
    });

}(msls.application));

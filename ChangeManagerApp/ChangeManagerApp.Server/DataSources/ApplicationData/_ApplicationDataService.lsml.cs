using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void AssociatedRisks_Validate(AssociatedRisk entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateCompleted != null & entity.ControlMeasures == null)
            {
                results.AddEntityError("You cannot set the Date Completed without first stating the Control Measures");
            }

            if (entity.DateCompleted != null &
                (entity.RiskLikelihood == null || entity.RiskImpact == null))
            {
                results.AddEntityError("You cannot set the Date Completed without first setting the Likelihood, Impact and Detectability");
            }

            if (entity.DateRaised != null & entity.TargetDate != null)
            {
                if (entity.TargetDate < entity.DateRaised)
                {
                    results.AddEntityError("The target date cannot be before the date raised");
                }
            }

            if (entity.DateRaised != null & entity.DateCompleted != null)
            {
                if (entity.DateCompleted < entity.DateRaised)
                {
                    results.AddEntityError("The date completed cannot be before the date raised");
                }
            }

            if (entity.TargetDate != null & entity.ChangeRequest.TargetClosureDate != null)
            {
                if (entity.ChangeRequest.TargetClosureDate < entity.TargetDate)
                {
                    results.AddEntityError("The target date for the risk cannot be later than the overall target date for the Change Request");
                }
            }
        }

        partial void ChangeQualifications_Validate(ChangeQualification entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetCompletionDate != null & entity.ChangeRequest.TargetClosureDate != null)
            {
                if (entity.TargetCompletionDate > entity.ChangeRequest.TargetClosureDate)
                {
                    results.AddEntityError("The target date for a Change Qualification cannot be set to after the target date for the Change Request");
                }
            }

            if (entity.DateClosed != null & entity.ChangeQualificationActions.Count() == 0)
            {
                results.AddEntityError("You must indicate at least one Change Qualification Action taken before setting the Date Closed");
            }
        }

        partial void ChangeQualificationActions_Validate(ChangeQualificationAction entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.TargetActionCompletionDate != null & entity.ChangeQualification.TargetCompletionDate != null)
            {
                if (entity.TargetActionCompletionDate > entity.ChangeQualification.TargetCompletionDate)
                {
                    results.AddEntityError("The target date for an Action cannot be set to after the target date for the Change Qualification");
                }
            }

            if (entity.DateActionCompleted != null & entity.DateActionAssigned != null)
            {
                if (entity.DateActionCompleted < entity.DateActionAssigned)
                {
                    results.AddEntityError("The date completed cannot be earlier than the date assigned");
                }
            }

            if (entity.DateActionCompleted != null & entity.ActionTaken == null)
            {
                results.AddEntityError("You must complete the Action Taken before setting the Date Action Completed");
            }
        }

        partial void ChangeRequests_Validate(ChangeRequest entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateRaised != null & entity.TargetClosureDate != null)
            {
                if (entity.TargetClosureDate < entity.DateRaised)
                {
                    results.AddEntityError("The target date cannot be before the date raised");
                }
            }

            if (entity.DateRaised != null & entity.DateClosed != null)
            {
                if (entity.DateClosed < entity.DateRaised)
                {
                    results.AddEntityError("The date closed cannot be before the date raised");
                }
            }

            if (entity.DateRaised != null & entity.DateApproved != null)
            {
                if (entity.DateApproved < entity.DateRaised)
                {
                    results.AddEntityError("The date approved cannot be before the date raised");
                }
            }

            if (entity.DateApproved != null & entity.DateClosed != null)
            {
                if (entity.DateClosed < entity.DateApproved)
                {
                    results.AddEntityError("The date approved cannot be after the date closed");
                }
            }
        }

        partial void MyChangeRequests_PreprocessQuery(ref IQueryable<ChangeRequest> query)
        {
            query = from changeRequest in query
                    where changeRequest.ChangeOwner.UserName == this.Application.User.Name
                    select changeRequest;
        }

        partial void MyChangeQualifications_PreprocessQuery(ref IQueryable<ChangeQualification> query)
        {
            query = from cq in query
                    where cq.AssignedTo.UserName == this.Application.User.Name
                    select cq;
        }

        partial void MyChangeQualificationActions_PreprocessQuery(ref IQueryable<ChangeQualificationAction> query)
        {
            query = from cqa in query
                    where cqa.ActionAssignedTo.UserName == this.Application.User.Name
                    select cqa;
        }

        partial void MyAssignedRisks_PreprocessQuery(ref IQueryable<AssociatedRisk> query)
        {
            query = from risk in query
                    where risk.AssignedTo.UserName == this.Application.User.Name
                    select risk;
        }

        partial void AssociatedRisks_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssociatedRisks);
        }

        partial void AssociatedRisks_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssociatedRisks);
        }

        partial void AssociatedRisks_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAssociatedRisks);
        }

        partial void ChangeQualificationActions_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeQualificationActions);
        }

        partial void ChangeQualificationActions_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeQualificationActions);
        }

        partial void ChangeQualificationActions_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeQualificationActions);
        }

        partial void ChangeQualifications_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeQualifications);
        }

        partial void ChangeQualifications_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeQualifications);
        }

        partial void ChangeQualifications_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeQualifications);
        }

        partial void ChangeRequests_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequests);
        }

        partial void ChangeRequests_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequests);
        }

        partial void ChangeRequests_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequests);
        }

        partial void ChangeRequestStatuses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequestStatuses);
        }

        partial void ChangeRequestStatuses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequestStatuses);
        }

        partial void ChangeRequestStatuses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditChangeRequestStatuses);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void ChangeQualifications_Inserted(ChangeQualification entity)
        {
            if (entity.AssignedTo != null && entity.AssignedTo.Email != null)
            {
                string subject = string.Format("A Change Cualification for the Change '{0}' has been assigned to you.", entity.ChangeRequest.ChangeRequestTitle);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following a change qualification has been assigned to you.<br></br>Change Request: {2}.<br></br>Change Qualification Type: {3}.<br></br>Change Qualification Description: {4}.<br></br>Target Completion Date: {5}.<br></br></body></html>", entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.ChangeRequest.ChangeRequestTitle, entity.QualificationType, entity.Description, entity.TargetCompletionDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void ChangeQualifications_Updated(ChangeQualification entity)
        {
            if (entity.ChangeRequest.ChangeOwner != null && entity.ChangeRequest.ChangeOwner.Email != null && entity.DateClosed != null)
            {
                string subject = string.Format("A Change Qualification for the Change '{0}' has been completed.", entity.ChangeRequest.ChangeRequestTitle);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following change qualification has been completed.<br></br>Change Request: {2}.<br></br>Change Qualification Type: {3}.<br></br>Change Qualification Description: {4}.<br></br>Assigned To: {5} {6}.<br></br>Target Completion Date: {7}.<br></br>Date Completed: {8}.<br></br></body></html>", entity.ChangeRequest.ChangeOwner.FirstName, entity.ChangeRequest.ChangeOwner.LastName, entity.ChangeRequest.ChangeRequestTitle, entity.QualificationType, entity.Description, entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.TargetCompletionDate, entity.DateClosed);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.ChangeRequest.ChangeOwner.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void AssociatedRisks_Inserted(AssociatedRisk entity)
        {
            if (entity.AssignedTo != null && entity.AssignedTo.Email != null)
            {
                string subject = string.Format("A Risk Assessment for the Change '{0}' has been assigned to you.", entity.ChangeRequest.ChangeRequestTitle);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following risk assessment has been assigned to you for resolution.<br></br>Change Request: {2}.<br></br>Risk Description: {3}.<br></br>Target Completion Date: {4}.<br></br></body></html>", entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.ChangeRequest.ChangeRequestTitle, entity.RiskDescription, entity.TargetDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void AssociatedRisks_Updated(AssociatedRisk entity)
        {
            if (entity.ChangeRequest.ChangeOwner != null && entity.ChangeRequest.ChangeOwner.Email != null && entity.DateCompleted != null)
            {
                string subject = string.Format("A Risk Assessment for the Change '{0}' has been completed.", entity.ChangeRequest.ChangeRequestTitle);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following risk assessment has been completed.<br></br>Change Request: {2}.<br></br>Risk Assessment Description: {3}.<br></br>Assigned To: {4} {5}.<br></br>Target Completion Date: {6}.<br></br>Date Completed: {7}.<br></br></body></html>", entity.ChangeRequest.ChangeOwner.FirstName, entity.ChangeRequest.ChangeOwner.LastName, entity.ChangeRequest.ChangeRequestTitle, entity.RiskDescription, entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.TargetDate, entity.DateCompleted);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.ChangeRequest.ChangeOwner.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void ChangeQualificationActions_Inserted(ChangeQualificationAction entity)
        {
            if (entity.ActionAssignedTo != null && entity.ActionAssignedTo.Email != null)
            {
                string subject = string.Format("An Action from a Change Qualification for the Change '{0}' has been assigned to you.", entity.ChangeQualification.ChangeRequest.ChangeRequestTitle);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following Action from a Change Qualification has been assigned to you.<br></br>Change Request: {2}.<br></br>Change Qualification Type: {3}.<br></br>Change Qualification Description: {4}.<br></br>Action Required: {5}.<br></br>Target Completion Date: {5}.<br></br></body></html>", entity.ActionAssignedTo.FirstName, entity.ActionAssignedTo.LastName, entity.ChangeQualification.ChangeRequest.ChangeRequestTitle, entity.ChangeQualification.QualificationType, entity.ChangeQualification.Description, entity.ActionRequired, entity.TargetActionCompletionDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.ActionAssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void ChangeQualificationActions_Updated(ChangeQualificationAction entity)
        {
            if (entity.ChangeQualification.AssignedTo != null && entity.ChangeQualification.AssignedTo.Email != null && entity.DateActionCompleted != null)
            {
                string subject = string.Format("An Action from a Change Qualification for the Change '{0}' has been completed.", entity.ChangeQualification.ChangeRequest.ChangeRequestTitle);

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following Action from a Change Qualification has been completed.<br></br>Change Request: {2}.<br></br>Change Qualification Type: {3}.<br></br>Change Qualification Description: {4}.<br></br>Action Required: {5}.<br></br>Assigned to: {6} {7}.<br></br>Target Completion Date: {8}.<br></br>Date Completed: {9}.<br></br></body></html>", entity.ChangeQualification.AssignedTo.FirstName, entity.ChangeQualification.AssignedTo.LastName, entity.ChangeQualification.ChangeRequest.ChangeRequestTitle, entity.ChangeQualification.QualificationType, entity.ChangeQualification.Description, entity.ActionRequired, entity.ActionAssignedTo.FirstName, entity.ActionAssignedTo.LastName, entity.TargetActionCompletionDate, entity.DateActionCompleted);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.ChangeQualification.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }
    }
}

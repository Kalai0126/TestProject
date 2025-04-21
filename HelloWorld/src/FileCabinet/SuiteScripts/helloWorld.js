/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget'], (serverWidget) => {

    const onRequest = (context) => {
        if (context.request.method === 'GET') {

            var form = serverWidget.createForm({
                title: 'Customer Form'
            });

            var field = form.addFieldGroup({
                id: 'fieldgroupid',
                label: 'Primary Information'

            });

            var field = form.addField({
                id: 'textfield',
                type: serverWidget.FieldType.SELECT,
                label: 'CUSTOM FORM',
                container: 'fieldgroupid'
            });

            field.addSelectOption({
                value: 'Standard',
                text: 'Standard custom form',
                container: 'fieldgroupid'
            });

            field.isMandatory = true;

            var customid = form.addField({
                id: 'customfield',
                type: serverWidget.FieldType.SELECT,
                label: 'CUSTOM ID',
                container: 'fieldgroupid'
            });

            // customid.addSelectOption({
            //     value: 'custom',
            //     text: 'C500',
            //     container: 'fieldgroupid'
            // });

            customid.isMandatory = true;

            customid.defaultValue = "C500"



            var name = form.addField({
                id: 'namefield',
                type: serverWidget.FieldType.TEXT,
                label: 'COMPANY NAME',
                container: 'fieldgroupid'
            });


            name.isMandatory = true;

            name.defaultValue = "SampleCompan"


            // var type = form.addField({
            //     id:'text_type',
            //     type: serverWidget.FieldType.LABEL,
            //     label: 'Type'
            // });

            // type.addField({
            //     id:'text_1',
            //     type: serverWidget.FieldType.RADIO,
            //     label: 'COMPANY'

            // });

            // type.addField({
            //     id:'text_2',
            //     type: serverWidget.FieldType.RADIO,
            //     label: 'INDIVIDUAL'

            // });

            var parentCompany = form.addField({
                id: 'parentcompanyfield',
                type: serverWidget.FieldType.SELECT,
                label: 'PARENT COMPANY',
                container: 'fieldgroupid'
            });

            parentCompany.addSelectOption({
                value: 'a',
                text: '1 Divavu Co',
                container: 'fieldgroupid'
            });

            parentCompany.addSelectOption({
                value: 'b',
                text: '10 Xenith & ACME Installation',
                container: 'fieldgroupid'
            });

            parentCompany.addSelectOption({
                value: 'c',
                text: '101 Meedoo Industries ',
                container: 'fieldgroupid'
            });


            var select = form.addField({
                id: 'selectfield',
                type: serverWidget.FieldType.SELECT,
                label: 'STATUS',
                container: 'fieldgroupid'
            });

            select.isMandatory = true;

            select.addSelectOption({
                value: 'x',
                text: 'CUSTOMER-Closed Won',
                container: 'fieldgroupid'
            });
            select.addSelectOption({
                value: 'y',
                text: 'LEAD-Unqualified',
                container: 'fieldgroupid'
            });

            select.addSelectOption({
                value: 'z',
                text: 'LEAD-Qualified',
                container: 'fieldgroupid'
            });

            var salesrep = form.addField({
                id: 'salesfield',
                type: serverWidget.FieldType.SELECT,
                label: 'SALES REP',
                source: 'employee',
                container: 'fieldgroupid'
            });

            log.debug("salesrep", salesrep);

            form.addField({
                id: 'webaddress',
                type: serverWidget.FieldType.TEXT,
                label: 'WEB ADDRESS',
                container: 'fieldgroupid'
            });

            var Category = form.addField({
                id: 'categoryfield',
                type: serverWidget.FieldType.SELECT,
                label: 'CATEGORY',
                container: 'fieldgroupid'
            });

            Category.addSelectOption({
                value: 'p',
                text: 'Information Technology',
                container: 'fieldgroupid'
            });

            Category.addSelectOption({
                value: 'q',
                text: 'Manufacturing',
                container: 'fieldgroupid'
            });

            Category.addSelectOption({
                value: 'r',
                text: 'Retail',
                container: 'fieldgroupid'
            });

            Category.addSelectOption({
                value: 's',
                text: 'Wholesale',
                container: 'fieldgroupid'
            });


            form.addField({
                id: 'priority',
                type: serverWidget.FieldType.TEXT,
                label: 'DEFAULT ORDER PRORITY',
                container: 'fieldgroupid'
            })


            form.addField({
                id: 'commentfield',
                type: serverWidget.FieldType.LONGTEXT,
                label: 'COMMENTS',
                container: 'fieldgroupid'
            });

            var email = form.addFieldGroup({
                id: 'emailgroupid',
                label: 'Email | Phone | Address'

            });

            var email = form.addField({
                id: 'emailfield',
                type: serverWidget.FieldType.TEXT,
                label: 'EMAIL',
                container: 'emailgroupid'
            });

            log.debug("email", email);


            var phone = form.addField({
                id: 'phonefield',
                type: serverWidget.FieldType.PHONE,
                label: 'PHONE',
                container: 'emailgroupid'
            });

            log.debug("phone", phone);

            var altphone = form.addField({
                id: 'altphonefield',
                type: serverWidget.FieldType.PHONE,
                label: 'ALT.PHONE',
                container: 'emailgroupid'
            });

            log.debug("altphone", altphone);

            var fax = form.addField({
                id: 'faxfeild',
                type: serverWidget.FieldType.TEXT,
                label: 'FAX',
                container: 'emailgroupid'
            });

            log.debug("fax", fax);

            var address = form.addField({
                id: 'addressfeild',
                type: serverWidget.FieldType.LONGTEXT,
                label: 'ADDRESS',
                container: 'emailgroupid'
            });

            log.debug("address", address);


            var paymentnoti = form.addFieldGroup({
                id: 'classificationgroupid',
                label: 'Classification'

            });

            var paymentnoti = form.addField({
                id: 'paymentnotifield',
                type: serverWidget.FieldType.TEXT,
                label: 'EMAIL ADDRESS FOR PAYMENT NOTIFICATION',
                container: 'classificationgroupid'
            });

            log.debug("paymentnoti", paymentnoti);

            var approval = form.addField({
                id: 'transactionapprovalfield',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'TRANSACTIONS NEED APPROVAL',
                container: 'classificationgroupid'
            });

            log.debug("approval", approval);

            var custcommissionrate = form.addField({
                id: 'ratefield',
                type: serverWidget.FieldType.TEXT,
                label: 'CUSTOMER COMMISSION RATE',
                container: 'classificationgroupid'
            });

            log.debug("custcommissionrate", custcommissionrate);

            var accountstatus = form.addField({
                id: 'statusfield',
                type: serverWidget.FieldType.SELECT,
                label: 'ACCOUNTING STATUS',
                container: 'classificationgroupid'
            });

            accountstatus.updateDisplayType({
                displayType: serverWidget.FieldDisplayType.DISABLED
            });

            accountstatus.addSelectOption({
                value: 'status',
                text: 'PENDING APPROVAL',
                container: 'classificationgroupid'
            });

            var accapprover = form.addField({
                id: 'accapproverfield',
                type: serverWidget.FieldType.SELECT,
                label: 'ACCOUNTING APPROVER',
                container: 'classificationgroupid'
            });

            accapprover.updateDisplayType({
                displayType: serverWidget.FieldDisplayType.DISABLED
            });


            var churnDate = form.addField({
                id: 'churndatefield',
                type: serverWidget.FieldType.DATE,
                label: 'CHURN DATE',
                container: 'classificationgroupid'
            });

            log.debug("churnDate", churnDate);

            var invoiceEmail = form.addField({
                id: 'invoiceemailfield',
                type: serverWidget.FieldType.EMAIL,
                label: 'CUSTOMER INVOICE EMAIL',
                container: 'classificationgroupid'
            });

            log.debug("invoiceEmail", invoiceEmail);

            var idProof = form.addField({
                id: 'idprooffield',
                type: serverWidget.FieldType.TEXT,
                label: 'ID PROOF',
                container: 'classificationgroupid'
            });

            log.debug("idProof", idProof);

            var qualification = form.addField({
                id: 'qualificationfield',
                type: serverWidget.FieldType.TEXT,
                label: 'QUALIFICATION',
                container: 'classificationgroupid'
            });

            log.debug("qualification", qualification);

            var legalName = form.addField({
                id: 'legalnamefield',
                type: serverWidget.FieldType.TEXT,
                label: 'CUSTOMER LEGAL NAME',
                container: 'classificationgroupid'
            });

            log.debug("legalName", legalName);



            var sublist = form.addSublist({
                id: 'sublist',
                type: serverWidget.SublistType.INLINEEDITOR,
                label: 'Subsidiaries'
            });

            sublist.addField({
                id: 'sublist1',
                type: serverWidget.FieldType.SELECT,
                label: 'SUBSIDIARY',
                source: 'subsidiary'
            });


            var relationship = form.addSublist({
                id: 'relation',
                type: serverWidget.SublistType.INLINEEDITOR,
                label: 'Relationships'
            });

            relationship.addField({
                id: 'relation1',
                type: serverWidget.FieldType.SELECT,
                label: 'OTHER RELATIONSHIPS',
                source: 'relationship'
            });


             var contacts = form.addSubtab({
                id : 'subtabid',
                label : 'CONTACTS',
                source: 'relationship'
            });

            log.debug("contacts", contacts);


            // var sublist = form.addSublist({
            //     id : 'sublist',
            //     type : serverWidget.SublistType.LIST,
            //     label : 'List Sublist'
            // });
            // sublist.addMarkAllButtons();

            form.addSubmitButton({
                label: 'Save'
            });

            context.response.writePage(form);
        }
    }
    return { onRequest }
});
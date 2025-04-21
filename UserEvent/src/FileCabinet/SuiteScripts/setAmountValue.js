// /**
//  *@NApiVersion 2.1
//  *@NScriptType UserEventScript
//  */
// define(["N/record"], function (record) {


//     function afterSubmit(context) {
       
//         try {

//             const currentRecord = context.newRecord;
//             log.debug("context", context)
//             const recordID = currentRecord.id;
//             // const recordType = currentRecord.type;
//             const salesRec = record.load({
//                 type: "salesorder",
//                 id: recordID,
//                 isDynamic: true
//             });


//             var memo = salesRec.getValue({
//                 fieldId: "memo"
//             });

//             log.debug("memo", memo);

//             if (!memo) {
//                 throw "Please Enter The Value"
//             }

//             if (memo) {

//                 var lineCount = salesRec.getLineCount({
//                     sublistId: "item"
//                 })

//                 for (i = 0; i < lineCount; i++) {

//                     salesRec.selectLine({
//                         sublistId: "item",
//                         line: i
//                     });

//                     salesRec.setCurrentSublistValue({
//                         sublistId: "item",
//                         fieldId: "amount",
//                         value: 0,
//                     })

//                     salesRec.commitLine({
//                         sublistId: "item",

//                     });
//                 }
//                 salesRec.save()

//             }

//         } catch (error) {
//             log.error("Error in afterSbmit", error)

//             throw error

//         }

//     }

//     return {
//         afterSubmit: afterSubmit
//     }
// });


/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
 define(["N/record"], function(record) {
    function afterSubmit(context) {
        try {
            log.debug("context",context)
 
            const currentRecord = context.newRecord;
            const recordID = currentRecord.id;
            const recordType = currentRecord.type;
            const rec = record.load({
                type: recordType,
                id: recordID,
                isDynamic: true
            });
 
            var memo = rec.getValue({
                fieldId: 'memo'
            })
 
            log.debug("memo",memo)
 
            if(!memo){
                throw "Please Enter the memo field"
            }
 
            if(memo){
 
                var lineCount = rec.getLineCount({
                    sublistId: 'item'
                })
 
                for (let i = 0; i < lineCount; i++) {
                   
                    rec.selectLine({
                        sublistId: 'item',
                        line: i
                    })
                    rec.setCurrentSublistValue({
                        sublistId:'item',
                        fieldId: 'amount',
                        value: 0
                    })
                    rec.commitLine({
                        sublistId:'item'
                    })
                }
 
                rec.save()
 
            }
       
 
        } catch (error) {
            log.error("Erroir in AfterSubmit",error)
            throw error
        }
    }
 
    return {
        afterSubmit: afterSubmit
    }
});
 
 
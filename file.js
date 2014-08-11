var convertDataToAngularFormModel = function (selectedFormDataFromApi) {
        var data = {};

        _.each(selectedFormDataFromApi, function(formItem){
            if (formItem.selected && formItem.selected.length) {
                if (formItem.multiselect === true) {
                    var values = {};
                    data[formItem.category] = values;
                    _.each(formItem.selected, function (selected) {
                        values[selected] = true;
                    });

                } else if (formItem.multiselect === false) {
                    data[formItem.category] = String(formItem.selected[0]);
                }
            }
        });
        console.log(data);
    };



get : [
        { category:'ISDA_TYPE', multiselect : true, selected : [1, 2]},
        {
            category:'ISSUE_TYPE',
            multiselect : true,
            selected : [3, 4],
            3 : [{
                category : 'CSA_Excluded_Products',
                multiselect : true,
                selected: [1]
            }]
        },
        {
            category:'CLIENT_TYPE',
            multiselect : false,
            selected : [5]
        }
    ],

    put : [
        {category: 'ISDA_TYPE','selected':[1,2]},
        {
            category: 'ISSUE_TYPE',
            selected:[3,4],
            3: [{
                category: 'CSA_Excluded_Products',
                selected:[1,2]
            }]
        },
        {category: 'CLIENT_TYPE','selected':[5]}
    ],

    classificationModel: {
        ISDA_TYPE: {
            1 : true,
            2 : true
        },
        ISSUE_TYPE: {
            3 : true,
            4 : true
        },
        ISSUE_TYPE_3_CSA_Excluded_Products: {
            1 : true,
            2 : true
        },
        CLIENT_TYPE: '5'
    }
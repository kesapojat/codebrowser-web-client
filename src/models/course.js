codebrowser.model.Course = Backbone.RelationalModel.extend({

    urlRoot: function () {

        return config.api.main.root + this.get('instanceId') + '/courses';
    },

    relations: [

        {
            type: Backbone.HasMany,
            key: 'exercises',
            relatedModel: 'codebrowser.model.Exercise',
            collectionType: 'codebrowser.collection.ExerciseCollection',
            reverseRelation: {

                key: 'course'

            }
        }
    ],

    initialize: function (options) {

        if (options) {
            this.instanceId = options.instanceId;
        }
    }
});

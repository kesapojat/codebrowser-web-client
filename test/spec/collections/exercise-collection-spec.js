describe('ExerciseCollection', function () {

    var missingOptionsError = 'Options instanceId and courseId are required to fetch exercises.',
        exercises;

    it('should have correct model', function () {

        exercises = new codebrowser.collection.ExerciseCollection();

        expect(exercises.model).toBe(codebrowser.model.Exercise);
    });

    it('url should throw error if no courseId is passed', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { studentId: 1 });

        expect(function () { exercises.url() }).toThrowError(missingOptionsError);
    });

    it('should have correct URL when fetching all exercises related to a course', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { instanceId: 'instance', courseId: 2 });

        expect(exercises.url()).toBe(config.api.main.root + 'instance/courses/2/exercises');
    });

    it('should have correct URL when fetching all exercises related to a student and course', function () {

        exercises = new codebrowser.collection.ExerciseCollection(null, { instanceId: 'instance', studentId: 1, courseId: 2 });

        expect(exercises.url()).toBe(config.api.main.root + 'instance/students/1/courses/2/exercises');
    });
});

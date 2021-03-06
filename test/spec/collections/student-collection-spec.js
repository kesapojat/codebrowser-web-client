describe('StudentCollection', function () {

    var students;

    beforeEach(function () {

        students = new codebrowser.collection.StudentCollection(null, { instanceId: 'instance' });
    });

    it('should have correct model', function () {

        expect(students.model).toBe(codebrowser.model.Student);
    });

    it('should have correct URL when fetching students related to a course and exercise', function () {

        students = new codebrowser.collection.StudentCollection(null, { instanceId: 'instance', courseId: 1, exerciseId: 2 });

        expect(students.url()).toBe(config.api.main.root + 'instance/courses/1/exercises/2/students');
    });

    it('should have correct URL when fetching all students', function () {

        expect(students.url()).toBe(config.api.main.root + 'instance/students');
    });
});

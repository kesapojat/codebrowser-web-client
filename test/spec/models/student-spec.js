describe('Student', function () {

    var student;

    beforeEach(function () {

        student = codebrowser.model.Student.findOrCreate({ id: 1 });
    });

    it('should have correct URL root', function () {

        expect(student.urlRoot).toBe(config.api.main.root + 'students');
    });

    it('should have correct URL', function () {

        expect(student.url()).toBe(config.api.main.root + 'students/1');
    });

    it('should have courses', function () {

        expect(student.getRelation('courses')).not.toBeNull();
    });
});

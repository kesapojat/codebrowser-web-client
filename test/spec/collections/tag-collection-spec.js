describe('TagCollection', function () {

    var missingOptionsError = 'Options instanceId, studentId, courseId and exerciseId are required to fetch tags.',
        tags;

    beforeEach(function () {

        tags = new codebrowser.collection.TagCollection(null, { instanceId: 1, studentId: 2, courseId: 3, exerciseId: 4 });
    });

    it('should have correct model', function () {

        expect(tags.model).toBe(codebrowser.model.Tag);
    });

    it('url should throw error if no studentId is passed', function () {

        tags = new codebrowser.collection.TagCollection(null, { courseId: 2, exerciseId: 3 });

        expect(function () { tags.url() }).toThrowError(missingOptionsError);
    });

    it('url should throw error if no courseId is passed', function () {

        tags = new codebrowser.collection.TagCollection(null, { studentId: 1, exerciseId: 3 });

        expect(function () { tags.url() }).toThrowError(missingOptionsError);
    });

    it('url should throw error if no exerciseId is passed', function () {

        tags = new codebrowser.collection.TagCollection(null, { studentId: 1, courseId: 2 });

        expect(function () { tags.url() }).toThrowError(missingOptionsError);
    });

    it('should have correct URL', function () {

        expect(tags.url()).toBe(config.api.main.root + '1/students/2/courses/3/exercises/4/tags');
    });
});

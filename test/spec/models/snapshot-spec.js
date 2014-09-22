describe('Snapshot', function () {

    var missingAttributesError = 'Attributes instanceId, studentId, courseId and exerciseId are required to fetch a snapshot.';
    var snapshot;

    beforeEach(function () {

        // Reset store
        Backbone.Relational.store.reset();

        snapshot = codebrowser.model.Snapshot.findOrCreate({ instanceId: 'instance', studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
    });

    it('should have correct URL root', function () {

        expect(snapshot.urlRoot()).toBe(config.api.main.root + 'instance/students/1/courses/2/exercises/3/snapshots');
    });

    it('should have correct URL', function () {

        expect(snapshot.url()).toBe(config.api.main.root + 'instance/students/1/courses/2/exercises/3/snapshots/4');
    });

    it('fetch should throw error if no instanceId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 5 });

        expect(function () { snapshot.fetch() }).toThrowError(missingAttributesError);
    });

    it('fetch should throw error if no studentId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ instanceId: 'instance', courseId: 2, exerciseId: 3, id: 5 });

        expect(function () { snapshot.fetch() }).toThrowError(missingAttributesError);
    });

    it('fetch should throw error if no courseId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ instanceId: 'instance', studentId: 1, exerciseId: 3, id: 6 });

        expect(function () { snapshot.fetch() }).toThrowError(missingAttributesError);
    });

    it('fetch should throw error if no exerciseId is passed', function () {

        snapshot = codebrowser.model.Snapshot.findOrCreate({ instanceId: 'instance', studentId: 1, courseId: 2, id: 7 });

        expect(function () { snapshot.fetch() }).toThrowError(missingAttributesError);
    });

    it('should have files', function () {

        expect(snapshot.getRelation('files')).not.toBeNull();
    });

    it('should have HasMany relation with files', function () {

        expect(snapshot.getRelation('files').options.type).toBe(Backbone.HasMany);
    });

    it('should have correct related model for files relation', function () {

        expect(snapshot.getRelation('files').options.relatedModel).toBe('codebrowser.model.File');
    });

    it('should have correct collection type for files relation', function () {

        expect(snapshot.getRelation('files').options.collectionType).toBe('codebrowser.collection.FileCollection');
    });

    it('should have correct key in reverse relation for files relation', function () {

        expect(snapshot.getRelation('files').options.reverseRelation.key).toBe('snapshot');
    });

    it('should return correct files without packages', function () {

        var fileA = codebrowser.model.File.findOrCreate({ id: 1, name: 'FileA.java', path: 'FileA.java' });
        var fileB = codebrowser.model.File.findOrCreate({ id: 2, name: 'FileB.java', path: 'FileB.java' });
        var fileC = codebrowser.model.File.findOrCreate({ id: 3, name: 'FileC.java', path: 'FileC.java' });
        var fileD = codebrowser.model.File.findOrCreate({ id: 4, name: 'FileD.java', path: 'FileD.java' });

        var files = new codebrowser.collection.FileCollection([ fileA, fileB, fileC, fileD ]);

        snapshot.set('files', files);

        expect(snapshot.getFiles()['']).not.toBeNull();
        expect(snapshot.getFiles()[''].length).toBe(4);
        expect(snapshot.getFiles()[''][0].name).toBe('FileA.java');
        expect(snapshot.getFiles()[''][1].name).toBe('FileB.java');
        expect(snapshot.getFiles()[''][2].name).toBe('FileC.java');
        expect(snapshot.getFiles()[''][3].name).toBe('FileD.java');
    });

    it('should return correct files with packages', function () {

        var fileA = codebrowser.model.File.findOrCreate({ id: 1, name: 'FileA.java', path: 'package/a/FileA.java' });
        var fileB = codebrowser.model.File.findOrCreate({ id: 2, name: 'FileB.java', path: 'package/a/FileB.java' });
        var fileC = codebrowser.model.File.findOrCreate({ id: 3, name: 'FileC.java', path: 'package/b/FileC.java' });
        var fileD = codebrowser.model.File.findOrCreate({ id: 4, name: 'FileD.java', path: 'package/c/FileD.java' });

        var files = new codebrowser.collection.FileCollection([ fileA, fileB, fileC, fileD ]);

        snapshot.set('files', files);

        // Package a
        expect(snapshot.getFiles()['package/a']).not.toBeNull();
        expect(snapshot.getFiles()['package/a'].length).toBe(2);
        expect(snapshot.getFiles()['package/a'][0].name).toBe('FileA.java');
        expect(snapshot.getFiles()['package/a'][1].name).toBe('FileB.java');

        // Package b
        expect(snapshot.getFiles()['package/b']).not.toBeNull();
        expect(snapshot.getFiles()['package/b'].length).toBe(1);
        expect(snapshot.getFiles()['package/b'][0].name).toBe('FileC.java');

        // Package c
        expect(snapshot.getFiles()['package/c']).not.toBeNull();
        expect(snapshot.getFiles()['package/c'].length).toBe(1);
        expect(snapshot.getFiles()['package/c'][0].name).toBe('FileD.java');
    });
});
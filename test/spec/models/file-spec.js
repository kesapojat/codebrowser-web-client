describe('File', function () {

    var file;

    it('should have correct URL root through a snapshot', function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ instanceId: 'instance', studentId: 21, courseId: 11, exerciseId: 31, id: 51 });
        file = codebrowser.model.File.findOrCreate({ id: 61 });

        file.set('snapshot', snapshot);

        expect(file.urlRoot()).toBe(config.api.main.root + 'students/21/courses/11/exercises/31/snapshots/51/files');
    });

    it('should have correct URL', function () {

        var snapshot = codebrowser.model.Snapshot.findOrCreate({ studentId: 1, courseId: 2, exerciseId: 3, id: 4 });
        file = codebrowser.model.File.findOrCreate({ id: 5 });

        file.set('snapshot', snapshot);

        expect(file.url()).toBe(config.api.main.root + 'students/1/courses/2/exercises/3/snapshots/4/files/5');
    });

    it('get content should standardise line endings', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\nSecond line.\r\nThird line.\rLast line.';

        expect(file.getContent()).not.toMatch(/\r/);
    });

    it('get content should convert tabs to four spaces', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = '\tFirst line.';

        expect(file.getContent()).not.toMatch(/\t/);
        expect(file.getContent()).toMatch(/ {4}/);
    });

    it('get content should not trim empty lines if setting is not set', function () {

        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, false);

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\n   ';

        expect(file.getContent()).toMatch(/^ +$/gm);
    });

    it('get content should trim empty lines if setting is set', function () {

        localStorage.setItem(config.storage.setting.editor.ignoreEmptyLines, true);

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\n   ';

        expect(file.getContent()).not.toMatch(/^ +$/gm);
    });

    it('should return correct line count', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1 });
        file.content = 'First line.\nSecond line.\nThird line.';

        expect(file.lines()).toBe(3);
    });

    it('should return correct folder', function () {

        file = codebrowser.model.File.findOrCreate({ id: 1, name: 'File.java', path: 'path/to/File.java' });

        expect(file.getFolder()).toBe('path/to');
    });
});

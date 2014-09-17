describe('Pluralise', function () {

    it('should not pluralise simple words if index is less than 1', function () {

        expect(Handlebars.helpers.pluralise(1, 'word')).toBe('word');
    });

    it('should pluralise simple words if index is higher than 1', function () {

        expect(Handlebars.helpers.pluralise(2, 'word')).toBe('words');
    });
});

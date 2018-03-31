// https://stackoverflow.com/questions/1114024/constructors-in-javascript-objects

let MyClass = (function () {
    // private static
    let nextId = 1;

    // constructor
    let cls = function () {
        // private
        let id = nextId++;
        let name = 'Unknown';

        // public (this instance only)
        this.get_id = function () { return id; };

        this.get_name = function () { return name; };
        this.set_name = function (value) {
            if (typeof value != 'string')
                throw 'Name must be a string';
            if (value.length < 2 || value.length > 20)
                throw 'Name must be 2-20 characters long.';
            name = value;
        };
    };

    // public static
    cls.get_nextId = function () {
        return nextId;
    };

    // public (shared across instances)
    cls.prototype = {
        announce: function () {
            alert('Hi there! My id is ' + this.get_id() + ' and my name is "' + this.get_name() + '"!\r\n' +
                  'The next fellow\'s id will be ' + MyClass.get_nextId() + '!');
        }
    };

    return cls;
})();
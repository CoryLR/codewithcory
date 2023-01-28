
const alasql = require('../../src/assets/alasql.min.js');
const { Tutorial } = require('./script.js');

describe("tutorials/170-relational-database-sql", () => {
  var tutorial = new Tutorial(alasql);
  tutorial.database.exec('CREATE TABLE test (id INT, name STRING)');
  tutorial.database.exec('INSERT INTO test VALUES (1, "Cory")');
  tutorial.database.exec('INSERT INTO test VALUES (2, "Nathan")');

  it("should select", function () {
    var result = tutorial.database.exec('SELECT * FROM test');
    expect(result).toEqual([{ id: 1, name: 'Cory' }, { id: 2, name: 'Nathan' }]);
  });

  it("should error", function () {
    expect(() => {
      tutorial.database.exec('SELECT * FROM this_table_does_not_exist');
    }).toThrowError();
  });

});

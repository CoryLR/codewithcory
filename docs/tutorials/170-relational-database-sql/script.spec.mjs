
import { Tutorial } from './script.mjs';

describe("tutorials/170-relational-database-sql", function () {

  var tutorial = new Tutorial();

  it("should be created", function () {
    expect(tutorial).toBeInstanceOf(Tutorial);
  });
});

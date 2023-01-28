
/*
Imports provided via HTML script tags available on the top-level `this` object:
- alasql
*/

class Tutorial {

  /**
   * Functionality for the interactive relational database & sql tutorial
   * @param { AlaSQL } alasql - AlaSQL JavaScript library
   */
  constructor(alasql, initDom = false) {
    this.alasql = alasql;
    this.database = new this.alasql.Database();
    if (initDom) {
      this.initSqlListeners();
    }
  }

  initSqlListeners() {
    document.querySelectorAll('.sql-component').forEach((sqlElement) => {

      sqlElement.querySelector('button.run').addEventListener('click', (event) => {
        const sqlString = sqlElement.querySelector('textarea').value;
        this.runSql(sqlElement, sqlString);
      });

      // TODO: Make Reset Database button functional
      sqlElement.querySelector('button.reset').addEventListener('click', (event) => {
        const resetId = Number(event.target.getAttribute('data-reset-id'));
        this.restoreDatabaseToPoint(resetId);
      });

    });
  }

  runSql(sqlElement, sqlString) {
    console.log('Running SQL: ', sqlString);
    const resultElement = sqlElement.querySelector('[data-sql-result]');
    try {
      const result = this.database.exec(sqlString);
      if (result && Object.keys(result).length > 0) {
        this.showSqlResult(resultElement, result);
        console.log(sqlString.trim().slice(0, 12).toLocaleLowerCase());
      } else {
        this.showSqlError(resultElement, 'Successful, nothing to show.');
      }
      if (sqlString.trim().slice(0, 12).toLocaleLowerCase() === 'create table') {
        this.updateListOfDatabaseTables();
      }
    } catch (error) {
      this.showSqlError(resultElement, error);
    }
  }

  showSqlResult(resultElement, resultObject) {
    const resultHtmlTable = this.createTableElementFromObject(resultObject);
    resultElement.replaceChildren();
    resultElement.appendChild(resultHtmlTable);
  }

  showSqlError(resultElement, error) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.appendChild(document.createTextNode(error));
    resultElement.replaceChildren();
    resultElement.appendChild(errorElement);
  }

  updateListOfDatabaseTables() {
    const tables = this.database.exec('SHOW TABLES');
    const resultHtmlTable = this.createTableElementFromObject(tables);
    document.querySelectorAll('.list-of-db-tables').forEach((element) => {
      element.replaceChildren();
      element.appendChild(resultHtmlTable);
    })
  }

  /**
   * @param { Number } resetId 
   */
  restoreDatabaseToPoint(resetId) {
    this.database = new this.alasql.Database();
    const sqlCommands = this.getSqlCommands();
    for (const sqlCommand of sqlCommands) {
      if (sqlCommand.id < resetId) {
        this.database.exec(sqlCommand.sql);
      } else {
        break;
      }
    }
    this.updateListOfDatabaseTables();
  }

  getSqlCommands() {
    return [
      { id: 1, sql: `
        CREATE TABLE animals (
        ID INT PRIMARY KEY AUTOINCREMENT,
        NAME STRING,
        SPECIES STRING,
        ROOM INT
      )` },
      { id: 2, sql: `
        CREATE TABLE rooms (
        ID INT PRIMARY KEY AUTOINCREMENT,
        CAPACITY INT
      )` },
    ];
  }

  createTableElementFromObject(data) {
    const table = document.createElement("table");
    const header = document.createElement("tr");
    const keys = Object.keys(data[0])
    console.log(keys)
    for (const key of keys) {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(key));
      header.appendChild(th);
    }
    table.appendChild(header);
    const len = data.length
    for (const row of data) {
      const tr = document.createElement("tr");
      for (const key of keys) {
        const td = document.createElement("td");
        const content = row[key] || ''
        td.appendChild(document.createTextNode(content));
        tr.appendChild(td);
        delete row[key]
      }
      for (const key in row) {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(key))
        keys.push(key)
        header.appendChild(th);
        const td = document.createElement("td");
        const content = row[key] || ''
        td.appendChild(document.createTextNode(content));
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return table
  }

}

if (this.window) {
  new Tutorial(this.alasql, true);
  console.info('Tutorial functionality loaded.');
} else {
  this.Tutorial = Tutorial;
}


import * as initSqlJs from 'sql.js';

export class Tutorial {

  constructor() {
    this.database = null;
    this.startDatabase();
  }

  async startDatabase() {
    const sqlPromise = initSqlJs({
      locateFile: file => 'assets/sql-wasm.wasm'
    });
    const dataPromise = fetch("/path/to/database.sqlite").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    this.database = new SQL.Database(new Uint8Array(buf)); this.database = new SQL.Database();
  }

}

new Tutorial();

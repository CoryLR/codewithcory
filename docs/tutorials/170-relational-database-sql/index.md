---
title: Intro DBs & SQL
---
<link rel="stylesheet" href="../../src/main.css" />
<link rel="stylesheet" href="./style.css" />
<script src="../../src/assets/alasql.min.js" defer></script>
<script src="./script.js" defer></script>

[← Code With Cory (Home)](../../index.md)

# Introduction to Relational Databases and SQL

What is a "relational database"? What does SQL have to do with it? What's the big deal? Read on to find out.

- [Introduction to Relational Databases and SQL](#introduction-to-relational-databases-and-sql)
  - [1) Relational Database Core Concepts](#1-relational-database-core-concepts)
    - [1.1) Database Tables](#11-database-tables)
    - [1.2) Database Relationships](#12-database-relationships)
  - [2) SQL](#2-sql)
    - [2.1) SQL Syntax For Creating Database Tables](#21-sql-syntax-for-creating-database-tables)
    - [2.2) Create Database Tables With SQL](#22-create-database-tables-with-sql)
    - [2.3) SQL Syntax For Inserting Data](#23-sql-syntax-for-inserting-data)
    - [2.4) Insert (Add) Data With SQL](#24-insert-add-data-with-sql)
    - [2.5) SQL Syntax For Selecting / Viewing Data](#25-sql-syntax-for-selecting--viewing-data)
    - [2.6) Select (View) Data With SQL](#26-select-view-data-with-sql)
  - [Work in Progress](#work-in-progress)
  - [Test Area](#test-area)


## 1) Relational Database Core Concepts

### 1.1) Database Tables

A relational database, at its core, is just a group of tables that have something to do with one-another, like this:

<br/>
<div class="small-table">
  <label>Table: <code>animals</code> (that need homes)</label>
  <table>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>SPECIES</th>
      <th>ROOM_ID</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Howell</td>
      <td>Dog</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Chonk</td>
      <td>Cat</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hops</td>
      <td>Rabbit</td>
      <td>2</td>
    </tr>
  </table>
</div>

<div class="small-table">
  <label>Table: <code>rooms</code> (at the shelter)</label>
  <table>
    <tr>
      <th>ID</th>
      <th>CAPACITY</th>
    </tr>
    <tr>
      <td>1</td>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>50</td>
    </tr>
  </table>
</div>
<br/>

This example is of a simple Animal Shelter database, but the all the concepts in this tutorial can be applied to any relational database.


### 1.2) Database Relationships

🔑 Key Concept: **Relationships**

Notice how these tables have a relationship with one-another. Each animal has to have a place to stay within the shelter. In this case, the dog and cat are both kept in room #1 and the rabbit is kept in room #2. The most common kinds of relationships are:

1. **One-to-one (1:1) relationships** are when each row of two different tables match up with one, and only one, row from another table. An example could be an `animals` table and a `collars` table, each animal has one and exactly one collar.
2. **One-to-many (1:N) relationships** are when items from one table can have a relationship with multiple items from another table. The `animals` and `rooms` tables above are a good example of this, since one room can hold multiple animals, but one animal is not kept in multiple rooms.
3. **Many-to-many (N:N) relationships** are when the rows from two tables can have multiple relationships with each other. For example, this could be the case between an `animals` table and a `caretakers` table, since some animals at the shelter may require care from multiple caretakers, but caretakers may also take care of multiple different animals.

🔑 Key Concept: **Primary Key (PK)**

Relationships between database tables are tracked through identifier ("ID") fields. Notice how each table has its own unique ID field. In relational databases, all tables must have a way to uniquely identify each row of data.

🔑 Key Concept: **Foreign Key (FK)**

Notice how the `animals` table above has a `ROOM_ID` column that matches up to the `rooms` table's `ID` column. The `animals` table's `ROOM_ID` column is considered a **foreign key** (FK) because it keeps track of which animals are staying in which rooms by referencing the primary key of one of the rooms listed in the `rooms` table.

The presence of the `ROOM_ID` foreign key in the `animals` table is what creates a one-to-many relationship between the `rooms` and `animals` tables.


## 2) SQL

SQL (Structured Query Language) is specifically used to communicate with relational databases. You can use it to do all of the following and more:

* Create database tables
* Create, update, and delete table rows
* View tables and their data
* Create reports and summarize information from the database


### 2.1) SQL Syntax For Creating Database Tables

First, let's create the Animal Shelter database tables shown above.

Here is an example of an SQL command you can use to create a database table:

```sql
CREATE TABLE example_table (
  ID INT PRIMARY KEY AUTOINCREMENT,
  COLUMN1 INT,
  COLUMN2 STRING,
);
```

Let's break down the syntax:
* `CREATE TABLE` are the keywords telling SQL you want to create a table, and must be immediately followed by the name of the table, in this case `example_table`
* The parentheses `( ... )` you see near the beginning and end define where the **column definitions** go. Separate each column definition by a comma `,`.
* Each **column definition**, like `COLUMN1 INT`, consists of the name of the column followed by the **data type** that should be stored in that column. We see two common data types used here:
  * `INT` - this means **integer**, typically whole numbers
  * `STRING` - this means a **string of characters**, typically regular text like words and sentences.
* Note that the `ID` column also has some additional properties:
  * The `PRIMARY KEY` keywords signify that this column is the primary key and must be unique
  * The `AUTOINCREMENT` keyword makes it so that the `ID` column automatically assigns a new number to each new record

### 2.2) Create Database Tables With SQL

Here is an SQL command you can use to create the `animals` table from the example above:

```sql
CREATE TABLE animals (
  ID INT PRIMARY KEY AUTOINCREMENT,
  NAME STRING,
  SPECIES STRING,
  ROOM_ID INT
);
```

Type the full SQL command from above into the text box below and then click Run to create the table:

<div class="sql-component">
  <div>SQL Input</div>
  <textarea rows="7"></textarea>
  <br/>
  <button class="run">Run</button>
  <button class="reset" data-reset-id="1" title="">Restore Database To This Point</button>
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
  <br/><br/>
</div>

<details>
  <summary>Solution (click to expand):</summary>
  <p>Enter this into the text area, then click Run:</p>
<pre>
CREATE TABLE animals (
  ID INT PRIMARY KEY,
  NAME STRING,
  SPECIES STRING,
  ROOM_ID INT
)
</pre>
</details>

Once the `CREATE TABLE` SQL command is successfully run, you will see `animals` in the list of tables below:

<div class="list-of-db-tables">- None</div>

<br/><br/>

Next, write your own `CREATE TABLE` SQL command to create the `rooms` table as shown below.

<div class="small-table">
  <label>Table: <code>rooms</code> (at the shelter)</label>
  <table>
    <tr>
      <th>ID</th>
      <th>CAPACITY</th>
    </tr>
    <tr>
      <td>1</td>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>50</td>
    </tr>
  </table>
</div>
<br/>

<details>
  <summary>Hints (click to expand):</summary>
  <ul>
    <li>You do not need to create the row data yet, just the table.</li>
    <li>Note that you will need to pick a data type for the `CAPACITY` column. Choose the most appropriate between `INT` (number) and `STRING` (text).</li>
    <li>Don't forget to add `PRIMARY KEY` and `AUTOINCREMENT` to the `ID` column.</li>
  </ul>
</details>
<br/><br/>

<div class="sql-component">
  <div>SQL Input</div>
  <textarea rows="7"></textarea>
  <br/>
  <button class="run">Run</button>
  <button class="reset" data-reset-id="2" title="">Restore Database To This Point</button>
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
  <br/><br/>
</div>

<details>
  <summary>Solution (click to expand):</summary>
  <p>Enter this into the text area, then click Run:</p>
<pre>
CREATE TABLE rooms (
  ID INT PRIMARY KEY AUTOINCREMENT,
  CAPACITY INT
)
</pre>
</details>
<br/><br/>

Once the `CREATE TABLE` SQL command is successfully run, you will now also see `rooms` in the list of tables:

<div class="list-of-db-tables">- None</div>



### 2.3) SQL Syntax For Inserting Data

Data is added to the database using the SQL `INSERT INTO` command. Here's an example:

```sql
INSERT INTO example_table(COLUMN1, COLUMN2)
VALUES
  (3, 'Musketeers'),
  (9, 'Lives')
  (99, 'Bottles of beer on the wall')
;
```

This example `INSERT` statement will add **3 new rows** to the `example_table` table.

Let's break down the syntax:

* The first line, following `INSERT INTO`, directs which table and which columns of that table we want to add data to
* The data that you want to add to the table comes after the `VALUES` keyword
* It's important to note that the order of the column names, like `(COLUMN1, COLUMN2)` needs to match with the order of the data being inserted, like `(3, 'Musketeers')`. When this row is added to the table, the integer number `3`  will be inserted under the `COLUMN1` column, and the string text `'Musketeers'` will be inserted under the `COLUMN2` column.

<!-- * The `VALUES` of Izzy's heart are as follows: Cory, Taco Bamba, Cinnamon rolls, rum & coke, cats, and nature.  -->

<!-- INSERT INTO example_table(COLUMN1, COLUMN2)
VALUES(99, 'Problems') -->


### 2.4) Insert (Add) Data With SQL

Here is an SQL command you can use to add a few rows of data to the `animals` table:

```sql
INSERT INTO animals (NAME, SPECIES, ROOM_ID)
VALUES
  ('Howell', 'Dog', 1),
  ('Chonk', 'Cat', 1),
  ('Hops', 'Rabbit', 2)
;
```

Type the full SQL command from above into the text box below and then click Run to insert the rows into the `animals` table:

<div class="sql-component">
  <div>SQL Input</div>
  <textarea rows="7"></textarea>
  <br/>
  <button class="run">Run</button>
  <button class="reset" data-reset-id="3" title="">Restore Database To This Point</button>
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
  <br/><br/>
</div>

<details>
  <summary>Solution (click to expand):</summary>
  <p>Enter this into the text area, then click Run:</p>
<pre>
INSERT INTO animals (NAME, SPECIES, ROOM_ID)
VALUES
  ('Howell', 'Dog', 1),
  ('Chonk', 'Cat', 1),
  ('Hops', 'Rabbit', 2)
;
</pre>
</details>


Next, write your own `INSERT` SQL command to add some rows to the `rooms` table as shown below.

<div class="small-table">
  <label>Table: <code>rooms</code> (at the shelter)</label>
  <table>
    <tr>
      <th>ID</th>
      <th>CAPACITY</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>50</td>
    </tr>
  </table>
</div>
<br/>

<details>
  <summary>Hints (click to expand):</summary>
  <ul>
    <li>Reference the `INSERT` example shown above for the `animals`, but modify it for the `rooms` table. You will want to make sure to change the table name, column names, and values.</li>
    <li>Don't forget that the order of the column names should match the order of the values, this is how SQL knows which data to put under which table columns.</li>
  </ul>
</details>
<br/><br/>

<div class="sql-component">
  <div>SQL Input</div>
  <textarea rows="7"></textarea>
  <br/>
  <button class="run">Run</button>
  <button class="reset" data-reset-id="4" title="">Restore Database To This Point</button>
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
  <br/><br/>
</div>

<details>
  <summary>Solution (click to expand):</summary>
  <p>Enter this into the text area, then click run:</p>
<pre>
INSERT INTO rooms (CAPACITY)
VALUES (2), (50);
</pre>
</details>
<br/><br/>

### 2.5) SQL Syntax For Selecting / Viewing Data

Here is a simple SQL `SELECT` query:

```sql
SELECT COLUMN1, COLUMN2 FROM example_table;
```

Let's break down the syntax:

* The `SELECT` keyword tells SQL that we want to see data stored in the database
* The next part, `COLUMN1, COLUMN2`, describes which columns we want to see
* Finally, `FROM example_table` describes which table we want to see the data from

The output of this SELECT query would be a table with 2 columns showing all rows in the table.

```sql
SELECT * FROM example_table;
```

### 2.6) Select (View) Data With SQL

Try the following SELECT commands in the SQL input box below and see how the output changes:

* `SELECT * from animals;`
  * You should see all rows and all columns from the `animals` table
* `SELECT SPECIES, ROOM_ID from animals;`
  * Now you should only see what kinds of animals are in each room
* `SELECT ID, NAME, SPECIES, ROOM_ID from animals;`
  * This should see the *exact same* output as `SELECT * from animals;` because we've listed out all the possible columns

<div class="sql-component">
  <div>SQL Input</div>
  <textarea rows="7"></textarea>
  <br/>
  <button class="run">Run</button>
  <button class="reset" data-reset-id="5" title="">Restore Database To This Point</button>
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
  <br/><br/>
</div>


<br/><br/>

## Work in Progress

The rest of this tutorial is still a work in progress

<br/><br/>
<br/><br/>


## Test Area

<div class="sql-component">

  <div>SQL Input</div>

  <textarea rows="7"></textarea>

  <br/>
  <button class="run">Run</button>
  <button class="reset" data-reset-id="99" title="">Restore Database To This Point</button>
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
  <br/><br/>
</div>


---
title: Intro DBs & SQL
---
<link rel="stylesheet" href="../../src/main.css" />
<link rel="stylesheet" href="./style.css" />
<script src="../../src/assets/alasql.min.js" defer></script>
<script src="./script.js" defer></script>

[← Code With Cory (Home)](../../index.md)

# Introduction to Relational Databases & SQL

What is a "relational database"? What does SQL have to do with it? What's the big deal? Read on to find out.

## 1) Relational Database Core Concepts

### 1.1) Database Tables

A relational database, at its core, is just a group of tables that have something to do with one-another, like this:

<br/><br/>
<div class="small-table">
  <label>Table: <code>animals</code> (that need homes)</label>
  <table>
    <tr>
      <th>PET_ID</th>
      <th>NAME</th>
      <th>SPECIES</th>
      <th>ROOM</th>
    </tr>
    <tr>
      <td>0</td>
      <td>Howell</td>
      <td>Dog</td>
      <td>0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Chonk</td>
      <td>Cat</td>
      <td>0</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Hops</td>
      <td>Rabbit</td>
      <td>1</td>
    </tr>
  </table>
</div>

<div class="small-table">
  <label>Table: <code>rooms</code> (at the shelter)</label>
  <table>
    <tr>
      <th>ROOM_ID</th>
      <th>CAPACITY</th>
    </tr>
    <tr>
      <td>0</td>
      <td>3</td>
    </tr>
    <tr>
      <td>1</td>
      <td>50</td>
    </tr>
  </table>
</div>
<br/><br/>

This example is of a simple Animal Shelter database, but the all the concepts in this tutorial can be applied to any relational database.


### 1.2) Database Relationships

🔑 Key Concept: Relationships

Notice how these tables have a relationship with one-another. Each animal has to have a place to stay within the shelter. In this case, the dog and cat are both kept in room #0 and the rabbit is kept in room #1. The most common kinds of relationships are:

1. **One-to-one (1:1) relationships** are when each row of two different tables match up with one, and only one, row from another table. An example could be an `animals` table and a `collars` table, each animal has one and exactly one collar.
2. **One-to-many (1:N) relationships** are when items from one table can have a relationship with multiple items from another table. The `animals` and `rooms` tables above are a good example of this, since one room can hold multiple animals, but one animal is not kept in multiple rooms.
3. **Many-to-many (N:N) relationships** are when the rows from two tables can have multiple relationships with each other. For example, this could be the case between an `animals` table and a `caretakers` table, since some animals at the shelter may require care from multiple caretakers, but caretakers may also take care of multiple different animals.

🔑 Key Concept: Primary Key (PK)

Relationships between database tables are tracked through identifier ("ID") fields. Notice how each table has its own unique ID field. In relational databases, all tables must have a way to uniquely identify each row of data.

🔑 Key Concept: Foreign Key (FK)

Notice how the `animals` table above has a `ROOM` column that matches up to the `rooms` table's `ROOM_ID` column. The `animals` table's `ROOM` column is considered a **foreign key** (FK) because it keeps track of which animals are staying in which rooms by referencing the primary key of one of the rooms listed in the `rooms` table.

The presence of the `ROOM` foreign key in the `animals` table is what creates a one-to-many relationship between the `rooms` and `animals` tables.


## 2) SQL

SQL (Structured Query Language) is a language specifically used to communicate with relational databases. You can use it to do all of the following and more:

* Create database tables
* Create, update, and delete table rows
* View tables and their data
* Create reports and summarize information from the database

### 2.1) Create Database Tables

First, let's create the Animal Shelter database tables shown above.

Here is the SQL command you can use to create your first database table:

```sql
CREATE TABLE animals (
  PET_ID INT PRIMARY KEY,
  NAME STRING,
  SPECIES STRING,
  ROOM INT
)
```

Let's break this down:
* `CREATE TABLE` are the keywords telling SQL you want to create a table, and must be immediately followed by the name of the table, in this case `animals`
* The parentheses `( ... )` you see near the beginning and end define where the **column definitions** go. Separate each column definition by a comma `,`.
* Each **column definition**, like `NAME STRING`, consists of the name of the column followed by the **data type** that should be stored in that column. We see two common data types used here:
  * `INT` - this means **integer**, typically whole numbers
  * `STRING` - this means a **string of characters**, typically regular text like words and sentences.
* Note that the `PET_ID` column also has the `PRIMARY KEY` keywords to signify that this column is the primary key and must be unique

Next, type the full `CREATE TABLE` from above into the text box below to create the table:

<div class="sql-component">
  <div>SQL Input</div>
  <textarea rows="7"></textarea>
  <br/>
  <button class="run">Run</button>
  <!-- <button class="reset" data-reset-id="1">Reset Database</button> -->
  <br/><br/>
  <div>SQL Output:</div>
  <div data-sql-result></div>
</div>

<br/>
<br/>

If the `CREATE TABLE` SQL command was successful, you will see `animals` in the list of tables below:

<div class="list-of-db-tables">- None</div>
---
title: Intro DBs & SQL
---
<link rel="stylesheet" href="../../src/main.css" />
<script src="./bundle.js" defer></script>

[← Code With Cory (Home)](../../index.md)

# Introduction to Relational Databases & SQL

What is a "relational database"? What does SQL have to do with it? What's the big deal? Let's find out!

![]()

## 1) Relational Database Core Concepts

### 1.1) Database Tables

A relational database, at its core, is just a group of tables that have something to do with one-another, like this:

<div class="small-table">
  <label>Table: <code>animals_needing_homes</code></label>
  <table>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>SPECIES</th>
      <th>TEMPERAMENT</th>
    </tr>
    <tr>
      <td>0</td>
      <td>Howell</td>
      <td>Dog</td>
      <td>Friendly, but loud</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Hops</td>
      <td>Rabbit</td>
      <td>A bit jumpy</td>
    </tr>
  </table>
</div>

<div class="small-table">
  <label>Table: <code>TODO</code></label>
  <table>
    <tr>
      <th>ID</th>
      <th>?</th>
      <th>?</th>
      <th>?</th>
    </tr>
    <tr>
      <td>0</td>
      <td>?</td>
      <td>?</td>
      <td>?</td>
    </tr>
    <tr>
      <td>1</td>
      <td>?</td>
      <td>?</td>
      <td>?</td>
    </tr>
  </table>
</div>



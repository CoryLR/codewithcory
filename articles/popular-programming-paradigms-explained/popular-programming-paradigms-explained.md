
[← Code With Cory - Home](../../README.md#code-with-cory)

# Popular Programming Paradigms Explained

Imperative vs. Declarative vs. Procedural vs. Object-Oriented (OOP) vs. Functional

Knowing these paradigm styles will help you read and write code more effectively. Here’s an introduction with examples and terminology.

If there’s a particular paradigm you’re interested in, like Object-Oriented Programming (OOP), feel free to skip to that section for an introduction.

![](./assets/Programming%20Paradigms%20Word%20Cloud%20-%20Transparent%20Background%20-%20Cory%20Leigh%20Rahman.png)


Table of Contents

- [Popular Programming Paradigms Explained](#popular-programming-paradigms-explained)
  - [1) Intro: What is a "programming paradigm"?](#1-intro-what-is-a-programming-paradigm)
  - [2) Imperative and Declarative Programming](#2-imperative-and-declarative-programming)
  - [3) Procedural Programming](#3-procedural-programming)
    - [Key take-aways for procedural programming](#key-take-aways-for-procedural-programming)
  - [4) Object-Oriented Programming (OOP)](#4-object-oriented-programming-oop)
    - [Key take-aways for object-oriented programming](#key-take-aways-for-object-oriented-programming)
  - [5) Functional Programming (FP)](#5-functional-programming-fp)
    - [Key take-aways for functional programming](#key-take-aways-for-functional-programming)
  - [6) Wrap-Up \& Resources](#6-wrap-up--resources)

---

## 1) Intro: What is a "programming paradigm"?

A programming paradigm is a strategy for writing code that aims to produce more stable, understandable, or reusable code by following the paradigm’s set of guiding principles.

Programming paradigms are often used to:

1. Describe ways to organize code
2. Help classify programming languages based on their features

Different paradigms have developed over time based on collective ideas and lessons-learned from past programmers. This is why paradigms typically constrain code in a helpful way.

It’s important to note that these paradigms can be used strictly on their own but are often combined together in modern, high-level, multi-paradigm languages like JavaScript and Python. Even if you don’t strictly adhere to a particular paradigm, the strategies you learn from from the different paradigms will make you a better programmer overall.

## 2) Imperative and Declarative Programming

Imperative and declarative programming are old, broad, polar opposite paradigms often used today to describe other programming paradigms. They differ in that imperative programming tells the computer step-by-step how to do something, while declarative programming declares an end-result and lets the computer figure out how to achieve it.

![](./assets/imperative-declarative.jpg)

**Imperative programming** uses [statements](https://en.wikipedia.org/wiki/Statement_(computer_science)) which describe how to change a program’s state step-by-step. Here is an example of imperative programming:

```javascript
var name = "Lea"
var greeting = "Hi!";
var message = name + " says " + greeting;
// Result: The message is "Lea says Hi!"
```

* This JavaScript code shows a series of statements which change the state of the program
* [Control flow](https://en.wikipedia.org/wiki/Control_flow) is often achieved using [conditional branching](https://en.wikipedia.org/wiki/Conditional_(computer_programming)) (like `if`, `else`) and loops (like `for` or `while`)
* Imperative programming is the oldest and closest to machine language which is why a lot of low-level programming languages like assembly are considered imperative programming languages

**Declarative programming** describes *what* the intent of a program is, as opposed to describing how to do it. Here is an example of declarative programming:

```sql
SELECT name, greeting
FROM people_table
WHERE name='Lea'
-- Result: Lea | Hi!
```

* This SQL code describes what we want, not how to get it
* Declarative programming is sometimes used as an umbrella term to describe code that isn’t imperative
* Other examples of declarative languages include HTML, CSS, and regex

---

## 3) Procedural Programming

In procedural programing, reusable groups of code called procedures or functions are used to change the state of the program. It is considered a type of imperative programing.

Here is an example of procedural programming:

```javascript
var message = "";
function updateMessage(person, greeting) {
    message = person + " says " + greeting;
}

updateMessage("Lea", "Hi!");
// Result: The message is "Lea says Hi!"
```

First we define a variable named `message` and a procedure to change it named `updateMessage` (defined using the `function` keyword since this is JavaScript). The procedure `updateMessage` is called (activated) using parentheses like this `updateMessage("Lea", "Hi!");` - it accepts two text arguments, "Lea" and "Hi!", assigns them to its parameter variables (`person` and `greeting`) based on order, then changes the value of message to "Lea says Hi!". We could call this procedure again with different arguments to change the message a second time, like so:

```javascript
updateMessage("Lukas", "Hey");
// Result: The message changed to "Lukas says Hey"
```

Note how the result will be `"Lukas says Hey"` instead of `"Lea says Hi!"`.

Procedures and functions also have the option to return a calculated value, for example:

```javascript
function getMessage(person, greeting) {
    return person + " says " greeting;
}
newMessage = getMessage("Emilie", "Bonjour!")
// Result: newMessage is "Emilie says Bonjour!"
```

Common procedural programing terminology:

* [Procedure / subroutine / function](https://en.wikipedia.org/wiki/Subroutine): a group of code which can be remotely activated
* Call: means to activate a procedure
* Parameters: variables that define what input data can be given to a procedure
* Arguments: the input data provided to a procedure and assigned to its parameters
* `return`: a common keyword for defining the output from a procedure or function

### Key take-aways for procedural programming

Use procedural programming to make your code more:

* Understandable (by using well-named procedures to add logical separations)
* [Reusable](https://en.wikipedia.org/wiki/Reusability) (by using the same procedures multiple times and using procedure arguments to use them in different ways)

---

## 4) Object-Oriented Programming (OOP)

By making code resemble real-world objects, object-oriented programming makes code easier to think about. It’s all about organizing concepts in an understandable way.

![](./assets/OOP-People.png)

The **Class** and **Object** data structures are the cornerstones of object-oriented programming. In OOP, a Class is a blueprint which you can create Objects from. For example, if you had a Class blueprint called “Person” you might be able to create different people like Lea and Lukas from the “Person” blueprint.

Here is an example of object-oriented programming (OOP) using JavaScript. In this example our goal is to make a person named Lea say “Hi!”. We start by defining a class (a blueprint) called `Person`. The `Person` class will contain a **constructor**, two **properties** and a **method**:

* Person **constructor** (used to create an object from the class): `constructor`
* Person **properties** (attributes stored as variables): `name` and gree`ting
* Person **method** (behavior stored as functions): `greet()`

```javascript
class Person {
   constructor(name, greeting) {
       this.name = name;
       this.greeting = greeting;
   }
   greet() {
       console.log(this.name + " says " + this.greeting);
   }
}
```

Next we can create a “Lea” object from our `Person` Class:

```javascript
var leaObject = new Person("Lea", "Hi!");
```

This line creates a Lea object using the `Person` class as a blueprint. Because of how the `constructor` method of the class is written, the first argument (“Lea”) gets assigned to the `name` property, and the second argument (“Hi!”) gets assigned to the `greeting` property.

```javascript
leaObject.greet();
// Result: "Lea says Hi!"
```

Line 11 calls `leaObject`’s `greet()` function to make Lea say “Hi!”. Notice the “dot” notation: a period (`.`) is a common syntax used to access a property or method inside the preceding object. In this case we are calling the `greet` method, a function that is part of `leaObject`.

We can also use the `Person` class to easily create more people, all of which have their own `greet()` method already built-in:

```javascript
var lukasObject = new Person("Lukas", "Hallo!");
var emilieObject = new Person("Emilie", "Bonjour!");

lukasObject.greet();  // Result: "Lukas says Hallo!"
emilieObject.greet(); // Result: "Emilie says Bonjour!"
```

Another common, but more advanced, feature of OOP is **inheritance**. You can also use inheritance to create a Class based on another Class. Below we make a more specific kind of Person called a Player who has all the same properties and methods as Person, but some additional ones as well:

```javascript
class Player extends Person {
    constructor(name, greeting, score) {
        super(name, greeting);
        this.score = score;
    }
    sayScore() {
        console.log(this.name + "'s score is " + this.score)
    }
}

const tobyObject = new Player("Toby", "Hello", 90);

tobyObject.greet(); // Result: "Toby says Hello"
tobyObject.sayScore(); // Result: "Toby's score is 90"
```

Because the `Player` class extends the `Person` class, the new `tobyObject` has the properties and methods of both a Person and a Player. The `super` statement in line 20 provides these from the `Person` class. Inheritance makes writing new Classes easy and helps organize the relationship between them in an intuitive way.

Common OOP terminology:

* Class: a blueprint for creating logical groups of code
* Object: an entity created from a class blueprint
* Property: a variable that is part of a Class or Object that describes an aspect or state of the Object
* Method: a function that is part of a Class or Object and allows it to act
* `constructor`: a common term and keyword for a special method only used to create Objects from a Class
* `this` or `self`: common keywords to refer to other parts of the same Object from within
* Encapsulation: data and the methods (Functions) to operate on them are bundled together in Objects and provide a public interface to control how the data and methods are used
* Abstraction: hide complex functionality behind an easier to use interface such as public metohds (functions) in a class
* Inheritance: a new Class can be created based on another Class; the new derived class inherits all the base Class’s properties and methods
* Polymorphism: this is a larger topic in programming that allows programmers to use the same interface in different context to make things easier for us. One example in OOP we can have one method (function) change behavior depending on which object it's called from. For example let's say we have a `Shape` class, then extend it using inheritance to make a more specific `Circle` class. If the `Shape class` had a `draw()` method, we can now call `.draw()` on both `Shape` objects *and* `circle` objects. In this example, the `draw()` method is our "same interface" that changes behavior based on its context.

### Key take-aways for object-oriented programming

Use object-oriented programming to make your code more:

* Understandable (by grouping behavior into Classes and Objects and providing clear relationships between different parts of the program)
* [Reusable](https://en.wikipedia.org/wiki/Reusability) (by using Classes to generate Objects, and by using [Inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) & [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) to reuse Classes and their methods)
* Stable (by [encapsulating](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) and protecting code inside Objects, and by providing clear endpoints for automated testing, improving [refactorability](https://en.wikipedia.org/wiki/Code_refactoring))

---

## 5) Functional Programming (FP)

Functional programming takes a declarative approach, focusing on **pure**, **first-class** functions which accept **arguments**, **return** results, and use **immutable** data. This section will focus primarily on key aspects of Functional Programming that you can incorporate into other codebases, rather than strict FP.

Here is an example demonstrating some functional programming concepts:

```javascript
function makeIntro(name) {
    return name + " says ";
}
function makeGreeting(makeIntroFunction, name, message) {
    return makeIntroFunction(name) + message;
}

makeGreeting(makeIntro, "Lea", "Hi!");
// Result: "Lea says Hi!"
```

Here we are defining two **pure**, **first-class** functions called `makeIntro` and `makeGreeting`:

* Both these functions are **pure** because they only use data from their parameters, they return an output, and they have no side effects. This increases their consistency and stability by making sure outside changes can't unexpectedly change the results.
* **First-class** functions can be passed as arguments to other functions. The `makeGreeting` function is called a **higher order** function because it accepts a first-class function as an argument.

Finally, the end is where all the action happens. The `makeGreeting` function is called (activated) and given the `makeIntro` function as an argument, which is then called within the `makeGreeting` function and combined with the `name` (`"Lea"`) and `message` (`"Hi!"`) to give a final result of `"Lea says Hi!"`.


Common functional programming terminology:

* Function: a procedure which performs a task and returns an output
* [First-class functions](https://en.wikipedia.org/wiki/First-class_function): when functions are treated like any other variable; they can be modified, assigned to variables, and even passed and returned through other functions (known as [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function))
* [Pure function](https://en.wikipedia.org/wiki/Pure_function): a function which 1) only uses data provided via its parameters, ensuring consistency (no **hidden inputs** like global variables), and 2) has no **side effects** (no **hidden outputs**)
* [Side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)): when a function changes or mutates anything outside the [scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope) of the function, circumventing the `return` statement (e.g. hidden outputs like **mutable** data and calls to procedural functions)
* Immutability, immutable and mutable data: mutable means something that's able to be mutated (changed), immutable means it can't be changed; in programming, avoiding or minimizing mutable data, like data stored in variables, can help make more consistent functionality and avoid errors based on unexpected changes

### Key take-aways for functional programming

Use functional programming to make your code more:

* Stable (by using **pure functions** to reduce the chance of runtime errors caused by **hidden inputs** and **hidden outputs** and by improving [refactorability](https://en.wikipedia.org/wiki/Code_refactoring) because of both of these benefits)
* Testable (by providing clear endpoints, inputs, and outputs for automated testing)
* [Reusable](https://en.wikipedia.org/wiki/Reusability) (by forcing functions to be more [modular](https://en.wikipedia.org/wiki/Modular_programming) and by allowing first-class functions to be passed as arguments for deep customization)
* Understandable (by making logic easier to follow through strict pure function parameters and by showing intent up-front)

---

## 6) Wrap-Up & Resources

Closing remarks:

* Multi-paradigm programming languages like JavaScript and Python support the use of all five of these popular programming paradigms, and often good software solutions use a combination of these styles. For example, sometimes using pure functions for OOP class methods can make code more testable and understandable.
* The five programming paradigms discussed in this article are currently some of the most used and talked about, but there are other related paradigms including Logic Programming and Structured Programming too.
* Try applying concepts from these paradigms to write more stable, understandable, and usable code.
* Happy coding!

Resources:

* [Comparison of programming paradigms (Wikipedia)](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)
* [Declarative programming (Wikipedia)](https://en.wikipedia.org/wiki/Declarative_programming)
* [Functional programming (Wikipedia)](https://en.wikipedia.org/wiki/Functional_programming)
* [Imperative programming (Wikipedia)](https://en.wikipedia.org/wiki/Imperative_programming)
* [Object-oriented programming (Wikipedia)](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [Procedural programming (Wikipedia)](https://en.wikipedia.org/wiki/Procedural_programming)
* [Programming paradigm (Wikipedia)](https://en.wikipedia.org/wiki/Programming_paradigm)


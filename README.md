# OOP in TS

## `public` keyword
<p>
    this mean i can access this class ,field , method from anywhere in my code.
</p>

## `private` keyword
<p>
    this mean i canot access this class ,field ,method from anywhere outside the class itself.
</p>

## `protected` keyword
<p>
    this mean i can access this class ,field ,method from anywhere in the class itself and in the derived classes (child classes).
</p>

## `static` keyword

```cs

class Counter
{
    public static int Count = 0;

    public Counter()
    {
        Count++; // shared by all objects
    }
}

// Usage:
var c1 = new Counter();
var c2 = new Counter();
Console.WriteLine(Counter.Count); // 2 (shared, not separate per object)

```

```cs
public static class MathHelper
{
    public static double Square(double x)
    {
        return x * x;
    }
}

// Usage:
double result = MathHelper.Square(5); // No "new", called on the class itself
//A static class cannot be instantiated (you can’t use new on it).
// WARN:
double result2 = new MathHelper().Square(5); // This will not compile

```
```cs
class Config
{
    public static string AppName;

    static Config()
    {
        AppName = "MyApp"; // runs once
    }
}
//Runs only once, before the class is used for the first time.
//Used to initialize static fields.
```
### method override 
<p>
    this is when child class implement the same method of the parent class
    but with different body 
</p>

### method  overload
<p>
    this is when you have multiple methods with the same name but different parameters (different type or number of parameters).
</p>

# Encapsulation vs Abstraction
## 🔒 Encapsulation

<p>Encapsulation is about hiding the internal state of an object and only exposing controlled access to it.
Example: A BankAccount class with a private balance and a setter method that prevents negative values.
</p>

```cs
public class BankAccount
{
    private decimal balance;

    public BankAccount(decimal initialBalance)
    {
        if (initialBalance >= 0)
            balance = initialBalance;
        else
            balance = 0;
    }

    // Encapsulation: controlled way to modify balance
    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount;
    }

    public void Withdraw(decimal amount)
    {
        if (amount > 0 && amount <= balance)
            balance -= amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}
```
<p>➡️ Here, the balance is private, and the class provides methods (Deposit, Withdraw) to safely modify it.
This ensures the balance cannot be negative or directly accessed from outside.
</p>

## 🎭 Abstraction

<p> Abstraction is about hiding implementation details and showing only the essential behavior.
We can achieve this using interfaces or abstract classes.

Example: An interface IBankAccount that defines what a bank account can do, but not how.
</p>

```cs
public interface IBankAccount
{
    void Deposit(decimal amount);
    void Withdraw(decimal amount);
    decimal GetBalance();
}

public class BankAccount : IBankAccount
{
    private decimal balance;

    public BankAccount(decimal initialBalance)
    {
        if (initialBalance >= 0)
            balance = initialBalance;
        else
            balance = 0;
    }

    public void Deposit(decimal amount)
    {
        if (amount > 0)
            balance += amount;
    }

    public void Withdraw(decimal amount)
    {
        if (amount > 0 && amount <= balance)
            balance -= amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}
```
<p>➡️ Here, when we look at IBankAccount, we know what the class can do (Deposit, Withdraw, GetBalance)
but we don’t see how it works internally. The implementation is hidden inside BankAccount.
</p>

```cs
// vehicle class inheret from car 
List<Object> objects = new List<Object>();
objects.Add(new Car("Object1", 10));
objects.Add(new Vehicle("Object2", 20, "Toyota"));

foreach (var obj in objects)
{

    if (obj is Vehicle vehicle)
    {
        vehicle.Drive(200);
    }
    else if (obj is Car car)
    {
        car.Drive(100);
    }
}
//the Car class is driving 100 miles.
//The Vehicle class is driving 200 miles.
// if we swap the two if conditions , the output will be 

foreach (var obj in objects)
{

     if (obj is Car car)
    {
        car.Drive(100);
    }
    else if (obj is Vehicle vehicle)
    {
        vehicle.Drive(200);
    }
}
// output
//the Car class is driving 100 miles.
//The Vehicle class is driving 100 miles.

```

### Coupling in OOP
<p>It measures how much one class relies on another to function, impacting the system's maintainability, flexibility, and reusability.
Types of Coupling
</p>

#### Tight Coupling:

<p>Classes are highly dependent on each other.
Changes in one class often require changes in another.
Example: A class directly accesses the internal fields of another class.
Drawbacks: Reduces flexibility, makes maintenance harder, and complicates testing.
</p>

#### Loose Coupling:

<p>Classes interact through well-defined interfaces or abstractions, minimizing direct dependencies.
Achieved using techniques like dependency injection, interfaces, or abstract classes.
Benefits: Enhances modularity, testability, and maintainability.
</p>



### Composition in OOP

<p>Composition is a design principle in OOP where a class is composed of one or more objects from other classes to achieve its functionality. It represents a "has-a" relationship, allowing for flexible and modular designs.
Key Characteristics
</p>

<p>Strong Ownership: The composite object owns the components, and their lifecycle is tied to the composite.
Flexibility: Components can be swapped or modified without affecting the composite class.
Reusability: Components can be reused across different classes.
</p>

### Composition vs. Inheritance

##### Composition: "Has-a" relationship, e.g., a Car has an Engine.
##### Inheritance: "Is-a" relationship, e.g., a Car is a Vehicle.
##### Composition is often preferred over inheritance because it promotes loose coupling and avoids the fragility of deep inheritance hierarchies.

```cs

class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Wheel {
    void rotate() {
        System.out.println("Wheel rotating");
    }
}

class Car {
    private Engine engine; // Composition: Car has an Engine
    private Wheel[] wheels; // Composition: Car has Wheels

    Car() {
        this.engine = new Engine();
        this.wheels = new Wheel[]{new Wheel(), new Wheel(), new Wheel(), new Wheel()};
    }

    void drive() {
        engine.start();
        for (Wheel wheel : wheels) {
            wheel.rotate();
        }
        System.out.println("Car is driving");
    }
}

```

#### Benefits of Composition

<p>Promotes loose coupling by allowing components to be independent.
Enhances flexibility, as components can be replaced or modified easily.
Simplifies testing by isolating components.
Avoids issues with deep inheritance, such as tight coupling to parent classes.
</p>


```cs

Practical Example
interface Engine {
    void start();
}

interface Wheel {
    void rotate();
}

class BasicEngine implements Engine {
    public void start() {
        System.out.println("Basic engine started");
    }
}

class BasicWheel implements Wheel {
    public void rotate() {
        System.out.println("Basic wheel rotating");
    }
}

class Car {
    private Engine engine;
    private Wheel[] wheels;

    Car(Engine engine, Wheel[] wheels) {
        this.engine = engine;
        this.wheels = wheels;
    }

    void drive() {
        engine.start();
        for (Wheel wheel : wheels) {
            wheel.rotate();
        }
        System.out.println("Car is driving");
    }
}

public class Main {
    public static void main(String[] args) {
        Engine engine = new BasicEngine();
        Wheel[] wheels = {new BasicWheel(), new BasicWheel(), new BasicWheel(), new BasicWheel()};
        Car car = new Car(engine, wheels);
        car.drive();
    }
}

```
## Polymorphism in OOP

<p>Polymorphism is a core principle of Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common base class or interface. It enables a single interface or method to work with different types of data or behaviors, making code more flexible and reusable. The term "polymorphism" means "many forms," reflecting how a single method call can produce different behaviors based on the object’s type.
</p>

### Types of Polymorphism
1. **Compile-time Polymorphism (Method Overloading)**:
   - Achieved by defining multiple methods with the same name but different parameters (type, number, or order).
   - The method to be called is determined at compile time based on the method signature.

```cs
public class MathUtils {
    // Method Overloading
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
```
2. **Runtime Polymorphism (Method Overriding)**:
   - Achieved through inheritance, where a subclass provides a specific implementation of a method that is already defined in its superclass.
   - The method to be called is determined at runtime based on the actual object type.

```cs
public class Animal {
    public virtual void makeSound() {
        Console.WriteLine("Animal makes a sound");
    }
}
public class Dog : Animal {
    public override void makeSound() {
        Console.WriteLine("Dog barks");
    }
}
```

## SOLID Principles

### S 
<p>
    Single responsibility principle (SRP): A class should have only one reason to change, meaning it should only have one job or responsibility.
</p>

### O
<p>
    Open/closed principle (OCP): Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
</p>

### L
<p>
    Liskov substitution principle (LSP): Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
</p>

### I
<p>
    Interface segregation principle (ISP): Clients should not be forced to depend on interfaces they do not use. Instead of one large interface, many small, specific interfaces are preferred.
</p>

### D
<p>
    Dependency inversion principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details; details should depend on abstractions.
</p>


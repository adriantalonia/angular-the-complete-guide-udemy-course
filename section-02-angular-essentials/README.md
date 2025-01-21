# Angular Essentials

This README provides a basic overview of Angular's essential concepts, including components, templates, and data binding. These are the building blocks for creating dynamic and interactive web applications with Angular.

---

## Table of Contents

- [Components](#components)
- [Templates](#templates)
- [Data Binding](#data-binding)
- [Key Differences Between Attributes and Properties](#key-differences-between-attributes-and-properties)

---

## Components

### What are Components?

Components are the foundational building blocks of Angular applications. Each component controls a portion of the user interface (UI) and contains the logic and data for that UI section.

### Structure of a Component

A component consists of:

- **TypeScript Class**: Contains the logic and data for the component.
- **HTML Template**: Defines the structure and layout of the UI.
- **CSS Styles**: Defines the appearance of the component.
- **Decorator**: The `@Component` decorator ties the component's logic to its template and styles.

### Example

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular Essentials";
}
```

```html
<!-- app.component.html -->
<h1>Welcome to {{ title }}!</h1>
```

---

## Templates

### What are Templates?

Templates define the HTML structure of a component. They can include standard HTML elements, Angular directives, and bindings to connect the view with the component's logic.

### Features of Templates

1. **Interpolation**: Insert dynamic content using `{{ }}`.
2. **Directives**: Add behavior like loops (`*ngFor`) or conditionals (`*ngIf`).
3. **Event Handling**: Respond to user interactions like clicks or keypresses.

### Example

```html
<!-- app.component.html -->
<div *ngIf="isVisible">
  <p>Hello, Angular!</p>
</div>
<button (click)="toggleVisibility()">Toggle Visibility</button>
```

```typescript
// app.component.ts
export class AppComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
```

---

## Data Binding

### What is Data Binding?

Data binding links the data from your component to the template, ensuring a dynamic and interactive user experience. Angular provides several types of data binding:

### Types of Data Binding

1. **Interpolation (`{{ }}`)**: Bind component data to the view as plain text.

   ```html
   <p>{{ title }}</p>
   ```

2. **Property Binding (`[property]`)**: Bind component data to element properties.

   ```html
   <img [src]="imageUrl" alt="Example" />
   ```

3. **Event Binding (`(event)`)**: Bind user actions to component methods.

   ```html
   <button (click)="onClick()">Click Me</button>
   ```

4. **Two-Way Binding (`[(ngModel)]`)**: Bind data both ways (requires `FormsModule`).
   ```html
   <input [(ngModel)]="name" placeholder="Enter your name" />
   <p>Hello, {{ name }}!</p>
   ```

### Example

```typescript
// app.component.ts
export class AppComponent {
  name = "Angular";

  onClick() {
    alert("Button clicked!");
  }
}
```

```html
<!-- app.component.html -->
<h1>{{ name }}</h1>
<input [(ngModel)]="name" placeholder="Update the name" />
<button (click)="onClick()">Alert</button>
```

---

## Key Differences Between Attributes and Properties

Attributes and properties in HTML are often confused, but they serve distinct purposes, especially in Angular development.

### Key Differences

| Aspect             | Attribute                                       | Property                                |
| ------------------ | ----------------------------------------------- | --------------------------------------- |
| **Location**       | Defined in the HTML markup.                     | Exists as a property of the DOM object. |
| **Static/Dynamic** | Static (initial value).                         | Dynamic (current value).                |
| **Access**         | Accessed via `getAttribute` and `setAttribute`. | Accessed directly as object properties. |
| **Examples**       | `id`, `class`, `type`, `value`.                 | `id`, `className`, `checked`, `value`.  |

### Example Showing the Difference

```html
<input id="example" value="Initial Value" />
<script>
  const input = document.getElementById("example");

  // Attribute access
  console.log(input.getAttribute("value")); // "Initial Value"

  // Property access
  console.log(input.value); // "Initial Value"

  // Change property
  input.value = "Updated Value";

  // Attributes don't change automatically
  console.log(input.getAttribute("value")); // "Initial Value"
  console.log(input.value); // "Updated Value"
</script>
```

## Using Getters in Angular

### Accessing Class Properties

Within a getter, use the `this` keyword to access class properties:

```typescript
get imagePath() {
  return this.selectedUser.avatar + '/static-part';
}
```

### Using Getters in Templates

A getter can be used like a property in the template without parentheses:

```html
<img [src]="imagePath" />
```

This simplifies the template while maintaining the same functionality.

---

## Adding Event Listeners in Angular
To add an event listener to an HTML element in Angular:
1. Go to the element in the template (e.g., a button).
2. Specify the event name (e.g., `click`) wrapped in parentheses:
   ```html
   <button (click)="methodName()">Click Me</button>
   ```
3. Use an equal sign (`=`) to assign the code or method to execute when the event occurs.

### Supported Events
- Angular supports a variety of DOM events (e.g., `click`, `keyup`, `keydown`, `mouseover`).
- Use your IDE's IntelliSense (e.g., `Ctrl + Space`) to view available events for a specific element.

---

## Defining Event Handler Methods
Event handlers are typically defined as methods in the component class. This approach keeps the template clean and the logic encapsulated.

### Example Syntax
```typescript
export class UserComponent {
  onSelectUser() {
    console.log('Clicked');
  }
}
```
- **Method Naming Convention:** Methods handling events often start with `on` (e.g., `onSelectUser`) for clarity, though this is not mandatory.
- Define methods as regular TypeScript/JavaScript functions with parentheses and curly braces.

---

## Connecting Events to Methods
To connect the template's event listener to a component method:
1. Use the method name in the template with parentheses as if you were calling it:
   ```html
   <button (click)="onSelectUser()">Click Me</button>
   ```
2. The method is executed only when the event occurs (e.g., clicking the button), not when the template is parsed.

---

## Code Example

### Component Class
```typescript
export class UserComponent {
  onSelectUser() {
    console.log('Clicked');
  }
}
```

### Template
```html
<button (click)="onSelectUser()">Click Me</button>
```

### Result
When the button is clicked:
- The `onSelectUser` method is executed.
- A message (`'Clicked'`) is logged to the browser's console.

---

## Key Takeaways
- **Declarative Syntax:** Use `(eventName)` syntax in templates to bind events.
- **Encapsulation:** Define event-handling logic in the component class for cleaner and more maintainable code.
- **Dynamic UI Updates:** Event listeners allow you to respond to user actions and update the UI dynamically.
- **Debugging Tip:** Use `console.log` in event handler methods to verify functionality during development.


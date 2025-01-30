// This code demonstrates the Composite Pattern.
// The Composite Pattern is a structural design pattern that organizes objects into tree structures,
// allowing us to treat individual objects and groups of objects in the same way.

// Let's take an example:

// Imagine you are building an e-commerce website with multiple categories.
// At the top level, there is a master category that contains various subcategories.
// Just as you add products to subcategories, you can also add subcategories to the master category.
// This approach follows the Composite Pattern, where the structure forms a tree or hierarchical format.

// Sample changes

import java.util.ArrayList;
import java.util.List;

// Common interface
interface Details {
    void showDetails();
}

// Product class
class Product implements Details {
    private String name;

    public Product(String name) {
        this.name = name;
    }

    @Override
    public void showDetails() {
        System.out.println("Product: " + name);
    }
}

// Category class

class Category implements Details {
    private String name;
    private List<Details> components = new ArrayList<>();

    public Category(String name) {
        this.name = name;
    }

    public void addComponent(Details component) {
        components.add(component);
    }

    @Override
    public void showDetails() {
        System.out.println("Category: " + name);
        for (Details component : components) {
            component.showDetails();
        }
    }
}


public class Main {
    public static void main(String[] args) {
        // Creating individual products
        Product laptop = new Product("Laptop");
        Product phone = new Product("Phone");
        Product charger = new Product("Charger");

        // Creating categories
        Category electronics = new Category("Electronics");
        Category accessories = new Category("Accessories");

        // Adding products to category
        electronics.addComponent(laptop);
        electronics.addComponent(phone);
        accessories.addComponent(charger);

        // Creating a main category that includes both other category
        Category mainStore = new Category("Main Category");
        mainStore.addComponent(electronics);
        mainStore.addComponent(accessories);

        // Display all categories and products
        mainStore.showDetails();
    }
}

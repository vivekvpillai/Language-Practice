public class Store {
  // instance fields. These are just variables setting up the main class.
  String productType;
  int inventoryCount;
  double inventoryPrice;

  // constructor method.
  public Store(String product, int count, double price) {
    productType = product;
    inventoryCount = count;
    inventoryPrice = price;
  }

  // main method. Void means it returns nothing. main is the main method of the class, which is kind of like the main functionality of the class.
  public static void main(String[] args) {
    Store lemonadeStand = new Store("lemonade", 42, .99);
    Store cookieShop = new Store("cookies", 12, 3.75);

    System.out.println("Our first shop sells " + lemonadeStand.productType + " at " + lemonadeStand.inventoryPrice + " per unit.");

    System.out.println("Our second shop has " + cookieShop.inventoryCount + " units remaining.");
  }
}

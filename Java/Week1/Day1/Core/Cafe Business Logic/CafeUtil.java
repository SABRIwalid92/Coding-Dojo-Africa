import java.util.ArrayList;

public class CafeUtil {
    


  
    public int getStreakGoal(){
        int sum = 0;
        
        for(int i = 0;i<=10;i++){
            sum +=i;
        }
        return sum;
    }
    public int getStreakGoal(int numWeeks){
        int sum = 0;

        for(int i = 0;i<=numWeeks;i++){
            sum +=i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        int total = 0;
        for(double i : prices){
            total += i;
        }
        return total;
    }
    public void displayMenu(ArrayList<String> menuItems){
        for(String item:menuItems){
            System.out.println(menuItems.indexOf(item) + " " + item);
              
        }
    }
    
    public void addCustomer(ArrayList<String> customers){
        System.out.print("Please enter your name:");
        String username = System.console().readLine();
        System.out.println("Hello, " + username +"!");
        System.out.println("There are "+ customers.size() +" people in front of you");
        customers.add(username);
        System.out.println(customers);

    }



}

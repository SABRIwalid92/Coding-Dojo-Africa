
public class Gorilla extends Mammal {

	public Gorilla() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void throwSomething() {
		this.setEnergy(this.getEnergy() - 5);
		System.out.println("[SOMETHING THROWN] HOU HOU HOU!!");
	}
	public void eatBananas() {
		this.setEnergy(this.getEnergy() + 10);
		System.out.println("[EATS BANANAS] HOU HOU HA!!");
	}
	public void climb() {
		this.setEnergy(this.getEnergy() - 5);
		System.out.println("[GORILLA CLIMBS A TREE] HOU HA HOUHOU!!");
	}
	
}

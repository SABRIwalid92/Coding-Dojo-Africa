
public class Bat extends Mammal {

	public Bat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void fly() {
		this.setEnergy(this.getEnergy() - 50);
		System.out.println("[BAT IS AIRBORNE]");
	}
	public void eatHumans() {
		this.setEnergy(this.getEnergy() + 25);
		System.out.println("[BAT FEEDS FROM A HUMAN!!] [BACKFLIPS 🦇💨🦇💨🦇💨🦇 !!]");
	}
	public void attackTown() {
		this.setEnergy(this.getEnergy() - 100);
		System.out.println("[BAT ATTACK EVERYONE!!]");
	}
}

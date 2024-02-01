import java.text.SimpleDateFormat;
import java.util.Date;
import java.text.SimpleDateFormat;

public class AlfredQuotes {

    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?\n\n";
    }

    public String guestGreeting() {
        // YOUR CODE HERE
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("H:m");

        String time = formatter.format(now);
        //if time is after TimeRefrence, compareTo ===> (+)
        //if time is before TimeRefrence, compareTo ===> (-)
        boolean isAfterMorning = time.compareTo("05:00") >=0;
        boolean isbeforeAfternoon = time.compareTo("12:00") <0;
        String dayPeriod = isAfterMorning && isbeforeAfternoon? "morning":"DAY!!";
        return "Good " + dayPeriod + ". \n\n";
    }

    public String guestGreeting(String name, String dayPeriod) {

        return "Good " + dayPeriod + ", " + name + ". Lovely o see you. \n\n";
    }

    public String guestGreeting(String name) {

        return "Hello, " + name + ". Lovely to see you. \n\n";
    }

    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date Now = new Date();

        return "It is currently " + Now + "\n\n";
    }

    public String

    respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        return conversation.indexOf("Alexis") >= 0?"Right away, sir. She certainly isn't sophisticated enough for that. \n\n" : conversation.indexOf("Alfred") >= 0 ?"At your service. As you wish, naturally.\n\n":"Right. And with that I shall retire. \n\n";
    }

    // NINJA BONUS
    // See the specs to overload the guestGreeting method
    // SENSEI BONUS

    // Write your own AlfredQuote method using any of the String methods you have
    // learned!
}

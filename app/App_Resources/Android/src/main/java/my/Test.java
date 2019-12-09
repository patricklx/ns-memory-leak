package my.Test;

public class Test {
    private java.util.Timer timer;

    public void run() {
        this.timer = new java.util.Timer();
        Test test = this;
        java.util.TimerTask task = new java.util.TimerTask() {
            @Override
            public void run() {
                test.invoke(test.getValue());
            }
        };
        timer.scheduleAtFixedRate(task, 0, 5);
    }

    public void stop() {
        timer.cancel();
    }

    public void invoke(StringBuilder arg) {

    }

    public StringBuilder getValue() {
        String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder builder = new StringBuilder();
        int count = 10000;
        while (count-- != 0) {
            int character = (int) (Math.random() * ALPHA_NUMERIC_STRING.length());
            builder.append(ALPHA_NUMERIC_STRING.charAt(character));
        }
        return builder;
    }
}

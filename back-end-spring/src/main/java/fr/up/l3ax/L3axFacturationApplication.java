package fr.up.l3ax;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class L3axFacturationApplication implements CommandLineRunner {

    @Override
    public void run(String... args) { 
        System.out.println("\n Hello L3ax-facturation");
    }

    /**
     * Main fonction
     * @param args     arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(L3axFacturationApplication.class, args);
    }

}

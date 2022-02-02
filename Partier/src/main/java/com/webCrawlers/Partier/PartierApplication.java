package com.webCrawlers.Partier;

import com.webCrawlers.Partier.event_creator.EventCreator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class PartierApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(PartierApplication.class, args);
		ctx.getBean(EventCreator.class).initialize();

	}

}

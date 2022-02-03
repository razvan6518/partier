package com.webCrawlers.partier;

import com.webCrawlers.partier.eventCreator.EventCreator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class PartierApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(PartierApplication.class, args);
//		ctx.getBean(EventCreator.class).initialize();
	}
}

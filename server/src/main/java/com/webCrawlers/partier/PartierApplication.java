package com.webCrawlers.partier;

import com.webCrawlers.partier.eventCreator.EventCreator;
import com.webCrawlers.partier.model.user.AppUser;
import com.webCrawlers.partier.model.user.Role;
import com.webCrawlers.partier.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class PartierApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(PartierApplication.class, args);

//		ctx.getBean(UserService.class).saveRole(new Role(null, "ROLE_USER"));
//		ctx.getBean(UserService.class).saveUser(new AppUser(null, "razvan", "razvan", "1234", new ArrayList<>()));
//		ctx.getBean(UserService.class).addRoleToUser("razvan", "ROLE_USER");
//		ctx.getBean(EventCreator.class).initialize();
	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
}

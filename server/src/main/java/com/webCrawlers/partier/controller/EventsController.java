package com.webCrawlers.partier.controller;

import com.webCrawlers.partier.model.Event;
import com.webCrawlers.partier.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Set;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
//@EnableGlobalMethodSecurity(jsr250Enabled=true)
public class EventsController {

    EventService eventService;

    @Autowired
    public EventsController(EventService es) {
        this.eventService = es;
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable Long id) {
        return eventService.getEvent(id);
    }

    @GetMapping
//    @RolesAllowed("ORGANISER")
    public Set<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @PostMapping
//    @RolesAllowed("ORGANISER")
    public void addEvent(@RequestBody Event event) {
        eventService.addEvent(event);
    }

}
